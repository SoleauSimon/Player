var titleMovie = data.films[0].title;
var container = document.querySelector('.container');
var vol = document.querySelector('.volume');

// div principale
var div = document.createElement('div');
div.setAttribute('class', 'content');
document.body.appendChild(div);

// div hover
var divHover = document.createElement('div');
divHover.setAttribute('class', 'containerHover');
div.appendChild(divHover);

//div Class Vidéo
var vid = document.createElement('video');
vid.setAttribute('class', 'video1');
divHover.appendChild(vid);
vid.src = "../HETIC_SI_JS/video/TIE+Fighter+-+short+film(720p).mp4";


////// Boutons player ///////
/////////////////////////////

var imgStart = document.createElement('img');
imgStart.setAttribute('class', 'button-start');
divHover.appendChild(imgStart);
imgStart.src = "img/playstore.png";

var divButton = document.createElement('div');
divButton.setAttribute('class', 'containerButton');
divHover.appendChild(divButton);

// Bouton play
var imgPlay = document.createElement('img');
imgPlay.setAttribute('class', 'button-play');
divButton.appendChild(imgPlay);
imgPlay.src = "img/playstore.png";
var interval

// Bouton pause
var imgPause = document.createElement('img');
imgPause.setAttribute('class', 'button-pause');
divButton.appendChild(imgPause);
imgPause.src = "img/pause.png";

// Bouton stop
var imgStop = document.createElement('img');
imgStop.setAttribute('class', 'button-stop');
divButton.appendChild(imgStop);
imgStop.src = "img/Rectangle.png";

// Titre movie
var titleMovie = document.createElement('h1');
titleMovie.setAttribute('class', 'titleMovie');
divButton.appendChild(titleMovie);

// Curtime
var TextCurtimetext = document.createElement('p');
TextCurtimetext.setAttribute('class', 'curtimetext');
divButton.appendChild(TextCurtimetext);
TextCurtimetext.innerHTML = "00:00";

// input duration
var inputTimer = document.createElement('input');
inputTimer.setAttribute('class', 'timer');
divButton.appendChild(inputTimer);
inputTimer.type = "range";
inputTimer.step = "0.01";
inputTimer.value= "0";
inputTimer.min = "0";
inputTimer.max = "100";

// Durtime
var TexteDurtimetext = document.createElement('p');
TexteDurtimetext.setAttribute('class', 'durtimetext');
divButton.appendChild(TexteDurtimetext);
TexteDurtimetext.innerHTML = "00:00";


// Bouton son
var imgSound = document.createElement('img');
imgSound.setAttribute('class', 'button-Sound');
divButton.appendChild(imgSound);
imgSound.src = "img/Sound.png";

// Input son
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

// Bouton FullScreen
var imgFullScreen = document.createElement('img');
imgFullScreen.setAttribute('class', 'button-FullScreen');
divButton.appendChild(imgFullScreen);
imgFullScreen.src = "img/screen.png";

// FIN BOUTONS //

var titleMovie = data.films[0].title;
var container = document.querySelector('.container');
var vol = document.querySelector('.volume');


vol.addEventListener('change', setVolumeAll, false)

function setVolumeAll() {
  player.volume = vol.value / 100;
}

// querySelector
var player = document.querySelector('.video1');
var timer = document.querySelector('.timer');
var buttonStart = document.querySelector('.button-start')
var buttonPlay = document.querySelector('.button-play');
var buttonPause = document.querySelector('.button-pause');
var buttonStop = document.querySelector('.button-stop');
var buttonFull = document.querySelector('.button-FullScreen');
var button = document.querySelector('.containerButton');
var title = document.querySelector('.titleMovie');
var hover = document.querySelector('.containerHover');

title.innerHTML = titleMovie;

buttonPlay.addEventListener('click', function() {
  player.play();
  buttonPlay.style.opacity = '0.2';
  buttonPause.style.opacity = '';
  buttonStop.style.opacity = '';
  buttonStart.style.display = "none";
  interval = setInterval(function() {
    timer.value = player.currentTime / player.duration * 100
    TextCurtimetext.textContent = TimeConvert(player.currentTime)
  }, 100);

});


buttonPause.addEventListener('click', function() {
  player.pause();
  buttonPause.style.opacity = '0.2';
  buttonPlay.style.opacity = '';
  buttonStop.style.opacity = '';
  clearInterval(interval)
});


buttonStop.addEventListener('click', function() {
  player.pause();
  player.currentTime = 0;
  player.play()
  buttonStop.style.opacity = '0.2';
  buttonPlay.style.opacity = '';
  buttonPause.style.opacity = '';
});

buttonStart.addEventListener('click', function() {
  buttonStart.style.display = 'none';
  buttonPlay.style.opacity = '0.2';
  player.play();
});




// Convertion du timer en Min:Seconde
var TimeConvert = function(timer) {
  mins = Math.floor((timer % 3600) / 60);
  secs = Math.floor(timer % 60);
  if (secs < 10) {
    secs = "0" + secs;
  }
  return mins + ':' + secs;
}

// temps global de la vidéo
player.addEventListener("loadeddata", function() {
  TexteDurtimetext.textContent = TimeConvert(player.duration)
});

// fait bouger la barre de progression



timer.addEventListener('input', function() {
  player.currentTime = (timer.value/100) * player.duration
  timer.textContent = TimeConvert(player.currentTime) + ' / ' + TimeConvert(player.duration)
});

//
// timer.addEventListener("change", timerProgress, false);
//
// function timerProgress() {
//   var Goin = player.duration * (timer.value / 100);
//   player.currentTime = Goin;
//
//   timer.value = player.currentTime / player.durantion * 100;
// }







//les film
var but = document.querySelector('.button3')

for (let i = 0; i < data.films.length; i++) {
  var abc = data.films[i].title;
  var element = document.createElement('button');
  element.setAttribute('class', 'heello');
  but.appendChild(element);
  element.textContent = abc;
}

var ton = document.querySelectorAll('.heello');
for (let i = 0; i < ton.length; i++) {
  ton[i].addEventListener('click', function() {
    player.setAttribute('src', 'HETIC_SI_JS/' + data.films[i].src);
  })
}
