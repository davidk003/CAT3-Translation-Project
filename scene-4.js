const boxBackground = document.getElementById("box-background");

function startScene4()
{
    document.getElementById('poem-scene-4').textContent = SCENE4TEXT;
    console.log("bruh");
}

function cleanupScene4()
{

}

boxBackground.addEventListener('click', ()=>{boxBackground.style.backgroundColor="var(--Flame)"})
