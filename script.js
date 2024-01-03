// play/pause icon sources
var playBtnSrc = "./images/play-button-arrowhead.png";
var pauseBtnSrc = "./images/pause.png";
var playBtnSrc2 = "./images/play-button.png";
var pauseBtnSrc2 = "./images/pause-button.png"

// play/pause buttons
var allPlayButtons = document.getElementsByClassName("play-button");
var allCardPlayButtons = document.getElementsByClassName("card-play-button");
var masterPlayButton = document.querySelector(".master-play");

// all playlists
var playlist1 = document.querySelectorAll(".playlist-1-button");
var playlist2 = document.querySelectorAll(".playlist-2-button");
var playlist3 = document.querySelectorAll(".playlist-3-button");

// next/previous buttons
var previousPlay = allPlayButtons[allPlayButtons.length -  1];
var nextPlay = allPlayButtons[0];

// other buttons and variables
var progressBar = document.querySelector("#progressBar");
var volumeBar = document.querySelector("#volumeBar");
var muteUnmuteButton = document.querySelector("#muteButton");
var currentVol = volumeBar.value;
var currentPlay;

// song details list
var songDetails = [
    {songName: "", songCode: "Song-1", filePath: "./songs/1.mp3", coverPath: "./covers/1.jpg"},
    {songName: "", songCode: "Song-2", filePath: "./songs/2.mp3", coverPath: "./covers/2.jpg"},
    {songName: "", songCode: "Song-3", filePath: "./songs/3.mp3", coverPath: "./covers/3.jpg"},
    {songName: "", songCode: "Song-4", filePath: "./songs/4.mp3", coverPath: "./covers/4.jpg"},
    {songName: "", songCode: "Song-5", filePath: "./songs/5.mp3", coverPath: "./covers/5.jpg"},
    {songName: "", songCode: "Song-6", filePath: "./songs/6.mp3", coverPath: "./covers/6.jpg"},
    {songName: "", songCode: "Song-7", filePath: "./songs/7.mp3", coverPath: "./covers/7.jpg"},
    {songName: "", songCode: "Song-8", filePath: "./songs/8.mp3", coverPath: "./covers/8.jpg"},
    {songName: "", songCode: "Song-9", filePath: "./songs/9.mp3", coverPath: "./covers/9.jpg"}
];

var audio = new Audio(songDetails[0].filePath);

// side bar play/pause buttons
for (var i = 0; i < allPlayButtons.length; i++){
    allPlayButtons[i].addEventListener("click", function(){
        if (this.src.endsWith("play-button-arrowhead.png")){
            pauseAll();
            playSelf(this);
            updateCover(this);
            updateCurrentSongName();
        }
        else{
            pauseSelf(this);
        }
    });
}

// card play/pause buttons
for (var i = 0; i < allCardPlayButtons.length; i++){
    allCardPlayButtons[i].addEventListener("click", function(){
        if (this.src.endsWith("play-button.png")){
            pauseAll();
            playSelf(this);
            updateCover(this);
            updateCurrentSongName();
        }
        else{
            pauseSelf(this);
        }
    });
}

// Master play/pause button
masterPlayButton.addEventListener("click", function(){
    if (this.src.endsWith("play-button-arrowhead.png")){
        if (!currentPlay){
            alert("Please select a song to play!");
        }
        else{
            playSelf(currentPlay);
        }
    }
    else{
        pauseAll();
        pauseSelf(currentPlay);
    }
});

// Previous Button
document.querySelector(".rewind-button").addEventListener("click", function(){
    if (!currentPlay){
        alert("Please select a song to play!");
    }
    else{
        if (currentPlay.classList.contains("side-button")){
            findPreviousPlay(allPlayButtons);
        }
        else{
            if (currentPlay.classList.contains("playlist-1-button")){
                findPreviousPlay(playlist1);
            }
            else if (currentPlay.classList.contains("playlist-2-button")){
                findPreviousPlay(playlist2);
            }
            else{
                findPreviousPlay(playlist3);
            }
        }
        pauseAll();
        playSelf(previousPlay);
        updateCover(previousPlay);
        updateCurrentSongName();
    }
});

// Next Button
document.querySelector(".forward-button").addEventListener("click", function(){
    if (!currentPlay){
        alert("Please select a song to play!");
    }
    else{
        if (currentPlay.classList.contains("side-button")){
            findNextPlay(allPlayButtons);
        }
        else{
            if (currentPlay.classList.contains("playlist-1-button")){
                findNextPlay(playlist1);
            }
            else if (currentPlay.classList.contains("playlist-2-button")){
                findNextPlay(playlist2);
            }
            else{
                findNextPlay(playlist3);
            }
        }
        pauseAll();
        playSelf(nextPlay);
        updateCover(nextPlay);
        updateCurrentSongName();
    }
});

// Mute/Unmute button
muteUnmuteButton.addEventListener("click", function(){
    if (!audio.muted){
        audio.muted = true;
        volumeBar.value = 0;
        muteUnmuteButton.src = "./images/mute.png";
    }
    else{
        audio.muted = false;
        volumeBar.value = currentVol;
        muteUnmuteButton.src = "./images/volume.png";
    }
});

// pause all function
function pauseAll(){
    for (var i = 0; i < allPlayButtons.length; i++){
        allPlayButtons[i].src = playBtnSrc;
    }
    for (var i = 0; i < allCardPlayButtons.length; i++){
        allCardPlayButtons[i].src = playBtnSrc2;
    }
    pauseAudio();
}

// master play/pause function
function playMasterPlay(){
    masterPlayButton.src = pauseBtnSrc;
}
function pauseMasterPause(){
    masterPlayButton.src = playBtnSrc;
}

// self play/pause function
function playSelf(e){
    if (e.classList.contains("side-button")){
        e.src = pauseBtnSrc;
    }
    else{
        e.src = pauseBtnSrc2;
    }
    if (e == currentPlay){
        audio.play();
        playMasterPlay();
    }
    else{
        playAudio(e);
        currentPlay = e;
    }
}
function pauseSelf(e){
    if (e.classList.contains("side-button")){
        e.src = playBtnSrc;
    }
    else{
        e.src = playBtnSrc2;
    }
    pauseAudio();
}

// select previous song
function findPreviousPlay(songList){
    if (currentPlay == songList[0]){
        previousPlay = songList[songList.length -  1];
    }
    else{
        for (var i = 0; i < songList.length; i++){
            if (songList[i] == currentPlay){
                previousPlay = songList[i - 1];
                break;
            }
        }
    }
}

// select next song
function findNextPlay(songList){
    if (currentPlay == songList[songList.length -  1]){
        nextPlay = songList[0];
    }
    else{
        for (var i = 0; i < songList.length; i++){
            if (songList[i] == currentPlay){
                nextPlay = songList[i + 1];
                break;
            }
        }
    }
}

// update cover photo function
function updateCover(e){
    songDetails.forEach(function (element){
        if (e.classList.contains(element.songCode)){
            document.querySelector(".currentSongCover").src = element.coverPath;
        }
    });
}

// update current song name
function updateCurrentSongName(){
    songDetails.forEach(function(e) {
        if (currentPlay.classList.contains(e.songCode)){
            document.querySelector(".currentSongName").textContent = e.songCode;
        }
    });
}

// play/pause audio
function playAudio(element){
    songDetails.forEach(function(e) {
        if (element.classList.contains(e.songCode)){
            audio.src = e.filePath;
        }
        // Handle Progress Bar
        if (element != currentPlay){
            audio.removeEventListener("timeupdate", updateProgressBar);
            progressBar.removeEventListener("input", updateAudioTime)
        }
        audio.addEventListener("loadeddata", function(){
            audio.play();
            audio.addEventListener("timeupdate", updateProgressBar);
            progressBar.addEventListener("input", updateAudioTime);

            // Handle Volume Bar
            volumeBar.addEventListener("input", function(){
                audio.volume = volumeBar.value;
                currentVol = volumeBar.value;
            });
        });
    });
    currentPlay = element;
    playMasterPlay();
}

function pauseAudio(){
    audio.pause();
    pauseMasterPause();
}

// Progress Bar functions
function updateProgressBar(){
    var progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
}
function updateAudioTime(){
    audio.currentTime = audio.duration * (progressBar.value / 100);
}

// Responsiveness
var sideBarHideBtn = document.querySelector(".side-bar-hide-btn");
var sideBar = document.querySelector(".side-bar");
var primary = document.querySelector(".primary-section");
var container = document.querySelector(".container");
sideBarHideBtn.addEventListener("click", function(){
    if (container.classList.toggle("grow")){
        this.textContent = "Show";
        sideBarHideBtn.classList.add("side-bar-show-btn")
        container.classList.remove("shrink");
        primary.classList.remove("shrink-primary");
    }
    else{
        this.textContent = "Hide";
        container.classList.add("shrink");
        primary.classList.add("shrink-primary");
        sideBarHideBtn.classList.remove("side-bar-show-btn");
    }
});

checkScreenWidth();
window.addEventListener('resize', checkScreenWidth);

function checkScreenWidth(){
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (screenWidth < 991 && !container.classList.contains("grow")){
        sideBarHideBtn.textContent = "Show";
        container.classList.add("grow")
        sideBarHideBtn.classList.add("side-bar-show-btn")
    }
    else if (screenWidth > 991 && container.classList.contains("grow")){
        sideBarHideBtn.textContent = "Hide";
        container.classList.remove("grow")
        sideBarHideBtn.classList.remove("side-bar-show-btn")
    }
}