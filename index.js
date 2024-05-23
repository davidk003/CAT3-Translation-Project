var currentScene = "startingScene";

function resetScene(className)
{
  let canvases = document.getElementsByClassName(className);
  [...canvases].forEach(element => {element.style.visibility="hidden"});
}
function transitionScene(startScene)
{
  resetScene(currentScene);
  startScene();
}

document.getElementById('menu2').addEventListener('click', ()=>{resetScene(currentScene); currentScene="startingScene";});
document.getElementById('menu3').addEventListener('click', ()=>{resetScene(currentScene); currentScene="frictionScene";startFriction();});