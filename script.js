const videoElement = document.querySelector('#video');
const button = document.querySelector('#button');

//Ask user to select media stream, pass it to video element and play it.
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (e) {
        console.log('Something went wrong!', e)
    }
}

button.addEventListener('click', async () => {
    // Disable button 
    button.disabled = true;

    // Start Pic in Pic
    await videoElement.requestPictureInPicture();

    //Enable button
    button.disabled = false;
});

// Onload
selectMediaStream();