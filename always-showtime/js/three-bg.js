import * as THREE from 'three';

// 1. シーン・カメラ・レンダラーの基本セット
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const canvas = document.querySelector('#bg-canvas');
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// 2. サイバー風のワイヤーフレーム立体（正二十面体など）を作る
const geometry = new THREE.IcosahedronGeometry(2, 2);
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff66,
    wireframe: true,
    transparent: true,
    opacity: 0.25
});
const cyberObject = new THREE.Mesh(geometry, material);
scene.add(cyberObject);

// 3. 画面サイズが変わったときの調整
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// 4. アニメーションループ（ゆっくり回転させる）
function animate() {
    requestAnimationFrame(animate);

    cyberObject.rotation.x += 0.002;
    cyberObject.rotation.y += 0.003;

    renderer.render(scene, camera);
}
animate();