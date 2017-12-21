////// Boutons player ///////
/////////////////////////////

var imgPlay = document.createElement('img');
imgPlay.setAttribute('class', 'button-play');
divButton.appendChild(imgPlay);
imgPlay.src = "img/playstore.png";

var imgPause = document.createElement('img');
imgPause.setAttribute('class', 'button-pause');
divButton.appendChild(imgPause);
imgPause.src = "img/pause.png";

var imgStop = document.createElement('img');
imgStop.setAttribute('class', 'button-stop');
divButton.appendChild(imgStop);
imgStop.src = "img/Rectangle.png";


var titleMovie = document.createElement('h1');
titleMovie.setAttribute('class', 'titleMovie');
divButton.appendChild(titleMovie);

var inputTimer = document.createElement('input');
inputTimer.setAttribute('class', 'timer');
divButton.appendChild(inputTimer);
inputTimer.type = "range";
inputTimer.step = "1";

var imgSound = document.createElement('img');
imgSound.setAttribute('class', 'button-Sound');
divButton.appendChild(imgSound);
imgSound.src = "img/Sound.png";

var inputSon = document.createElement('input');
inputSon.setAttribute('class', 'volume');
divButton.appendChild(inputSon);
inputSon.type = "range";
inputSon.min = "0";
inputSon.max = "100";
inputSon.step = "1";
inputSon.value = "0";
inputSon.oninput = "SetVolume(this.value)";
inputSon.onchange = "SetVolume(this.value)";

var imgFullScreen = document.createElement('img');
imgFullScreen.setAttribute('class', 'button-FullScreen');
divButton.appendChild(imgFullScreen);
imgFullScreen.src = "img/screen.png";
