import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeObject = () => {
  let canvas: HTMLElement;
  let obj: THREE.Group;

  useEffect(() => {
    if (canvas) return;
    // canvasを取得
    canvas = document.getElementById("canvas")!;
    // シーン
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("white");
    // サイズ
    const sizes = {
      width: 800,
      height: 400,
    };

    // カメラ
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      1000
    );

    // レンダラー
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);

    //3Dモデルのインポート
    const gltfLoader = new GLTFLoader();
    // gltfLoader.load("./models/shiba/shiba.gltf", (gltf) => {
    gltfLoader.load("./models/gopher/gopher.gltf", (gltf) => {
      obj = gltf.scene;
      // オブジェクトのみの大きさ（余白等は対象外）
      obj.scale.set(0.75, 0.75, 0.75);
      scene.add(obj);

      const pointLight = new THREE.AmbientLight(0xffffff, 1);
      // const pointLight = new THREE.PointLight(0xffffff, 1.25)
      pointLight.position.set(1, 1, 100)
      camera.position.set(0, 2, 8);
      scene.add(pointLight);

      function animate() {
        requestAnimationFrame(animate);
        //横回転
        obj.rotation.y += 0.01;
        renderer.render(scene, camera);
      }

      new OrbitControls(camera, renderer.domElement);

      animate();
    });
  }, []);
  return (
    <div className="flex justify-center">
      <canvas
        id="canvas"
        className="bg-white text-center w-0 h-0"
        onClick={() => console.log("柴犬")}
      ></canvas>
    </div>
  );
};

export default ThreeObject;
