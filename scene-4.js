const boxBackground = document.getElementById("box-background");

function startScene4()
{
    document.getElementById('poem-scene-4').textContent = SCENE4TEXT;
    console.log("bruh");
}

function cleanupScene4()
{

}

function changeGradient(startPercent1, endPercent1, startPercent2, endPercent2, duration, callback) {
    var start = null;
    function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        var percentage1 = Math.min(startPercent1 + (progress / duration) * (endPercent1 - startPercent1), endPercent1);
        var percentage2 = Math.min(startPercent2 + (progress / duration) * (endPercent2 - startPercent2), endPercent2);
        boxBackground.style.background = `radial-gradient(circle, var(--Flame) ${percentage1}%, var(--AirSuperiorityBlue) ${percentage2}%)`;
        if (progress < duration) {
            window.requestAnimationFrame(step);
        } else if (callback) {
            callback();
        }
    }
    window.requestAnimationFrame(step);
}
boxBackground.addEventListener("click", function() {
    changeGradient(0, 0, 0, 100, 500, function() {
        changeGradient(0, 100, 100, 100, 500);
    });
});

boxBackground.addEventListener("click", ()=>{
        document.getElementById('poem-scene-4').classList.add('shake-animation');
        setTimeout(() => {
            document.getElementById('poem-scene-4').classList.remove('shake-animation');
            setTimeout(() => {
                boxBackground.style.background = "var(--AirSuperiorityBlue)"
            }, 250);
    
}, 2500); })