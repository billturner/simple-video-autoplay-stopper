// in case there are multiple videos, let's get all of 'em
const playerSelectors = [
  '.media__video',
  '.cnnplayer'
];

const playerElements = playerSelectors.reduce((acc, selector) => {
  return [
    ...acc,
    ...document.body.querySelectorAll(selector)
  ];
}, []);

// now, delete them from the DOM
playerElements.forEach(el => {
  el.parentNode.removeChild(el);
});
