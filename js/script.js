const body = document.body;

let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

if (body.classList.contains('login-register')) {
    console.log('login/register')

    $(document).ready(function () {
        const $loginEmail = $('#login-email');
        const $loginPassword = $('#login-pw');
        const $forgotPasswordEmail = $('#forgot-pw-email');
        const $registerName = $('#register-name');
        const $registerLastName = $('#register-lastname');
        const $registerEmail = $('#register-email');
        const $registerPassword = $('#register-pw');
        const passwordStrengthIndicator = document.getElementById('pw-strength');

        $('#login-form').on('submit', function (e) {
            if (!checkLoginInputsOnSubmit($loginEmail.get(0), $loginPassword.get(0))) {
                e.preventDefault();
            }
        });

        $($loginEmail).on({
            focusout: function () {
                checkEmailOnFocusOut($loginEmail.get(0));
            },
            input: function () {
                resetInput($loginEmail.get(0));
            }
        });

        $($loginPassword).on('input', function () {
            resetInput($loginPassword.get(0));
        });

        $('#forgot-pw-form').on('submit', function (e) {
            if (!checkForgotPasswordInputsOnSubmit($forgotPasswordEmail.get(0))) {
                e.preventDefault();
            }
        });

        $($forgotPasswordEmail).on({
            focusout: function () {
                checkEmailOnFocusOut($forgotPasswordEmail.get(0));
            },
            input: function () {
                resetInput($forgotPasswordEmail.get(0));
            }
        });

        $('#register-form').on('submit', function (e) {
            if (!checkRegisterInputsOnSubmit($registerEmail.get(0), $registerPassword.get(0),
                passwordStrengthIndicator, $registerName.get(0), $registerLastName.get(0))) {
                e.preventDefault();
            }
        });

        $($registerName).on('input', function () {
            resetInput($registerName.get(0));
        });

        $($registerLastName).on('input', function () {
            resetInput($registerLastName.get(0));
        });

        $($registerEmail).on({
            focusout: function () {
                checkEmailOnFocusOut($registerEmail.get(0));
            },
            input: function () {
                resetInput($registerEmail.get(0));
            }
        });

        $($registerPassword).on('input', function () {
            resetInput($registerPassword.get(0));
            checkPasswordStrength($registerPassword.get(0), passwordStrengthIndicator);
        });

        $('#login-sh-btn').on('click', function () {
            togglePasswordView($loginPassword.get(0), $('#login-sh-btn').get(0));
        });

        $('#register-sh-btn').on('click', function () {
            togglePasswordView($registerPassword.get(0), $('#register-sh-btn').get(0));
        });

        $('#forgot-pw-btn').on('click', function () {
            $('#login-register-tabs, #forgot-pw-tab').toggle();
            $('#login-form').get(0).reset();
            $('#register-form').get(0).reset();
            resetInput($loginEmail.get(0));
            resetInput($loginPassword.get(0));
            resetInput($registerEmail.get(0));
            resetInput($registerName.get(0));
            resetInput($registerLastName.get(0));
            resetInput($registerPassword.get(0));
        });

        $('#forgot-pw-back-btn').on('click', function () {
            $('#login-register-tabs, #forgot-pw-tab').toggle();
            $('#forgot-pw-form').get(0).reset();
            resetInput($forgotPasswordEmail.get(0));
        });

        $('#register-shortcut-btn').on('click', function () {
            $('#pills-register-tab').click();
        });

        $('#pills-register-tab').on('click', function () {
            $('#login-form').get(0).reset();
            resetInput($loginEmail.get(0));
            resetInput($loginPassword.get(0));
        });

        $('#pills-login-tab').on('click', function () {
            $('#register-form').get(0).reset();
            $('#pw-policies').slideUp(400);
            resetPasswordStrength(passwordStrengthIndicator);
            resetInput($registerEmail.get(0));
            resetInput($registerName.get(0));
            resetInput($registerLastName.get(0));
            resetInput($registerPassword.get(0));
        });
    });
}