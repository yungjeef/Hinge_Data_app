import '../css/upload.css';
import * as React from 'react';
import Navbar from "../components/top_nav_bar";
import HelpTabs from './how_to_get_tabs.js';

function HowToGet() {

    return (
      <React.Fragment>
        <div className='app'>
              <div id="welcome-page">
                <div className="welcome-page" style={{ position: 'relative', overflow: "hidden" }}>
                  <Navbar/>
                  <header className="App-header">
                        <div style={{display: 'flex'}}>
                            <div className="Header-description">
                                <h1>How to get your dating data?</h1>
                                <p>Click on the Dating App tabs to see step by step instructions
                                    on how to get your data.
                                </p>
                            </div>
                        </div>
                  </header>
                </div>
                <HelpTabs/>
              </div>
        </div>
        
      </React.Fragment>
  );
}

export default HowToGet;