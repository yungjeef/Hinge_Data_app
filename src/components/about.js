import '../App.css';
import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from "./top_nav_bar";
import '../css/about.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';


function About() {

    const navigate = useNavigate();

    return (
      <React.Fragment>
        <div className='app'>
              <div id="welcome-page">
                <div className="welcome-page" style={{ position: 'relative', overflow: "hidden" }}>
                  <Navbar/>
                  <header className="App-header">
                    <div style={{display: 'flex'}}>
                        <div className="Header-description">
                            <h1>About the Website</h1>
                            <p class="detail">
                                Dating apps keep track of user activities such as Likes, Matches, Convos,
                                etc. A lot of them are able to show you the data upon request.
                                But what can you do with this data?
                                <pre></pre>

                                <span class="name"><b>Dating App Data </b></span> 
                                can parse the data and provide analytics and feedback 
                                that is found nowhere else.
                                <pre></pre>
                                <br></br>

                                Currently accepts data from these dating apps: <span>Hinge</span>
                                <pre></pre>
                                Coming soon: <span>Tinder, Coffee Meets Bagel</span>
                            </p>
                            <br></br>
                            <Accordion sx={{backgroundColor: "#282c34"}}>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                                <Typography sx={{color: "#FF8000"}}>Frequently Asked Questions</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography sx={{color: "#00CC00"}}>
                                <font color="FF8000"><b>How can I get my data from the dating apps? </b></font> 
                                    <br></br>
                                    Click <span><a href='/get-data'><span>Here</span></a></span>.
                                    It will provide more information on how to get it for specific dating
                                    apps.
                                    <br></br>
                                    <br></br>
                                <font color="FF8000"><b>Will my data remain anonymous?</b></font>
                                    <br></br>
                                    Yes. Nowhere in the data upload or submission will it ask for your name,
                                    email or phone number.
                                    <br></br>
                                    <br></br>
                                <font color="FF8000"><b>Will my app conversations be read? </b></font>
                                    <br></br>
                                    No. I'm not Zucc. I don't care about everyone's love lives.
                                    App conversations will not be parsed.
                                    <br></br>
                                    <br></br>
                                <font color="FF8000"><b>How will the dataset remain accurate? </b></font>
                                    <br></br>
                                    I have code on the backend which can detect fake or redundant data.
                                    <br></br>
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div className="Header-description">
                            <h1>About the Creator</h1>
                            <img src={require('../images/creator.jpg')} style={{width: '500px', height:'auto'}}></img>
                            <p>Hey this is <span>Jeff</span>! I am a software engineer who enjoys 
                            working on coding projects in my free time. I wanted to build this website 
                            to get some experience with full stack technologies. <pre></pre>

                            Having used dating apps myself and knowing many people who also use it, 
                            we were always slightly curious about how we did on these apps compared to
                            others. I created <span>Dating App Data</span> as a tool and fun side-project
                            to find out.
                            </p>
                            <br></br>
                            <br></br>
                            <h1>Don't take this too seriously</h1>
                            <p>Like I said, I created this website for fun and it is supposed to 
                            be used for fun. It's not meant to be taken seriously. Your dating app 
                            statistics do not define who you are. There's no point in deriving self-worth
                            based on your number of matches or match rate. Relax and have a good time!
                            </p>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                  </header>
                </div>
              </div>
        </div>
        
      </React.Fragment>
  );
}

export default About;