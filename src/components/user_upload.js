import '../App.css';
import * as React from 'react';
import Particles from "react-tsparticles";
import particlesConfig from '../config/configParticles';
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";


function UserPage() {

    const particlesInit = useCallback(async (engine) => {
      console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

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
                  <header className="App-header">
                    <div style={{display: 'flex'}}>
                      <div className="Header-description">
                        <h1>Dating App Data</h1>
                        <h3>Discover your dating data</h3>
                        <div class="picture-row">
                          <img src={require('../images/all_3.png')}></img>
                        </div>
                        <p>
                          <b>Scroll down</b> to see how the rest of the online dating community swipes.
                          <pre></pre><b>Sign in</b> to discover your statistics in online dating and unlock more
                            online dating analytics.
                          </p>
                      </div>
                    </div>
                    <div className='bottom-pic'>
                      <div className='bottom-pic-column'>
                        <img src={require('../images/online_dating.png')} style={{width: '250px', height:'auto'}}></img>
                      </div>
                      <div className='bottom-pic-column'>
                        <img src={require('../images/right-arrow-icon-114837-11.png')} style={{width: '250px', height:'auto'}}></img>
                      </div>
                      <div className='bottom-pic-column'>
                        <img src={require('../images/data.png')} style={{width: '250px', height:'auto'}}></img>
                      </div>
                    </div>
                  </header>
                </div>
              </div>
        </div>
        
      </React.Fragment>
  );
}

export default UserPage;