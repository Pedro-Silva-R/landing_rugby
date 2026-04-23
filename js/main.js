const form = document.getElementById('lead-form');
const status = document.getElementById('form-status');
const submitBtn = form.querySelector('button[type="submit"]');

// REEMPLAZAR con la URL que obtengas al implementar en Apps Script
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxQ2xHzWMJsVWleRPURQ8zilsHqEkr6SY04e0_l8wvL8LfsA94aK7ADxZHeL3QP8FVx/exec';

// Utilidad para mostrar error
const showError = (inputElement, message) => {
    const errorSpan = document.getElementById(`${inputElement.id}-error`);
    if (errorSpan) {
        errorSpan.textContent = message;
        errorSpan.classList.add('active');
        inputElement.setAttribute('aria-invalid', 'true');
    }
};

// Utilidad para limpiar error
const clearError = (inputElement) => {
    const errorSpan = document.getElementById(`${inputElement.id}-error`);
    if (errorSpan) {
        errorSpan.textContent = '';
        errorSpan.classList.remove('active');
        inputElement.setAttribute('aria-invalid', 'false');
    }
};

// Funciones de validación
const validateNombre = (input) => {
    if (input.value.trim().length < 3) {
        showError(input, 'El nombre debe tener al menos 3 caracteres.');
        return false;
    }
    clearError(input);
    return true;
};

const validateWhatsapp = (input) => {
    const value = input.value.trim();
    // Permite números, espacios y el signo + al inicio
    const phoneRegex = /^\+?[0-9\s]*$/;
    if (value && !phoneRegex.test(value)) {
        showError(input, 'Ingresa solo números (y opcionalmente el signo +).');
        return false;
    }
    clearError(input);
    return true;
};

const validateEmail = (input) => {
    const value = input.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
        showError(input, 'Ingresa un email válido.');
        return false;
    }
    clearError(input);
    return true;
};

// Contacto mínimo requerido (WhatsApp o Email)
const validateContact = () => {
    const whatsapp = document.getElementById('whatsapp');
    const email = document.getElementById('email');
    
    // Si ambos están vacíos, mostrar error en ambos
    if (!whatsapp.value.trim() && !email.value.trim()) {
        showError(whatsapp, 'Debes ingresar WhatsApp o Email.');
        showError(email, 'Debes ingresar Email o WhatsApp.');
        return false;
    }
    
    // Limpiar error genérico si hay datos en alguno
    if (whatsapp.value.trim() || email.value.trim()) {
        if (document.getElementById('whatsapp-error').textContent.includes('Debes ingresar')) clearError(whatsapp);
        if (document.getElementById('email-error').textContent.includes('Debes ingresar')) clearError(email);
    }

    // Validar individualmente si tienen datos
    let isValid = true;
    if (!validateWhatsapp(whatsapp)) isValid = false;
    if (!validateEmail(email)) isValid = false;
    
    return isValid;
};

const validateCiudad = (input) => {
    if (input.value.trim().length < 2) {
        showError(input, 'La ciudad es obligatoria.');
        return false;
    }
    clearError(input);
    return true;
};

const validateConsent = (input) => {
    if (!input.checked) {
        showError(input, 'Debes aceptar los términos para continuar.');
        return false;
    }
    clearError(input);
    return true;
};

// Asignar validación en vivo (blur y change) a cada campo
const inputs = form.querySelectorAll('input, select');
inputs.forEach(input => {
    const eventType = input.type === 'checkbox' || input.tagName === 'SELECT' ? 'change' : 'blur';
    
    input.addEventListener(eventType, () => {
        switch(input.id) {
            case 'nombre': validateNombre(input); break;
            case 'whatsapp': 
            case 'email': 
                validateContact(); break; // Valida ambos juntos por la regla condicional
            case 'ciudad': validateCiudad(input); break;
            case 'consent': validateConsent(input); break;
        }
    });
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Limpiar estado anterior
    status.style.display = 'none';
    status.className = '';
    
    // Ejecutar todas las validaciones
    let isFormValid = true;
    let firstInvalidInput = null;

    if (!validateNombre(document.getElementById('nombre'))) {
        isFormValid = false;
        if (!firstInvalidInput) firstInvalidInput = document.getElementById('nombre');
    }
    
    if (!validateContact()) {
        isFormValid = false;
        if (!firstInvalidInput) {
            const wa = document.getElementById('whatsapp');
            const em = document.getElementById('email');
            firstInvalidInput = (!wa.value.trim() && !em.value.trim()) ? wa : 
                (wa.getAttribute('aria-invalid') === 'true' ? wa : em);
        }
    }

    if (!validateCiudad(document.getElementById('ciudad'))) {
        isFormValid = false;
        if (!firstInvalidInput) firstInvalidInput = document.getElementById('ciudad');
    }

    if (!validateConsent(document.getElementById('consent'))) {
        isFormValid = false;
        if (!firstInvalidInput) firstInvalidInput = document.getElementById('consent');
    }

    // Si hay errores, detener envío y hacer foco en el primer error
    if (!isFormValid) {
        status.style.display = 'block';
        status.style.background = 'var(--primary)';
        status.style.color = '#fff';
        status.textContent = 'Por favor, corrige los errores en el formulario antes de enviar.';
        
        if (firstInvalidInput) {
            firstInvalidInput.focus();
        }
        return;
    }

    const formData = new FormData(form);

    // UI State: Sending
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    try {
        // Envío real a Google Sheets usando el patrón probado
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            body: formData
        });

        const responseData = await response.json();

        if (responseData.result === "success") {
            const formWrapper = document.getElementById('form-wrapper');
            const successMessage = document.getElementById('success-message');
            
            // Ocultar formulario y mostrar éxito
            formWrapper.style.display = 'none';
            successMessage.style.display = 'block';
            
            form.reset();
            
            // Limpiar estilos de validación que pudieran quedar del form anterior
            inputs.forEach(clearError);
            
            // Scroll al mensaje de éxito
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            throw new Error(responseData.error || "Error desconocido en el servidor.");
        }

    } catch (error) {
        console.error('Error:', error);
        status.style.display = 'block';
        status.style.background = 'var(--primary)';
        status.style.color = '#fff';
        status.textContent = 'Hubo un problema al enviar. Intenta de nuevo.';
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar Inscripción';
    }
});