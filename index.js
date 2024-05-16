//Get context and screen size;
var ctx = cnv.getContext("2d");
var W = window.innerWidth;
var H = window.innerHeight;

//Set Canvas and Background Color;
cnv.width = W;
cnv.height = H;
ctx.fillStyle = "#112";
ctx.fillRect(0, 0, W, H);

//Glow effect;
ctx.shadowBlur = 10;
ctx.shadowColor = "white";

// ctx.beginPath();
// ctx.arc(95, 50, 40, 0, 2 * Math.PI);
// ctx.fillStyle = "red";
// ctx.fill();



function centerSVG() {
  var svg = document.getElementById('planet');
  
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  
  var svgWidth = svg.clientWidth;
  var svgHeight = svg.clientHeight;
  
  var dx = (windowWidth - svgWidth) / 2;
  var dy = (windowHeight - svgHeight) / 2;
  
  svg.setAttribute('transform', `translate(${dx}, ${dy})`);
  console.log("test");
}
centerSVG();
window.onresize = function() {
  centerSVG();
};

function animate() {
  //Random position and size of stars;
  let x = W * Math.random();
  let y = H * Math.random();
  let r = 2.5 * Math.random();

  //Draw the stars;
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();

  //Using setTimeout instead of window.requestAnimationFrame for slower speed... window.requestAnimationFrame is approximately equal to setTimeout(func, 17);
  setTimeout(animate, 100);
}
animate();

function handleClick() {
  alert("Planet Clicked!");
}
var circle = document.getElementById('planet');
  circle.addEventListener('click', handleClick);
