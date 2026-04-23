// CONFIGURACIÓN: El nombre de la pestaña en tu Google Sheet
var SHEET_NAME = "Hoja 1";

function doPost(e) {
  // 1. EL CERROJO: Evita que dos reportes choquen si llegan al mismo tiempo
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Espera 10 segundos antes de rendirse

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName(SHEET_NAME);

    // 2. LECTURA DINÁMICA: Lee los encabezados de la Fila 1
    // Tu fila 1 debe tener: timestamp, nombre, whatsapp, email, ciudad, movilidad, consent
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow() + 1;
    var newRow = [];

    // 3. MAPEADO DE DATOS: Busca el nombre del input y lo pone en su columna
    for (var i = 0; i < headers.length; i++) {
      var header = headers[i];

      if (header === 'timestamp') {
        // Rigurosidad horaria: Santiago de Chile
        var fechaHora = Utilities.formatDate(new Date(), "America/Santiago", "dd/MM/yyyy HH:mm:ss");
        newRow.push(fechaHora);
      } else {
        // Toma el dato del HTML que coincida con el nombre de la columna
        newRow.push(e.parameter[header] || '');
      }
    }

    // 4. ESCRITURA: Inserta la fila completa
    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    // Respuesta de éxito para que tu HTML sepa que terminó bien
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success", "row": nextRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    // Si algo explota, te avisará qué fue
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    // Liberamos el candado para que pase el siguiente usuario
    lock.releaseLock();
  }
}
