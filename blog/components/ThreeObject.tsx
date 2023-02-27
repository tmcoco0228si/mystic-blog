import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeObject = () => {
  let canvas: HTMLElement;
  let model: THREE.Group;

  useEffect(() => {
    if (canvas) return;
    // canvasを取得
    canvas = document.getElementById("canvas")!;
    // シーン
    const scene = new THREE.Scene();
    // サイズ
    const sizes = {
      width: 200,
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
      model = gltf.scene;
      // オブジェクトのみの大きさ（余白等は対象外）
      model.scale.set(0.75, 0.75, 0.75);
      scene.add(model);

      const pointLight = new THREE.PointLight(0xffffff, 1.25)
      pointLight.position.set(1, 1, 100)
      camera.position.set(0, 2, 8);
      scene.add(pointLight);

      function animate() {
        requestAnimationFrame(animate);
        //横回転
        model.rotation.y += 0.01;
        renderer.render(scene, camera);
      }
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
