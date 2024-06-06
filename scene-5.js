
const SCENE5TEXT1 = "one can remain on their course\nunless there is an imbalance\nfor in every action";
const SCENE5TEXT2 = "one can remain on their course\nunless there is an imbalance\na reaction unfolds";

function startScene5()
{
    document.getElementById('poem-scene-5').textContent = "one can remain on their course\nunless there is an imbalance";
}

function cleanupScene5()
{
    
}
let iterationCount = 0;
const firstBall = document.getElementById("first");
const lastBall = document.getElementById("last");
firstBall.addEventListener("animationiteration", (event) => {
    setTimeout(() => {
        if(iterationCount%2==0)
            {
                document.getElementById('poem-scene-5-2').textContent = "for in every action";
            }
            else
            {
                document.getElementById('poem-scene-5-2').textContent = "a reaction unfolds";
            }
            iterationCount++;
    }, 600);
});
// lastBall.addEventListener("animationiteration", (event) => {
//     document.getElementById('poem-scene-5').textContent = SCENE5TEXT2;
// });
