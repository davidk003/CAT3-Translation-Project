//Get context and screen size;
var ctx = cnv.getContext("2d");
var W = window.innerWidth;
var H = window.innerHeight;
var starLocs = [];

//Set Canvas and Background Color;
cnv.width = W;
cnv.height = H;
ctx.fillStyle = "#112";
ctx.fillRect(0, 0, W, H);

//Glow effect;
ctx.shadowBlur = 10;
ctx.shadowColor = "white";

var starSpawnSpeed = 50;


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
  W = window.innerWidth;
  H = window.innerHeight;
};

function animate() {
  //Random position and size of stars;
  let x = W * Math.random();
  let y = H * Math.random();
  let r = 2.5 * Math.random();
  starLocs.push([x,y,r])
  //Draw the stars;
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();

  //Using setTimeout instead of window.requestAnimationFrame for slower speed... window.requestAnimationFrame is approximately equal to setTimeout(func, 17);
  setTimeout(animate, starSpawnSpeed);
}
animate();

function handleClick() {
  alert("Planet Clicked!");
  var planet= document.getElementById('planet');
  starSpawnSpeed = 0.5;
  document.getElementById('cnv').style.filter = "blur(3px)";
  planet.style.filter = "blur(3px)";
  
  // for(var i = 200; i < 500; i++)
  // {
  //   setTimeout(() => {planet.style.height=i;planet,.sty
      
  //   }, 10);
  // }
}
var circle = document.getElementById('planet');
  circle.addEventListener('click', handleClick);


