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

// const environment = new RoomEnvironment();
// const pmremGenerator = new THREE.PMREMGenerator( renderer );

const scene = new THREE.Scene();

scene.background = new THREE.Color( 0x00FFFF );
// scene.environment = pmremGenerator.fromScene( environment ).texture;

const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;
const geometry = new THREE.BoxGeometry( boxWidth, boxHeight, boxDepth );

const material = new THREE.MeshBasicMaterial( { color: 0x44aa88 } ); // greenish blue

const cube = new THREE.Mesh( geometry, material );
var sceneNotRendered = true;

function main()
{
	scene.add( cube );
	renderer.render( scene, camera );
//     var geo = new THREE.PlaneBufferGeometry(2000, 2000, 8, 8);
// var mat = new THREE.MeshBasicMaterial({ color: 0xA52A2A, side: THREE.DoubleSide });
// var plane = new THREE.Mesh(geo, mat);
const geometry = new THREE.PlaneGeometry(2,2,1,1);
const material = new THREE.MeshBasicMaterial( {color: 0xA52A2A, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry, material );
// plane.rotateX( - Math.PI / 2);
scene.add( plane );
    fixAspect();
    setTimeout(() => {
        setInterval(() => {
            camera.translateX(0.01);
        }, 10);
    }, 5000);
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

}

window.onresize=function()
{
    fixAspect();
}

window.onload=function()
{
    fixAspect();
}

function startScene6()
{
    console.log("transiton to friction(scene-6)");
    if(sceneNotRendered)
    {
        main();
        console.log("rendered");
        sceneNotRendered = false;
    }
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