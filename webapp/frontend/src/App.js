import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Particles from "react-tsparticles";
import particlesConfig from './config/configParticles';
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function App() {

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
    <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
      
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
              <img src={require('./images/all_3.png')}></img>
            </div>
            <p><b>Sign in.</b> Find the statistics behind your online dating. 
              <pre></pre>See how the rest of the online dating community does.</p>
          </div>
          <div className="Login-section">
            <Button variant="contained" color='secondary' size='large'>Sign in with Google</Button>
            <pre></pre>
            <div class="login-dropdown">
              <Button aria-describedby={id} variant="contained" onClick={handleClick} color='info'>
                Why is sign-in required?
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <Typography sx={{ p: 2 }}>
                  Google Sign-on is required to <br></br>
                  prevent bots and spammers from <br></br>
                  uploading fake or redundant data.
                </Typography>
              </Popover>
            </div>
          </div>
        </div>
        <div className='bottom-pic'>
          <div className='bottom-pic-column'>
            <img src={require('./images/online_dating.png')} style={{width: '250px', height:'auto'}}></img>
          </div>
          <div className='bottom-pic-column'>
            <img src={require('./images/right-arrow-icon-114837-11.png')} style={{width: '250px', height:'auto'}}></img>
          </div>
          <div className='bottom-pic-column'>
            <img src={require('./images/data.png')} style={{width: '250px', height:'auto'}}></img>
          </div>
        </div>
      </header>
    </div>
    

  );
}

export default App;
