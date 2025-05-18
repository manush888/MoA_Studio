const gallery = document.getElementById('gallery');
const checkgal = document.querySelector('.checkGallery');

checkgal.addEventListener('click', () => {
    gallery.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});
