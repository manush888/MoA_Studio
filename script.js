const gallery = document.getElementById('gallery');
const checkgal = document.querySelector('.checkGallery');
const services = document.querySelector('.packages');
const checkserv = document.querySelector('#chkserv');

checkgal.addEventListener('click', () => {
    gallery.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

checkserv.addEventListener('click', () => {
    services.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});


function sendMessage() {
    const method = document.getElementById("method").value;
    const purpose = document.getElementById("purpose").value;
    const service = document.getElementById("service").value;
    let message = "";

    if (purpose === "request_service") {
        const details = document.getElementById("details").value.trim();
        if (!details) {
            alert("Please enter details for your service request.");
            return;
        }
        message = `Requesting Service: ${service}\nDetails: ${details}`;
    } else {
        message = `Inquiry about: ${service}`;
    }

    if (method === "gmail") {
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=manushasandesha@gmail.com&su=${encodeURIComponent("Service Request")}&body=${encodeURIComponent(message)}`;
        window.open(gmailURL, "_blank");
    } else if (method === "whatsapp") {
        const whatsappURL = `https://wa.me/94701389334?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");
    }
}

function toggleDetails() {
    const purpose = document.getElementById("purpose").value;
    const detailsField = document.getElementById("detailsField");
    detailsField.style.display = (purpose === "request_service") ? "block" : "none";
}
