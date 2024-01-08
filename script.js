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

// All song names
var allSideSongNames = document.querySelectorAll(".side-song-name");
var allCardSongNames = document.querySelectorAll(".card-song-name");

// Adjusting Greeting Messege
var date = new Date();
var greetingMessege;

if (date.getHours() < 12){
    greetingMessege = "Good Morning";
} else if (date.getHours() < 18){
    greetingMessege = "Good Afternoon";
} else{
    greetingMessege = "Good Evening";
}
document.querySelector(".greeting-text").textContent = greetingMessege;

// song details list
var songDetails = [
    {
        songName: "Hanuman Chalisa",
        songCode: "Song-1",
        filePath: "./songs/Hanuman chalisa.mp3",
        coverPath: "./covers/1.jpg"
    },
    {
        songName: "Geetabitan Er Dibbi",
        songCode: "Song-2",
        filePath: "./songs/geetabitan er dibbi.mp3",
        coverPath: "./covers/2.png"
    },
    {
        songName: "Shindurlal Chadhayo",
        songCode: "Song-3",
        filePath: "./songs/shindurlal chadhayo.mp3",
        coverPath: "./covers/3.jpg"
    },
    {
        songName: "Shree Ram Chandra Kripalu",
        songCode: "Song-4",
        filePath: "./songs/shree ram chandra kripalu.mp3",
        coverPath: "./covers/4.jpg"
    },
    {
        songName: "Cheques",
        songCode: "Song-5",
        filePath: "./songs/Cheques.mp3",
        coverPath: "./covers/5.png"
    },
    {
        songName: "One love",
        songCode: "Song-6",
        filePath: "./songs/one love.mp3",
        coverPath: "./covers/6.png"
    },
    {
        songName: "Cheap thrills",
        songCode: "Song-7",
        filePath: "./songs/cheap thrills.mp3",
        coverPath: "./covers/7.png"
    },
    {
        songName: "Until I found you",
        songCode: "Song-8",
        filePath: "./songs/until I found you.mp3",
        coverPath: "./covers/8.png"
    },
    {
        songName: "Sarangi",
        songCode: "Song-9",
        filePath: "./songs/sarangi.mp3",
        coverPath: "./covers/9.png"
    },
    {
        songName: "Choo lo",
        songCode: "Song-10",
        filePath: "./songs/choo lo.mp3",
        coverPath: "./covers/10.png"
    },
    {
        songName: "Mangal Bhavan",
        songCode: "Song-11",
        filePath: "./songs/mangal bhavan.mp3",
        coverPath: "./covers/11.jpg"
    },
    {
        songName: "Milon Hobe Kotodine",
        songCode: "Song-12",
        filePath: "./songs/milon hobe kotodine.mp3",
        coverPath: "./covers/12.jpg"
    },
    {
        songName: "Night changes",
        songCode: "Song-13",
        filePath: "./songs/night changes.mp3",
        coverPath: "./covers/13.png"
    },
    {
        songName: "Oviman",
        songCode: "Song-14",
        filePath: "./songs/oviman.mp3",
        coverPath: "./covers/14.png"
    },
    {
        songName: "Phagun Haway",
        songCode: "Song-15",
        filePath: "./songs/phagun haway.mp3",
        coverPath: "./covers/15.jpg"
    },
    {
        songName: "Dandelions",
        songCode: "Song-16",
        filePath: "./songs/dandelions.mp3",
        coverPath: "./covers/16.png"
    },
    {
        songName: "Saibo",
        songCode: "Song-17",
        filePath: "./songs/saibo.mp3",
        coverPath: "./covers/17.png"
    },
    {
        songName: "Sajani",
        songCode: "Song-18",
        filePath: "./songs/sajani.mp3",
        coverPath: "./covers/18.png"
    },
    {
        songName: "Gulabi sharara",
        songCode: "Song-19",
        filePath: "./songs/gulabi sharara.mp3",
        coverPath: "./covers/19.png"
    },
    {
        songName: "Jeno tomari kache",
        songCode: "Song-20",
        filePath: "./songs/jeno tomari kache.mp3",
        coverPath: "./covers/20.png"
    },
    {
        songName: "Fwa Bagha re",
        songCode: "Song-21",
        filePath: "./songs/fwa bagha re.mp3",
        coverPath: "./covers/21.png"
    },
    {
        songName: "Maya",
        songCode: "Song-22",
        filePath: "./songs/maya.mp3",
        coverPath: "./covers/22.png"
    },
    {
        songName: "Benche thakar gaan",
        songCode: "Song-23",
        filePath: "./songs/benche thakar gaan.mp3",
        coverPath: "./covers/23.png"
    },
    {
        songName: "A thousand years",
        songCode: "Song-24",
        filePath: "./songs/a thousand years.mp3",
        coverPath: "./covers/24.png"
    },
    {
        songName: "Let me love you",
        songCode: "Song-25",
        filePath: "./songs/let me love you.mp3",
        coverPath: "./covers/25.png"
    },
    {
        songName: "Perfect",
        songCode: "Song-26",
        filePath: "./songs/perfect.mp3",
        coverPath: "./covers/26.png"
    },
    {
        songName: "Shape of you",
        songCode: "Song-27",
        filePath: "./songs/shape of you.mp3",
        coverPath: "./covers/27.png"
    },
    {
        songName: "Egiye de",
        songCode: "Song-28",
        filePath: "./songs/egiye de.mp3",
        coverPath: "./covers/28.png"
    },
    {
        songName: "Ei bhalo ei kharap",
        songCode: "Song-29",
        filePath: "./songs/ei bhalo ei kharap.mp3",
        coverPath: "./covers/29.png"
    },
    {
        songName: "Love me like you do",
        songCode: "Song-30",
        filePath: "./songs/love me like you do.mp3",
        coverPath: "./covers/30.png"
    }
];

// Adjusting song names
allSideSongNames.forEach(function(e){
    for (var i = 0; i < songDetails.length; i++){
        if (e.classList.contains(songDetails[i].songCode)){
            e.textContent = songDetails[i].songName;
            break;
        }
    }
});

allCardSongNames.forEach(function(e){
    for (var i = 0; i < songDetails.length; i++){
        if (e.classList.contains(songDetails[i].songCode)){
            e.textContent = songDetails[i].songName;
            break;
        }
    }
});

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
            document.querySelector(".currentSongName").textContent = e.songName;
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
    if (progressBar.value >= 100){
        document.querySelector(".forward-button").click();
    }
}
function updateAudioTime(){
    audio.currentTime = audio.duration * (progressBar.value / 100);
}

// Playlist Scroll Buttons
var left = document.querySelectorAll(".left");
var right = document.querySelectorAll(".right");
var playlistContainer = document.querySelectorAll(".playlist-container");
for (var i = 0; i < left.length; i++){
    left[i].addEventListener("click", function(){
        if (this.classList.contains("list-1")){
            playlistContainer[0].scrollLeft += 200;
        }
        else if (this.classList.contains("list-2")){
            playlistContainer[1].scrollLeft += 200;
        }
        else{
            playlistContainer[2].scrollLeft += 200;
        }
    });
}
for (var i = 0; i < left.length; i++){
    right[i].addEventListener("click", function(){
        if (this.classList.contains("list-1")){
            playlistContainer[0].scrollLeft -= 200;
        }
        else if (this.classList.contains("list-2")){
            playlistContainer[1].scrollLeft -= 200;
        }
        else{
            playlistContainer[2].scrollLeft -= 200;
        }
    });
}

// Responsiveness
var sideBarHideBtn = document.querySelector(".side-bar-hide-btn");
var sideBar = document.querySelector(".side-bar");
var primary = document.querySelector(".primary-section");
var container = document.querySelector(".container");
sideBarHideBtn.addEventListener("click", function(){
    if (container.classList.toggle("grow")){
        this.textContent = "Show";
        sideBarHideBtn.classList.add("side-bar-show-btn");
    }
    else{
        this.textContent = "Hide";
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