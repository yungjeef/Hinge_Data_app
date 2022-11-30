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
//import ResponsiveAppBar from './components/top_nav_bar.js'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useEffect, useState} from 'react';
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/top_nav_bar";

function App() {

    const navigate = useNavigate();

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
                        <h1>Dating App Data</h1>
                        <h3>Discover your dating data</h3>
                        <div class="picture-row">
                          <img src={require('./images/all_3.png')}></img>
                        </div>
                        <p>
                        <span class="name"><b>Scroll down</b></span> to see how the rest of the online dating community swipes.
                          <pre></pre>Upload and discover your statistics in online dating. Browse around to find more
                            online dating analytics.
                          </p>
                          <Accordion sx={{backgroundColor: "#282c34"}}>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography sx={{color: "#FF8000"}}>What statistics can be discovered?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography sx={{color: "#00CC00"}}>
                                <font color="FF8000"><b>Your historic total number of matches </b></font> 
                                  <br></br>
                                  Total number of Hinge matches ever, including from people 
                                  who unmatched or deleted their accounts.
                                  <br></br>
                                  <br></br>
                                <font color="FF8000"><b>Your match-to-like ratio </b></font>
                                  <br></br>
                                  Percentage of Hinge likes sent that end up with a match.
                                  <br></br>
                                  <br></br>
                                <font color="FF8000"><b>Your matches per day </b></font>
                                  <br></br>
                                  <br></br>
                                <font color="FF8000"><b>Your received-to-sent match ratio </b></font>
                                  <br></br>
                                  Percentage of Hinge matches from received likes compared to matches from
                                  sent likes
                                  <br></br>
                                  <br></br>
                                <font color="FF8000"><b>Accurate data from the Hinge community </b></font>
                                  <br></br>
                                  See metrics of other Hinge users and discover trends not found
                                  anywhere else.
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
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
              </div>
        </div>
        
      </React.Fragment>
  );
}

export default App;
