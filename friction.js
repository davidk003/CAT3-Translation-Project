// Three.js - Fundamentals
// from https://threejs.org/manual/examples/fundamentals.html
// import * as THREE from 'https://threejs.org/build/three.module.js';
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
const canvas = document.querySelector( '#c' );
// const renderer = new THREE.WebGLRenderer( {canvas } );
const renderer = new THREE.WebGLRenderer( { antialias: true, canvas } );
renderer.setPixelRatio(window.devicePixelRatio * 5);

const fov = 75;
// const aspect = 2; // the canvas default
const near = 0.1;
const far = 5;
// const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
const camera = new THREE.PerspectiveCamera( fov, (canvas.width / canvas.height), near, far );
camera.position.z = 2;

const scene = new THREE.Scene();

const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;
const geometry = new THREE.BoxGeometry( boxWidth, boxHeight, boxDepth );

const material = new THREE.MeshBasicMaterial( { color: 0x44aa88 } ); // greenish blue

const cube = new THREE.Mesh( geometry, material );
function main()
{
	scene.add( cube );

	renderer.render( scene, camera );
    fixAspect();
    function render(time)
    {
        time *= 0.001;  // convert time to seconds
        
        cube.rotation.x = time;
        cube.rotation.y = time;
        
        renderer.render(scene, camera);
        ``
        requestAnimationFrame(render);
      }
    requestAnimationFrame(render);
    // window.onresize=function()
    // {
    //     renderer.setSize( canvas.width, canvas.height );
    //     renderer.setPixelRatio(window.devicePixelRatio);
    //     camera.aspect = (canvas.width / canvas.height);
    //     camera.updateProjectionMatrix();
    //     console.log("resized renderer");
    // }
    // window.onload=function()
    // {
    //     renderer.setSize( canvas.width, canvas.height );
    //     camera.aspect = canvas.width / canvas.height;
    //     camera.updateProjectionMatrix();
    //     console.log("resized renderer");
    // }


}

window.onresize=function()
{
    fixAspect();
}

window.onload=function()
{
    fixAspect();
}

function startScene2()
{
    console.log("transiton to friction");
    main();
}

function fixAspect()
{
    console.log("fix aspect");
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    renderer.render(scene, camera);
}