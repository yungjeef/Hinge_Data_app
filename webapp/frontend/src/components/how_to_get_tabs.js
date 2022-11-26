import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import '../css/upload.css';

export default function HelpTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='query_form_body' style={{backgroundColor:"#282c34"}}>
        <Box sx={{ width: '100%' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
              <TabList 
                onChange={handleChange} 
                aria-label="lab API tabs example" 
                centered
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#FF8000",
                  }
                }}
                >
                <Tab label="Hinge" value="1" sx={{color:'white'}}/>
                <Tab label="Tinder" value="2" sx={{color:'white'}}/>
                <Tab label="Coffee Meets Bagel" value="3" sx={{color:'white'}}/>
                <Tab label="Bumble" value="4" sx={{color:'white'}}/>
              </TabList>
            </Box>
            <TabPanel value="1">
              <h3>Steps for Hinge will be added here.</h3>
            </TabPanel>
            <TabPanel value="2">
              <h3><span>Tinder</span> will be added soon!</h3>
            </TabPanel>
            <TabPanel value="3">
              <h3><span>Coffee Meets Bagel</span> will be added soon!</h3>
            </TabPanel>
            <TabPanel value="4">
              <h3><span>Bumble</span> will be added soon!</h3>
            </TabPanel>
          </TabContext>
        </Box>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>
  );
}