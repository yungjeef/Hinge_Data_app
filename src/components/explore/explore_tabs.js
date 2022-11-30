import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import '../../css/explore.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import ExploreGraphs from './explore_graphs';

export default function ExploreTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Dating app choice
    const [dating_app, setDatingApp] = React.useState(0);
    const handleDatingAppSelection = (event) => {
        setDatingApp(event.target.value);
    };

    // Dating app statistic metric
    const [metric, setMetric] = React.useState(1);
    const handleMetric = (event) => {
        setMetric(event.target.value);
    };

    function generate_submission_form() {
        const submission_data = {
            'dating_app': dating_app,
            'metric': metric,
        }

        return submission_data
    }

    const [submission_data, setSubmissionData] = React.useState(null);

    // On button click, this will start it all!
    function handleSubmit() {
        const submission_form = generate_submission_form();

        if(submission_form.dating_app == -1) {
            alert("Dating app needs to be specified.")
        } else {
            // Submit using Axios to backend
            console.log(submission_form);
            setSubmissionData(submission_form);
        }
    }

  return (
    <div className='query_form_body' style={{backgroundColor:"#282c34"}}>
        <div class='dating-app-select-subsection'>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, backgroundColor:"#282c34", width:"25%"}}>
                <InputLabel id="demo-simple-select-standard-label" sx={{ color:"#FF8000"}}>Choose Your Dating App</InputLabel>
                <Select
                labelId="dating-app-select"
                id="dating-app-select"
                value={dating_app}
                onChange={handleDatingAppSelection}
                label="dating-app-select"
                sx={{ color:"#00CC00"}}
                required={true}
                >
                <MenuItem value={0}>Hinge</MenuItem>
                <MenuItem disabled value={1}>Tinder</MenuItem>
                <MenuItem disabled value={2}>Bumble</MenuItem>
                <MenuItem disabled value={3}>Coffee Meets Bagel</MenuItem>
                </Select>
            </FormControl>
        </div>
        <div className='metric-subsection'>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, backgroundColor:"#282c34", width:"25%"}}>
                <InputLabel id="demo-simple-select-standard-label" sx={{ color:"#FF8000"}}>Choose Your App Statistic Metric</InputLabel>
                <Select
                labelId="metric-select"
                id="metric-select"
                value={metric}
                onChange={handleMetric}
                label="metric-select"
                sx={{ color:"#00CC00"}}
                required={true}
                >
                <MenuItem value={0}>Total matches</MenuItem>
                <MenuItem value={1}>Match-to-Like Ratio</MenuItem>
                <MenuItem value={2}>Matches per day</MenuItem>
                <MenuItem value={3}>Percent from Received Likes</MenuItem>
                </Select>
            </FormControl>
        </div>
        <br></br>
        <div>
            <Button 
                variant="contained"
                color='secondary' 
                size='large' 
                onClick={handleSubmit}
                >
                    Play Around and Find Out
            </Button>
        </div>
        
        <Box sx={{ width: '90%' }}>
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
                <Tab label="Male" value="1" sx={{color:'white', width:300}}/>
                <Tab label="Female" value="2" sx={{color:'white', width:300}}/>
              </TabList>
            </Box>
            <TabPanel value="1">
                <ExploreGraphs results_data = {submission_data} gender = {0}/>
            </TabPanel>
            <TabPanel value="2">
                <ExploreGraphs results_data = {submission_data} gender = {1}/>
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
    </div>
  );
}