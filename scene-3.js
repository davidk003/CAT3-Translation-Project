const bg = document.getElementById("darkness");
const flashlight = document.getElementById('flashlight');
function startScene3()
{
    setTimeout(() => {
        document.getElementById('poem-scene-3').textContent = SCENE3TEXT;
    }, 500);
    // document.getElementsByClassName('navbar').array.forEach(element => {
        
    // });
}

function cleanupScene3()
{
    // document.getElementById('poem')
    // document.getElementsByClassName('navbar')[0].style.visibility="visible";
}
document.addEventListener('mousemove', function(event) {
    if(currentScene === "scene-3")
        {
            // setTimeout(() => {
            //     const mouseX = event.clientX;
            //     const mouseY = event.clientY;
            //     flashlight.style.setProperty('--mouse-x', mouseX + 'px');
            //     flashlight.style.setProperty('--mouse-y', mouseY + 'px');
                
            // }, 40);
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            flashlight.style.setProperty('--mouse-x', mouseX + 'px');
            flashlight.style.setProperty('--mouse-y', mouseY + 'px');
    }
});
// const handleMouseMove = e =>
// {
//     let x = e.clientX;
//     let y = e.clientY;
//     console.log(`(${y}, ${x})`)
//     bg.style.setProperty("--mouse-x", `${x}px`)
//     bg.style.setProperty("--mouse-y", `${x}px`)
// }

// // addEventListener('mousemove', (e)=>{handleMouseMove(e)});
// document.getElementById("darkness").onmousemove = e =>{if(currentScene==="scene-3"){handleMouseMove(e);}}