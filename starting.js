//Get context and screen size;
var ctx = cnv.getContext("2d");
var W = window.innerWidth;
var H = window.innerHeight;
var starLocs = [];
var starSize = 2.5;
var starSpawnSpeed = 50;
var starsOn = true;
var counting = 1;
var counter = null;
var planet = document.getElementById('planet');

function centerSVG()
{
  var svg = planet;
  
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  
  var svgWidth = svg.clientWidth;
  var svgHeight = svg.clientHeight;
  
  var dx = (windowWidth - svgWidth) / 2;
  var dy = (windowHeight - svgHeight) / 2;
  
  svg.setAttribute('transform', `translate(${dx}, ${dy})`);
}

function startScene1()
{
  console.log("Starting scene 1");
  //Set Canvas and Background Color;
  cnv.width = W;
  cnv.height = H;
  ctx.fillStyle = "#112";
  ctx.fillRect(0, 0, W, H);

  //Glow effect;
  ctx.shadowBlur = 10;
  ctx.shadowColor = "white";
  planet.style.filter = "none";
  document.getElementById('cnv').style.filter = "none";
  planet.style.width = "100";
  planet.style.height = "100";
  centerSVG();

  function animateHelper(go)
  {
    if(go)
    {
      //Random position and size of stars;
      let x = W * Math.random();
      let y = H * Math.random();
      let r = starSize * Math.random();
      starLocs.push([x,y,r])
      //Draw the stars;
      ctx.beginPath();
      ctx.fillStyle = "white";
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function animate() {
    //Using setTimeout instead of window.requestAnimationFrame for slower speed... window.requestAnimationFrame is approximately equal to setTimeout(func, 17);
    setInterval(animateHelper, starSpawnSpeed, starsOn);
  }
  animate();
}

function countUpHelper()
{
  if(counting < 5)
  {
    let i = counting;
    planet.style.filter = `blur(${i}px)`;
    document.getElementById('cnv').style.filter = `blur(${i}px)`;
    planet.style.width = `${100*(2*i)}px`;
    planet.style.height = `${100*(2*i)}px`;
    starSize = i*2;
    ctx.shadowBlur = i;
    centerSVG();
    // console.log("blurred " + i);
    counting = counting + 0.1;
  }
  else
  {
    ctx.shadowBlur = 10;
    starSpawnSpeed = 50;
    starSize = 2.5;
    console.log("scene 1 transition done");
    starLocs=[];
    clearInterval(counter);
    counting = 1;
  }
}

function countUp()
{
  counter = setInterval(countUpHelper, 10);
}

function leaveStart()
{
  renderer.dispose();
  // alert("Clicked!");
  starSpawnSpeed = 0.5;
  countUp();
  setTimeout(() => {
    hideScene(currentScene);
  }, 1000);
}

function cleanupScene()
{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.onresize = function() {
  centerSVG();
  console.log("canvas resized");
  W = window.innerWidth;
  H = window.innerHeight;
};