// import * as THREE from 'three';
// import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
// import {OBJLoader} from 'three/addons/loaders/OBJLoader.js';
// // Setup scene, camera, renderer
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.set(0, 20, 20); // Position the camera above the object
// camera.lookAt(0, 0, 0); // Look at the center of the scene

// const canvas = document.getElementById('surfer');
// const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
// renderer.setSize(window.innerWidth, window.innerHeight); // Set renderer size to match window dimensions


// // Background environment
// scene.background = new THREE.Color(0x000022); // Dark blue color to complement the light source

// // Add lighting
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(ambientLight);
// const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
// scene.add(directionalLight);

// // Add a large plane wireframe
// const planeGeometry = new THREE.PlaneGeometry(1000, 1000, 100, 100);
// const planeWireframeGeometry = new THREE.WireframeGeometry(planeGeometry);
// const planeMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 }); // Matrix green color for wireframe
// const plane = new THREE.LineSegments(planeWireframeGeometry, planeMaterial);
// plane.rotation.x = -Math.PI / 2;
// scene.add(plane);

// function startScene6()
// {
//     console.log("starting 6 animation");
//     // Load and add the .obj model
// const objLoader = new OBJLoader();
// objLoader.load(
//     'https://raw.githubusercontent.com/davidk003/CAT3-Translation-Project/main/model.obj',
//     (object) => {
//         // Calculate the bounding box of the object
//         const box = new THREE.Box3().setFromObject(object);
//         const center = box.getCenter(new THREE.Vector3());

//         // Center the object and scale it
//         object.scale.set(30, 30, 30); // Scale up by a factor of 30
//         object.position.set(-center.x * 30, -center.y * 30, -center.z * 30); // Adjust position to center it

//         object.traverse((child) => {
//             if (child instanceof THREE.Mesh) {
//                 // Apply MeshStandardMaterial
//                 child.material = new THREE.MeshStandardMaterial({
//                     color: 0xff0000, // Reddish brown color
//                     metalness: 0.7,
//                     roughness: 0.4
//                 });
//             }
//         });

//         scene.add(object);
//         object.rotation.z = Math.PI/4

//     // Particle system parameters
//         const particleCount = 5;
//         const particleGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
//         const particleMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff});
//         const particles = new THREE.Group();

//             setInterval(()=>{        // Initialize particles
//         for (let i = 0; i < particleCount; i++) {
//             const particle = new THREE.Mesh(particleGeometry, particleMaterial);
//             particle.position.copy(object.position);

//             // Give particles a random velocity outward from the spawn point
//             const velocity = new THREE.Vector3(
//                 Math.random() * 2 - 1,
//                 0,
//                 -Math.random()
//             ).normalize().multiplyScalar(0.5);
//             particle.userData.velocity = velocity;

//             particles.add(particle);
//         }

//         scene.add(particles);  },200)
//         // Animation loop
//         function animateParticles() {
//             requestAnimationFrame(animateParticles);
//             // Apply gravity to particles after a set amount of time
//           // Move object forward along its local z-axis
//             object.translateZ(0.5);

//             // Check if the object exceeds the boundaries of the plane
//             const boundary = 500; // Half of the plane size
//             if (Math.abs(object.position.x) > boundary || Math.abs(object.position.z) > boundary) {
//                 // Reset object position to the center
//                 object.position.set(0, 0, 0);
//             }

//             // Update controls target and camera position relative to the object
//             controls.target.copy(object.position);
//             camera.position.copy(object.position).add(new THREE.Vector3(0, 20, 30)); // Maintain the relative distance

//             renderer.render(scene, camera);
          
//             particles.children.forEach((particle) => {
//                 if (particle.userData.velocity) {
//                     // Move particles according to their velocity
//                     particle.position.add(particle.userData.velocity);

//                     // Apply gravity after 2 seconds
//                     if (Date.now() - particle.userData.startTime > 2000) {
//                         scene.remove(particle);
//                     }
//                 }
//             });

//             renderer.render(scene, camera);
//         }

//         animateParticles();
//     },
//     (xhr) => {
//         console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//     },
//     (error) => {
//         console.error('An error happened', error);
//     }
// );

// // Add camera controls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.target.set(0, 0, 0); // Set the controls target to the center of the scene
// controls.update();

// // Adjust canvas size when window is resized
// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });
// }
function startScene6()
{
    console.log("test");
}


function cleanupScene6()
{}
