

const images = [
    "./images/musema-1.jpeg",
    "./images/musema-2.png",
    "./images/musema-3.png"
];

const profileImage = document.getElementById('profile-picture');
const modal = document.getElementById('modal');
const modalCloseButton = document.getElementById('modal-close-button');
const modalContentImage = document.getElementById('modal-content-image');

const showPreviousImageButton = document.getElementById('show-previous-image-button');
const showNextImageButton = document.getElementById('show-next-image-button');


profileImage.addEventListener('click', handleProfileImageClick);
modalCloseButton.addEventListener('click', closeModal);
profileImage.addEventListener('click', showModal);
showPreviousImageButton.addEventListener('click', prevModalImage);
showNextImageButton.addEventListener('click', nextModalImage);
window.addEventListener('click', onWindowClick);


let imageIndex = 0;
function setupImageCarousel() {
    if(imageIndex < images.length) {
        profileImage.src = images[imageIndex];
        imageIndex++
    } else {
        imageIndex = 0;
        profileImage.src = images[imageIndex];
    }
}

setInterval(setupImageCarousel, 5000);

// modal actions
let currentModalImageIndex;
function handleProfileImageClick(e) {
    const imageSrc = e.target.src;
    modalContentImage.src = imageSrc;
    currentModalImageIndex = getImageIndex(imageSrc);
}

function closeModal(){
    modal.style.display = 'none';
}

function showModal(){
    modal.style.display = 'block';
}

function nextModalImage(){
    if(currentModalImageIndex >= images.length-1){
        currentModalImageIndex = 0;
    } else{
        currentModalImageIndex++;
    }
    setModalImageSrc();
}

function prevModalImage(){
    if(currentModalImageIndex <= 0){
        currentModalImageIndex = images.length -1;
    } else{
        currentModalImageIndex--;
    }
    setModalImageSrc();
}
function getImageIndex(src) {
    return images.findIndex(imageSrc => src.indexOf(imageSrc) >= 0);
}

function setModalImageSrc() {
    modalContentImage.src = images[currentModalImageIndex]
}

function onWindowClick(e) {
    if(e.target == modal){
        closeModal();
    }
}