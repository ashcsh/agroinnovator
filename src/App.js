import "./App.css";

import phonewave from "./assets/phonewave.svg";
import logo from "./assets/logo.png";
function App() {
  return (
    <>
      <nav id="nav">
        <img id="logo" src={logo} alt="logo" />
      </nav>
      <img className="wave" src={phonewave} alt="wave" />
      <div className="section1"></div>
      <div className="section2"></div>
      <div className="section3"></div>
      
    </>
  );
}

export default App;
