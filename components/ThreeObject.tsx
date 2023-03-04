import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { useContext } from "react";
import { AllTheme } from "../pages/_app";


const ThreeObject = () => {
  let canvas: HTMLElement;
  let obj: THREE.Group;

  const { objTheme, setObjTheme } = useContext(AllTheme);
  
console.log(`${objTheme}現在の値です！`)

  useEffect(() => {
    if (canvas) return;
    // canvasを取得
    canvas = document.getElementById("canvas")!;
    // シーン
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(objTheme);
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

    gltfLoader.load("./models/gopher/gopher.gltf", (gltf) => {
      obj = gltf.scene;
      // オブジェクトのみの大きさ（余白等は対象外）
      obj.scale.set(0.75, 0.75, 0.75);
      scene.add(obj);

      const pointLight = new THREE.AmbientLight(0xffffff, 1);

      pointLight.position.set(1, 1, 100);
      camera.position.set(0, 4, 8);
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
  }, [objTheme]);
  return (
    <div className="flex justify-center">
      <canvas id="canvas"></canvas>
    </div>
  );
};

export default ThreeObject;
