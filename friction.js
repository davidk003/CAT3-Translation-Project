// Three.js - Fundamentals
// from https://threejs.org/manual/examples/fundamentals.html
// import * as THREE from 'https://threejs.org/build/three.module.js';

function main() {

	const canvas = document.querySelector( '#c' );
    // const renderer = new THREE.WebGLRenderer( {canvas } );
	const renderer = new THREE.WebGLRenderer( { antialias: true, canvas } );
    renderer.setPixelRatio(window.devicePixelRatio * 5);

	const fov = 75;
	const aspect = 2; // the canvas default
	const near = 0.1;
	const far = 5;
	const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
	camera.position.z = 2;

	const scene = new THREE.Scene();

	const boxWidth = 1;
	const boxHeight = 1;
	const boxDepth = 1;
	const geometry = new THREE.BoxGeometry( boxWidth, boxHeight, boxDepth );

	const material = new THREE.MeshBasicMaterial( { color: 0x44aa88 } ); // greenish blue

	const cube = new THREE.Mesh( geometry, material );
	scene.add( cube );

	renderer.render( scene, camera );
    function render(time) {
        time *= 0.001;  // convert time to seconds
       
        cube.rotation.x = time;
        cube.rotation.y = time;
       
        renderer.render(scene, camera);
       
        requestAnimationFrame(render);
      }
      requestAnimationFrame(render);
    // window.onresize=function()
    // {
    //     renderer.setPixelRatio(window.devicePixelRatio * 5);
    //     renderer.setSize( canvas.width, canvas.height );
    //     renderer.setPixelRatio(window.devicePixelRatio);
    //     camera.aspect = canvas.width / canvas.height;
    //     camera.updateProjectionMatrix();
    //     console.log("resized renderer");
    // }
    // window.onload=function()
    // {
    //     renderer.setPixelRatio(window.devicePixelRatio * 5);
    //     renderer.setSize( canvas.width, canvas.height );
    //     renderer.setPixelRatio(window.devicePixelRatio);
    //     camera.aspect = canvas.width / canvas.height;
    //     camera.updateProjectionMatrix();
    //     console.log("resized renderer");
    // }

}

function transitionScene()
{
    console.log("transiton to friction");
    main();
}
document.getElementById('planet').addEventListener('click', transitionScene);
document.getElementById('menu1').addEventListener('click', transitionScene);