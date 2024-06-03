var currentScene = "startingScene";
const SCENE1TEXT = "";
const SCENE2TEXT = "Strong as steel\nMeant to shield\nBlocking out what’s real\nAs those inside yield";
const SCENE3TEXT = "Laying rest\nOut of time and air\nYet dying not depressed\nOnly you feel despair";
const SCENE4TEXT = "All are at peace\nTill a loud roar\nAllows the pain to release\nIs that what you intended for?\nTrapped to hear agony and disjoy\nEscaping is as hard as it to destroy";
const SCENE5TEXT = "one can remain on their course\nunless there is an imbalance\nfor in every action, a reaction unfolds";
const SCENE6TEXT = "a force that shapes\neach night and day\nthe sun and moon\nand the friction in one's life";
const SCENE7TEXT = "every disappointment\nevery mistake\nall the moments of sadness\ndespair\nmakes one wonder\nthe control they truly have\nover their own lives\nif it's up to fate\nor the unseeable forces\ncontrolling the motion\nof the world"
const SCENE8TEXT = "makes one wonder\nthe control they truly have\nover their own lives\nif it's up to fate\nor the unseeable forces\ncontrolling the motion\nof the world";
const SCENE9TEXT = "Sorrows of reflect\nLessons fade in friction grip\nVillage in stillness";
const SCENES = [
  {text:SCENE1TEXT},
  {text:SCENE2TEXT},
  {text:SCENE3TEXT},
  {text:SCENE4TEXT},
  {text:SCENE5TEXT},
  {text:SCENE6TEXT},
  {text:SCENE7TEXT},
  {text:SCENE8TEXT},
  {text:SCENE9TEXT},
]

startingPage();

function hideScene(className)
{
  let canvases = document.getElementsByClassName(className);
  [...canvases].forEach(element => {element.style.visibility="hidden"});
}

function showScene(className)
{
  let canvases = document.getElementsByClassName(className);
  [...canvases].forEach(element => {element.style.visibility="visible"});
}

function transitionScene(startScene)
{

  hideScene(currentScene);
  startScene();
}


//Setup navbar:
let navbar = document.getElementsByClassName("navbar")[0];
SCENES.forEach(function (element, i)
{
  let link = document.createElement("a");
  link.innerHTML = "Scene " + (i+1)
  link.setAttribute("id", "scene-"+(i+1));
  navbar.appendChild(link);
});

document.getElementById('planet').addEventListener('click', ()=>{leaveStart();setTimeout(()=>{hideScene(currentScene); currentScene="frictionScene";startFriction();showScene(currentScene);},1000)});
document.getElementById('scene-1').addEventListener('click', ()=>{startingPage();hideScene(currentScene);currentScene="startingScene";showScene(currentScene);run();});
document.getElementById('scene-2').addEventListener('click', ()=>{hideScene(currentScene); currentScene="frictionScene";startFriction();showScene(currentScene);});
document.getElementById('scene-3').addEventListener('click', ()=>{hideScene(currentScene); currentScene="placeholder";});
// document.getElementsByClassName("navbar")[0].appendChild(document.createElement(tag));