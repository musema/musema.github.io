
const profileImage = document.getElementById('profile-picture');
const images = [
    "./images/musema-1.jpeg",
    "./images/musema-2.png",
    "./images/musema-3.png"
]
if(profileImage) {
    let imageIndex = 0;
    setInterval(() => {
        if(imageIndex < images.length) {
            profileImage.src = images[imageIndex];
            imageIndex++
        } else {
            imageIndex = 0;
            profileImage.src = images[imageIndex];
        }
    }, 5000);

    profileImage.addEventListener('click', function(){

    })
}