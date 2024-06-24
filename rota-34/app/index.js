//incio da validação

$(document).ready(function () {

    // Máscara para CPF
    $('#inputCPF').mask('000.000.000-00', { reverse: true });

    // Máscara para CEP
    $('#inputCEP').mask('00000-000');

    // Função para validar nome
    function validateName() {
        var name = $('#inputName').val().trim();
        var regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1][a-zA-ZÀ-ÿ\u00f1\u00d1\s]{0,49}$/; // Permite letras e espaços, mínimo 1, máximo 50
        return regex.test(name);
    }

    // Função para validar CPF
    function validateCPF() {
        var cpf = $('#inputCPF').val().replace(/[^\d]/g, ''); // Remove não-dígitos
        var regex = /^\d{11}$/; // Deve conter exatamente 11 dígitos numéricos
        return regex.test(cpf);
    }

    // Função para validar email
    function validateEmail() {
        var email = $('#emailInput').val().trim();
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Função para validar CEP
    function validateCEP() {
        var cep = $('#inputCEP').val().replace(/[^\d]/g, ''); // Remove não-dígitos
        var regex = /^\d{8}$/; // Deve conter exatamente 8 dígitos numéricos
        return regex.test(cep);
    }

    // Evento de submit do formulário
    $('#cadastroForm').submit(function (event) {
        var isValid = true;

        // Validar nome
        if (!validateName()) {
            $('#name-error').show();
            isValid = false;
        } else {
            $('#name-error').hide();
        }

        // Validar CPF
        if (!validateCPF()) {
            $('#cpf-error').show();
            isValid = false;
        } else {
            $('#cpf-error').hide();
        }

        // Validar email
        if (!validateEmail()) {
            $('#email-error').show();
            isValid = false;
        } else {
            $('#email-error').hide();
        }

        // Validar CEP
        if (!validateCEP()) {
            $('#cep-error').show();
            isValid = false;
        } else {
            $('#cep-error').hide();
        }

        // Se algum campo não for válido, cancelar o envio do formulário
        if (!isValid) {
            event.preventDefault();
        }
    });

});

//fim da validação

// inicio do modal
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastroForm');
    const modalNome = document.getElementById('modalNome');
    const modalCPF = document.getElementById('modalCPF');
    const modalData = document.getElementById('modalData');
    const modalRua = document.getElementById('modalRua');
    const modalCEP = document.getElementById('modalCEP');
    const modalNumero = document.getElementById('modalNumero');
    const modalEmail = document.getElementById('modalEmail');
    const modalNotificacoes = document.getElementById('modalNotificacoes');

    document.getElementById('salvarModal').addEventListener('click', function () {
        modalNome.textContent = form.inputName.value;
        modalCPF.textContent = form.inputCPF.value;
        modalData.textContent = form.inputData.value;
        modalRua.textContent = form.inputRua.value;
        modalCEP.textContent = form.inputCEP.value;
        modalNumero.textContent = form.inputNumber.value;
        modalEmail.textContent = form.emailInput.value;
        modalNotificacoes.textContent = form.flexCheckChecked.checked ? 'Sim' : 'Não';

        // Mostrar o modal
        const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        modal.show();
    });
});
// fim do modal