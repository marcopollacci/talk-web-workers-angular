const target = document.getElementsByTagName('object')[0];

target.addEventListener('load', () => {
  const svgDoc = target.contentDocument;
  const style = document.createElement('style');

  style.textContent = 'path { stroke: #808080; }';
  svgDoc.querySelector('svg').appendChild(style);
});
