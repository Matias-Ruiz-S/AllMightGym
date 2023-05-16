const body = document.body;
if (body.classList.contains('home')) {
    console.log('home')
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
        const $registerRut = $('#register-rut');
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
            if (!checkRegisterInputsOnSubmit($registerEmail.get(0),$registerRut.get(0), $registerPassword.get(0),
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

        $($registerRut).on('input', function () {
            resetInput($registerRut.get(0));
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
            resetInput($registerRut.get(0));
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
            resetInput($registerRut.get(0));
            resetInput($registerPassword.get(0));
        });
    });
}

//Validaciones de formularios

function checkLoginInputsOnSubmit(loginEmail, loginPassword) {
    //get values from the inputs
    const emailValue = loginEmail.value.trim();
    const passwordValue = loginPassword.value.trim();

    if (emailValue === '') {
        //add error class
        setErrorFor(loginEmail, 'Por favor ingrese un email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(loginEmail, 'Por favor ingrese un email válido');
    } else {
        //add success class
        setSuccessFor(loginEmail);
    }

    if (passwordValue === '') {
        setErrorFor(loginPassword, 'Por favor ingrese su contraseña');
    } else {
        setSuccessFor(loginPassword);
    }

    return checkSuccess(loginEmail) && checkSuccess(loginPassword);
}

function checkForgotPasswordInputsOnSubmit(forgotPasswordEmail) {
    //get values from the inputs
    const emailValue = forgotPasswordEmail.value.trim();

    if (emailValue === '') {
        //add error class
        setErrorFor(forgotPasswordEmail, 'Por favor ingrese un email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(forgotPasswordEmail, 'Por favor ingrese un email válido');
    } else {
        //add success class
        setSuccessFor(forgotPasswordEmail);
    }

    return checkSuccess(forgotPasswordEmail);
}

function checkRegisterInputsOnSubmit(registerEmail,registerRut, registerPassword, passwordStrengthIndicator, registerName, registerLastName) {
    //get values from the inputs
    const emailValue = registerEmail.value.trim();
    const rutValue = registerRut.value.trim();
    const passwordValue = registerPassword.value.trim();
    const nameValue = registerName.value.trim();
    const lastNameValue = registerLastName.value.trim();

    if (emailValue === '') {
        //add error class
        setErrorFor(registerEmail, 'Por favor ingrese un email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(registerEmail, 'Por favor ingrese un email válido');
    } else {
        //add success class
        setSuccessFor(registerEmail);
    }

    if (passwordValue === '') {
        setErrorFor(registerPassword, 'Por favor ingrese una contraseña');
    } else if (!checkPasswordStrength(registerPassword, passwordStrengthIndicator)) {
        setErrorFor(registerPassword, 'La contraseña no cumple con los requisitos');
    } else {
        setSuccessFor(registerPassword);
    }

    if (nameValue === '') {
        setErrorFor(registerName, 'Por favor ingrese su nombre');
    } else {
        setSuccessFor(registerName);
    }

    if (lastNameValue === '') {
        setErrorFor(registerLastName, 'Por favor ingrese su apellido');
    } else {
        setSuccessFor(registerLastName);
    }

    if (rutValue === '') {
        setErrorFor(registerRut, 'Por favor ingrese su Rut');
    } else {
        setSuccessFor(registerRut);
    }

    return checkSuccess(registerEmail) && checkSuccess(registerPassword) && checkSuccess(registerName) && checkSuccess(registerLastName) && checkSuccess(registerRut);
}

function checkSubsInputsOnSubmit(subsEmail) {
    //get values from the inputs
    const emailValue = subsEmail.value.trim();

    if (emailValue === '') {
        //add error class
        setErrorFor(subsEmail, 'Por favor ingrese un email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(subsEmail, 'Por favor ingrese un email válido');
    } else {
        //add success class
        setSuccessFor(subsEmail);
    }

    return checkSuccess(subsEmail);
}



function checkEmailOnFocusOut(email) {
    const emailValue = email.value.trim();

    if (!isEmail(emailValue) && emailValue !== '') {
        setErrorFor(email, 'Por favor ingrese un email válido');
    }
}

function setErrorFor(input, message) {
    const formOutline = input.parentElement;
    const errorMessage = formOutline.querySelector('div.invalid-feedback')

    //add error message inside container
    errorMessage.innerText = message;

    //add error class
    formOutline.className = 'form-outline error';

    input.classList.remove('is-invalid');
    input.classList.add('is-invalid');
}

function setSuccessFor(input) {
    const formOutline = input.parentElement;
    formOutline.className = 'form-outline success';

    input.classList.remove('is-invalid');
}

function resetInput(input) {
    const formOutline = input.parentElement;
    formOutline.className = 'form-outline';

    input.classList.remove('is-invalid');
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkPasswordStrength(password, passwordStrengthIndicator) {
    let passwordValue = password.value.trim();
    let strengthCount = 0;
    let hasLength = false;
    const $lengthPolicyCheck = $('#length-policy i');
    const $numberPolicyCheck = $('#number-policy i');
    const $uppercasePolicyCheck = $('#uppercase-policy i');
    const $lowercasePolicyCheck = $('#lowercase-policy i');
    const $pwPolicies = $('#pw-policies');

    //If password length is between 8-20
    if (passwordValue.length > 7 && passwordValue.length < 21) {
        $($lengthPolicyCheck).css('visibility', 'visible');
        hasLength = true;
    } else {
        $($lengthPolicyCheck).css('visibility', 'hidden');
    }

    //If password contains any lowercase character
    if (passwordValue.match(/([a-z])/)) {
        $($lowercasePolicyCheck).css('visibility', 'visible');
        strengthCount += 1;
    } else {
        $($lowercasePolicyCheck).css('visibility', 'hidden');
    }

    //If password contains any uppercase character
    if (passwordValue.match(/([A-Z])/)) {
        $($uppercasePolicyCheck).css('visibility', 'visible');
        strengthCount += 1;
    } else {
        $($uppercasePolicyCheck).css('visibility', 'hidden');
    }

    //If password contains any number character
    if (passwordValue.match(/([0-9])/)) {
        $($numberPolicyCheck).css('visibility', 'visible');
        strengthCount += 1;
    } else {
        $($numberPolicyCheck).css('visibility', 'hidden');
    }

    if (passwordValue !== '') {
        if (hasLength) {
            if (strengthCount === 1) {
                resetPasswordStrength(passwordStrengthIndicator);
                passwordStrengthIndicator.classList.add('weak');
                passwordStrengthIndicator.style = "width: 66.6%";
            } else if (strengthCount >= 2) {
                resetPasswordStrength(passwordStrengthIndicator);
                passwordStrengthIndicator.classList.add('good');
                passwordStrengthIndicator.style = "width: 100%";
                $($pwPolicies).slideUp(400);
                return true;
            }
        } else {
            resetPasswordStrength(passwordStrengthIndicator);
            passwordStrengthIndicator.classList.add('very-weak');
            passwordStrengthIndicator.style = "width: 33.3%";
        }
    } else {
        resetPasswordStrength(passwordStrengthIndicator);
    }

    $($pwPolicies).slideDown(400);
    return false;
}

function resetPasswordStrength(passwordStrengthIndicator) {
    passwordStrengthIndicator.classList.remove('very-weak');
    passwordStrengthIndicator.classList.remove('weak');
    passwordStrengthIndicator.classList.remove('good');
    passwordStrengthIndicator.style.width = '0';
}

function checkSuccess(input) {
    const formOutline = input.parentElement;
    return formOutline.classList.contains('success');
}

//Ver contrasena/ocultar

function togglePasswordView(password, button) {
    if (password.type === 'password') {
        password.type = 'text';
        button.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
    } else {
        password.type = 'password';
        button.innerHTML = '<i class="fa-regular fa-eye"></i>';
    }
}

