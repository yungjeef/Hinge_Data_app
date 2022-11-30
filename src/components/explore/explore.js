import '../../css/upload.css';
import * as React from 'react';
import Navbar from "../top_nav_bar";
//import {CanvasJSChart} from 'canvasjs-react-charts'
import ExploreTabs from './explore_tabs';

function Explore() {

    return (
      <React.Fragment>
        <div className='app'>
              <div id="welcome-page">
                <div className="welcome-page" style={{ position: 'relative', overflow: "hidden" }}>
                  <Navbar/>
                  <header className="App-header">
                        <div style={{display: 'flex'}}>
                            <div className="Header-description">
                                <h1>Explore online dating statistics</h1>
                                <p>Select the dating app to discover more online dating statistics for.
                                  Scroll down to do a custom search.
                                </p>
                            </div>
                        </div>
                  </header>
                </div>
                <ExploreTabs/>
              </div>
        </div>
        
      </React.Fragment>
  );
}

export default Explore;