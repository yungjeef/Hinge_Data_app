import '../css/upload.css';
import * as React from 'react';
import Particles from "react-tsparticles";
import particlesConfig from '../config/configParticles';
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/top_nav_bar";

function Explore() {

    const particlesInit = useCallback(async (engine) => {
      console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
      <React.Fragment>
        <div className='app'>
              <div id="welcome-page">
                <div className="welcome-page" style={{ position: 'relative', overflow: "hidden" }}>
                  
                  <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={particlesConfig}
                  />
                  <Navbar/>
                  <header className="App-header">
                        <div style={{display: 'flex'}}>
                            <div className="Header-description">
                                <h1>Explore online dating statistics</h1>
                                <p>Select the dating app you have data for. 
                                Fill the form below to do a live search and find out.</p>
                            </div>
                        </div>
                  </header>
                </div>

              </div>
        </div>
        
      </React.Fragment>
  );
}

export default Explore;