const gallery = document.getElementById('gallery');
const checkgal = document.querySelector('.checkGallery');
const services = document.querySelector('.packages');
const checkserv = document.querySelector('#chkserv');
const contact = document.querySelector('.contact');

checkgal.addEventListener('click', () => {
    gallery.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

checkserv.addEventListener('click', () => {
    toservice();
});

function toService() {
    services.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function toContact() {
    contact.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}


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

const ham = document.querySelector('.ham');
const hammenu = document.querySelector('.hammenu');

ham.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    hammenu.classList.toggle('hidden');
}

const backtoservice = document.querySelectorAll('.back');
backtoservice.forEach(button => {
    button.addEventListener('click', () => {
        services.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

const logoDetail = document.querySelector('#logodetail');
const flyerDetail = document.querySelector('#flyersdetail');
const photographyDetail = document.querySelector('#photographydetail');
const graphicsDetail = document.querySelector('#graphicsdetail');

function toLogo() {
    logoDetail.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });    
}

function toFlyer() {
    flyerDetail.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function toPhotography() {
    photographyDetail.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function toGraphics() {
    graphicsDetail.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}