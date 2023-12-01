emailjs.init("PX_wPOkQAeWCjwH0qprYl");

let btnSubmit = document.getElementById("btn-submit");
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btnSubmit.addEventListener("click", function (event) {
    if (document.getElementById("name").value === "") {
        alert("Por favor, ingresa tu nombre");
    } else if (document.getElementById("mail").value === "") {
        alert("Por favor, ingresa tu correo electrónico");
    } else if (!emailRegex.test(document.getElementById("mail").value)) {
        alert("Por favor, ingresa un correo electrónico válido");
    } else if (document.getElementById("message").value === "") {
        alert("Por favor, ingresa un mensaje");
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
            Toastify({
                text: "Correo enviado con éxito",
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #25aae1, #3f86ed)",
                    fontSize: "20px"
                }
            }).showToast();

            document.getElementById("name").value = "";
            document.getElementById("mail").value = "";
            document.getElementById("message").value = "";

            btnSubmit.disabled = false;
        }, function (error) {
            Toastify({
                text: "Error al enviar el correo",
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #FF4D4D, #F92828)",
                    fontSize: "20px"
                }
            }).showToast();

            btnSubmit.disabled = false;
        });
}