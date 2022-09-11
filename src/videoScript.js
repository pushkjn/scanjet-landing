addEventListener("DOMContentLoaded", () => {
    let videoElem = document.querySelector(".about-us__video");
    let playButton = document.querySelector(".video__play");

    playButton.addEventListener("click", handlePlayButton, false);
    playVideo();

    function pauseOnclick() {
        videoElem.pause();
        playButton.classList.remove("playing");
    }

    async function playVideo() {
        try {
            await videoElem.play();
            playButton.classList.add("playing");
            videoElem.addEventListener("click", pauseOnclick);
            videoElem.style.cursor = 'pointer';
        } catch (err) {
            playButton.classList.remove("playing");
            videoElem.removeEventListener("click", pauseOnclick);
            videoElem.style.cursor = 'auto';
        }
    }

    function handlePlayButton() {
        if (videoElem.paused) {
            playVideo();
        } else {
            videoElem.pause();
            playButton.classList.remove("playing");
        }
    }
})