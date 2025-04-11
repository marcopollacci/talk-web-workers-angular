const target = document.getElementsByTagName('object')[0];

target.addEventListener('load', () => {
  const svg = target.getSVGDocument();

  Array.from(svg.getElementsByTagName('path')).forEach(p => p.setAttribute('stroke', '#808080'));
});
