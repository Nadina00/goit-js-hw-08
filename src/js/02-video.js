import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

   
   
   player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).catch(function(error){
  switch(error.name){
    case 'RangeErroe':
      seconds = 0;
      break;
  }
});


   
   
