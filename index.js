var currentScene = "startingScene";
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

document.getElementById('planet').addEventListener('click', ()=>{leaveStart();setTimeout(()=>{hideScene(currentScene); currentScene="frictionScene";startFriction();showScene(currentScene);},1000)});
document.getElementById('scene-1').addEventListener('click', ()=>{startingPage();hideScene(currentScene);currentScene="startingScene";showScene(currentScene);});
document.getElementById('scene-2').addEventListener('click', ()=>{hideScene(currentScene); currentScene="frictionScene";startFriction();showScene(currentScene);});
document.getElementById('scene-3').addEventListener('click', ()=>{hideScene(currentScene); currentScene="placeholder";});