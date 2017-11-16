// in case there are multiple videos, let's get all of 'em
const playerWrappers = document.body.querySelectorAll('.media__video');

// now, delete them from the DOM
playerWrappers.forEach(player => {
  player.parentNode.removeChild(player);
});
