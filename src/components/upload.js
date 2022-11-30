import '../css/upload.css';
import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from "../components/top_nav_bar";
import UploadQueryForm from './upload_query_form';

function Upload() {

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
                                <h1>Upload your data and discover your statistics</h1>
                                <p>Select the dating app you have data for. 
                                Fill the form below to do a live search and find out.</p>
                            </div>
                        </div>
                  </header>
                </div>
                <UploadQueryForm/>
              </div>
        </div>
        
      </React.Fragment>
  );
}

export default Upload;