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
import FormSelect from './components/query_form.js'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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
    <React.Fragment>
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
              <p><b>Sign in</b> to discover the statistics behind your online dating. 
                <pre></pre><b>Scroll down</b> to see how the rest of the online dating community swipes.</p>
            </div>
            <div className="Login-section">
              <Button variant="contained" color='secondary' size='large'>Sign in with Google</Button>
              <pre></pre>
              <div>
                <Accordion sx={{backgroundColor: "#282c34"}}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography sx={{color: "white"}}>Why is sign-in required?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{color: "white"}}>
                      Google Sign-on is required to prevent bots and 
                      spammers from uploading fake or redundant data.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
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
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="Header-description">
            <h3>Where do you rank amongst other dating app users?</h3>
            <p>Fill the form below to do a live search and find out.</p>
          </div>
        </header>
      </div>
      <FormSelect/>
      
    </React.Fragment>
  );
}

export default App;
