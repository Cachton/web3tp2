import Zdog from "https://esm.sh/zdog";

const illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  rotate: { x: -Zdog.TAU/16 },
  dragRotate: true,
  onDragStart: function() {
    spin = false;
  },
});
let spin = true;
let box = new Zdog.Box({
  addTo: illo,
  width: 90,
  height: 90,
  depth: 90,
  stroke: false,
  color: '#fff',
  leftFace: '#fff',
  rightFace: '#fff',
  topFace: '#fff',
  bottomFace: '#fff',
});


function animate() {
  illo.rotate.y += spin ? 0.03 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}
animate();

