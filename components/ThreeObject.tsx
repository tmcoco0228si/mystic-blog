import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { useContext } from "react";
import { DarkModeContext } from "../pages/_app";

const ThreeObject = () => {
  // 参照を作成
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);

  // ダークモードのコンテキストを使用
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    let canvas: HTMLCanvasElement | null = null;
    let obj: THREE.Group | null = null;

    // canvasRefが存在する場合
    if (canvasRef.current) {
      canvas = canvasRef.current;

      // シーンを作成
      const scene = new THREE.Scene();

      // 背景色を設定
      scene.background = new THREE.Color(isDarkMode ? "#222831" : "#ffffff");
      sceneRef.current = scene;
      // サイズを設定

      const sizes = {
        width: window.innerWidth * 0.75,
        height: window.innerHeight * 0.3,
      };

      // カメラを作成
      const camera = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        0.1,
        1000
      );

      // レンダラーを作成
      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true,
      });
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(window.devicePixelRatio);

      // 3Dモデルをインポート
      const gltfLoader = new GLTFLoader();

      gltfLoader.load("./models/gopher/gopher.gltf", (gltf) => {
        obj = gltf.scene;

        // オブジェクトのみの大きさを設定（余白等は対象外）
        obj.scale.set(0.7, 0.7, 0.7);

        scene.add(obj);

        // ライトを追加
        const pointLight = new THREE.AmbientLight(0xffffff, 1);
        pointLight.position.set(1, 1, 100);
        camera.position.set(0, 4, 8);
        scene.add(pointLight);

        // アニメーション関数
        function animate() {
          requestAnimationFrame(animate);
          if (obj && scene) {
            obj.rotation.y += 0.01;
            renderer.render(scene, camera);
          }
        }

        // オービットコントロールを作成
        new OrbitControls(camera, renderer.domElement);

        // アニメーションを開始
        animate();
      });
    }
  }, [canvasRef]);

  // 背景色が変更されたときに3Dモデルの背景色を更新する
  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.background = new THREE.Color(
        isDarkMode ? "#222831" : "#ffffff"
      );
    }
  }, [isDarkMode]);

  return (
    // レンダリングのための<div>要素を作成
    // レンダリングのための<div>要素を作成
    <div className="flex justify-center dark:bg-darkgrey overflow-y-hidden overflow-x-hidden">
      <canvas ref={canvasRef} id="canvas" className="w-full"></canvas>
    </div>
  );
};

// コンポーネントをエクスポート
export default ThreeObject;
