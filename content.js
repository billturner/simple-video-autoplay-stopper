// in case there are multiple videos, let's get all of 'em
const playerSelectors = [
  // CNN
  '.media__video',
  '.cnnplayer',
  // BBC
  '.vxp-media__player',
  '.mediaContainer'
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
