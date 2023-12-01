emailjs.init("HRHHZYtFfTJ9wfile");

let btnSubmit = document.getElementById("btn-submit");
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btnSubmit.addEventListener("click", function (event) {
    if (document.getElementById("name").value === "") {
        alert("Por favor, ingrese su nombre");
    } else if (document.getElementById("mail").value === "") {
        alert("Por favor, ingrese su correo electrónico");
    } else if (!emailRegex.test(document.getElementById("mail").value)) {
        alert("Por favor, ingrese un correo electrónico válido");
    } else if (document.getElementById("message").value === "") {
        alert("Por favor, ingrese un mensaje");
    } else {
        btnSubmit.disabled = true;
        sendEmail();
    }
});

function sendEmail() {
    var templateParams = {
        name: document.getElementById("name").value,
        mail: document.getElementById("mail").value,
        message: document.getElementById("message").value
    };

    emailjs.send("default_service", "contact_form", templateParams)
        .then(function (response) {
            alert("Correo enviado con éxito", response);

            document.getElementById("name").value = "";
            document.getElementById("mail").value = "";
            document.getElementById("message").value = "";

            btnSubmit.disabled = false;
        }, function (error) {
            alert("Error al enviar el correo", error);
        });
}