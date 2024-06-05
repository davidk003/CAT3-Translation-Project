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

function centerSVG()
{
  var svg = document.getElementById('planet');
  
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
  document.getElementById('planet').style.filter = "none";
  document.getElementById('cnv').style.filter = "none";
  document.getElementById('planet').style.width = "100";
  document.getElementById('planet').style.height = "100";
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

  
  // document.getElementById('menu2').addEventListener('click', startingPage);
  animate();
}


// function countUpBlur(i)
// {
//   if(i >5)
//   {
//     ctx.shadowBlur = 10;
//     starSpawnSpeed = 50;
//     starSize = 2.5;
//     console.log("scene 1 transition done");
//     starLocs=[];
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//   }
//   else
//   {
//     document.getElementById('planet').style.filter = `blur(${i}px)`;
//     document.getElementById('cnv').style.filter = `blur(${i}px)`;
//     document.getElementById('planet').style.width = `${100*(2*i)}px`;
//     document.getElementById('planet').style.height = `${100*(2*i)}px`;
//     starSize = i*2;
//     ctx.shadowBlur = i;
//     centerSVG();
//     console.log("blurred " + i);
//     setTimeout(countUpBlur, 25, i+0.1);
//   }
// }

function countUpHelper()
{
  if(counting < 5)
  {
    let i = counting;
    document.getElementById('planet').style.filter = `blur(${i}px)`;
    document.getElementById('cnv').style.filter = `blur(${i}px)`;
    document.getElementById('planet').style.width = `${100*(2*i)}px`;
    document.getElementById('planet').style.height = `${100*(2*i)}px`;
    starSize = i*2;
    ctx.shadowBlur = i;
    centerSVG();
    console.log("blurred " + i);
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
  counter = setInterval(countUpHelper, 25);
}

function leaveStart()
{
  renderer.dispose();
  // alert("Clicked!");
  starSpawnSpeed = 0.5;
  countUp();
  setTimeout(() => {
    hideScene(currentScene);
    // document.getElementById("cnv").style.visibility = "hidden";
    // document.getElementById("planet").style.visibility = "hidden";
    // document.getElementById("c").style.visibility = "visible";
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