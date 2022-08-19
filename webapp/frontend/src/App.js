import logo from './logo.svg';
import './App.css';

import Particles from "react-tsparticles";
import particlesConfig from './config/configParticles';
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function App() {

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
      await console.log(container);
  }, []);

  return (
    <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
      
      <header className="App-header">
        <h1>Dating App Data</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div><p>Hello tons of random stuff here</p></div>
      <div style={{ position: 'absolute'}}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesConfig}
        />
      </div>
    </div>
    

  );
}

export default App;
