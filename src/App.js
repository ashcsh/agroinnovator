import "./App.css";

import phonewave from "./assets/phonewave.svg";
import logo from "./assets/logo.png";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Satelit from "./components/gltf/Artemis.jsx";
function App() {
  return (
    <>
      <nav id="nav">
        <img id="logo" src={logo} alt="logo" />
      </nav>
      <img className="wave" src={phonewave} alt="wave" />
      <div className="section1">
        <h1 id="introtext">
          Sustinem dezvoltarea agriculturii sustenabile si performate.
        </h1>

        <div className="earth">
          <Canvas position={[0,0, 0]}>
            <Suspense>
              <ambientLight position={[-100, -100, -100]} intensity={1.5} />
              <Satelit />
              <OrbitControls enableRotate={true} enableZoom={false} />
            </Suspense>
          </Canvas>
        </div>
        <div className="butoane">
          <h1>misiune</h1>
          <h1>viziune</h1>
          <h1>membrii</h1>
        </div>
      </div>
      <div className="section2"></div>
      <div className="section3"></div>
    </>
  );
}

export default App;
