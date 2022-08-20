import * as React from 'react';
import '../css/query_form.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { sizeHeight } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function SelectVariants() {

    function checkNumber(x) {
        if(typeof x == 'number' && !isNaN(x)) {
            // check if it is an integer
            if(Number.isInteger(x)) {
                return true;
            } else {
                return false;
            }
        }

        return false;
    }

    // Dating app choice
    const [dating_app, setDatingApp] = React.useState('');
    const handleDatingAppSelection = (event) => {
        setDatingApp(event.target.value);
    };

    // Dating app statistic metric
    const [metric, setMetric] = React.useState('');
    const handleMetric = (event) => {
        setMetric(event.target.value);
    };

    // Total match number
    const [total_matches, setTotalMatches] = React.useState('');
    const handleTotalMatches = (event) => {
        const new_total_matches = Number(event.target.value);

        // Total matches can't be negative or a decimal
        if(new_total_matches < 0 || !checkNumber(new_total_matches)) {
            const total_matches_input = document.getElementById('total-matches-input');
            total_matches_input.value = '';
        }
        setTotalMatches(event.target.value);
    };

    // Match to Like ratio
    const [swipe_ratio, setSwipeRatio] = React.useState('');
    const handleSwipeRatio = (event) => {
        const new_swipe_ratio = Number(event.target.value);

        // Impossible for Match ratio to be above 1
        if(new_swipe_ratio > 1) {
            const ratio_input = document.getElementById('ratio-input');
            ratio_input.value = '';
        }
        setSwipeRatio(event.target.value);
    };

    // Match per day
    const [match_per_day, setMatchPerDay] = React.useState('');
    const handleMatchPerDay = (event) => {
        const new_match_rate = Number(event.target.value);

        // Match rate can't be negative
        if(new_match_rate < 0) {
            const match_day_input = document.getElementById('match-day-input');
            match_day_input.value = '';
        }
        setMatchPerDay(event.target.value);
    };

    // Min age
    const [min_age, setMinAge] = React.useState('');
    const handleMinAge = (event) => {
        const new_age = Number(event.target.value);

        // Age can't be negative or decimal
        if(new_age < 0 || !checkNumber(new_age)) {
            const min_age_input = document.getElementById('min-age-input');
            min_age_input.value = '';
        }
        setMinAge(event.target.value);
    };

    // Max age
    const [max_age, setMaxAge] = React.useState('');
    const handleMaxAge = (event) => {
        const new_age = Number(event.target.value);

        // Age can't be negative or decimal
        if(new_age < 0 || !checkNumber(new_age)) {
            const max_age_input = document.getElementById('max-age-input');
            max_age_input.value = '';
        }

        setMaxAge(event.target.value);
    };

    // Min feet
    const [min_feet, setMinFeet] = React.useState('');
    const handleMinFeet = (event) => {
        setMinFeet(event.target.value);
    };

    // Min inches
    const [min_inch, setMinInch] = React.useState('');
    const handleMinInch = (event) => {
        setMinInch(event.target.value);
    };

    // Max feet
    const [max_feet, setMaxFeet] = React.useState('');
    const handleMaxFeet = (event) => {
        setMaxFeet(event.target.value);
    };

    // Max inches
    const [max_inch, setMaxInch] = React.useState('');
    const handleMaxInch = (event) => {
        setMaxInch(event.target.value);
    };

    // Gender
    const [gender, setGender] = React.useState('');
    const handleGender = (event) => {
        setGender(event.target.value);
    };

    // Orientation
    const [orientation, setOrientation] = React.useState('');
    const handleOrientation = (event) => {
        setOrientation(event.target.value);
    };

    // Ethnicity
    const [ethnicity, setEthnicity] = React.useState('');
    const handleEthnicity = (event) => {
        setEthnicity(event.target.value);
    };

    // Politics
    const [politics, setPolitics] = React.useState('');
    const handlePolitics = (event) => {
        setPolitics(event.target.value);
    };

    // Religion
    const [religion, setReligion] = React.useState('');
    const handleReligion = (event) => {
        setReligion(event.target.value);
    };

    // Employer
    const [employer, setEmployer] = React.useState('');
    const handleEmployer = (event) => {
        setEmployer(event.target.value);
    };

    // Employer
    const [job, setJob] = React.useState('');
    const handleJob = (event) => {
        setJob(event.target.value);
    };

    // Education Level
    const [education_level, setEducationLevel] = React.useState('');
    const handleEducationLevel = (event) => {
        setEducationLevel(event.target.value);
    };

    // School
    const [school, setSchool] = React.useState('');
    const handleSchool = (event) => {
        setSchool(event.target.value);
    };

    // Dating Goal
    const [goal, setGoal] = React.useState('');
    const handleGoal = (event) => {
        setGoal(event.target.value);
    };

    // Location
    const [location, setLocation] = React.useState('');
    const handleLocation = (event) => {
        setLocation(event.target.value);
    };

    // Workout
    const [workout, setWorkout] = React.useState('');
    const handleWorkout = (event) => {
        setWorkout(event.target.value);
    };

    let metric_input;
    if(metric == 0) {
    metric_input = 
        <TextField
            id="total-matches-input"
            label="Your Total Number of Matches"
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
            sx={{
                label: {color: '#FF8000'},
                input: { color: '#00CC00' }
            }}
            value={total_matches}
            onChange={handleTotalMatches}
        />
    } else if(metric == 1){
    metric_input =
        <div>
            <TextField
                id="ratio-input"
                label="Your Match-to-Like Ratio"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                sx={{
                    label: {color: '#FF8000'},
                    input: { color: '#00CC00' }
                }}
                value={swipe_ratio}
                onChange={handleSwipeRatio}
            />
            <p style={{fontSize: '14px'}}>The match-to-like ratio must be between 0 and 1</p>
        </div>    
        
    } else if(metric == 2) {
    metric_input =
        <TextField
            id="match-day-input"
            label="Your Matches per day"
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
            sx={{
                label: {color: '#FF8000'},
                input: { color: '#00CC00' }
            }}
            value={match_per_day}
            onChange={handleMatchPerDay}
        />
    }


    // On button click, this will start it all!
    function handleSubmit(event) {

    }

  return (
    <div className='query_form_body' style={{backgroundColor:"#282c34"}}>
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
          <MenuItem value={"hinge"}>Hinge</MenuItem>
          <MenuItem disabled value={"tinder"}>Tinder</MenuItem>
          <MenuItem disabled value={"bumble"}>Bumble</MenuItem>
          <MenuItem disabled value={"grindr"}>Grindr</MenuItem>
          <MenuItem disabled value={"coffee"}>Coffee Meets Bagel</MenuItem>
        </Select>
      </FormControl>
      <br></br>
      <br></br>
      <div className='metric-section'>
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
                </Select>
            </FormControl>
        </div>
        <br></br>
        <div className='metric-subsection'>
            {metric_input}
        </div>
      </div>
      <br></br>
      <br></br>
      <h2>The attributes of fellow online daters</h2>
      <p>Fill in as many or as little as you want. The queried group will be the pool you are compared to.</p>
      <br></br>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120, backgroundColor:"#282c34", width:"25%"}}>
        <InputLabel id="demo-simple-select-standard-label" sx={{ color:"#FF8000"}}>Gender</InputLabel>
        <Select
          labelId="gender-select"
          id="gender-select"
          value={gender}
          onChange={handleGender}
          label="gender-select"
          sx={{ color:"#00CC00"}}
        >
          <MenuItem value={0}>Male</MenuItem>
          <MenuItem value={1}>Female</MenuItem>
          <MenuItem value={2}>Other</MenuItem>
          <MenuItem value={""}><b>Unselect</b></MenuItem>
        </Select>
      </FormControl>
      <br></br>
      <br></br>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120, backgroundColor:"#282c34", width:"25%"}}>
        <InputLabel id="demo-simple-select-standard-label" sx={{ color:"#FF8000"}}>Orientation</InputLabel>
        <Select
          labelId="orientation-select"
          id="orientation-select"
          value={orientation}
          onChange={handleOrientation}
          label="orientation-select"
          sx={{ color:"#00CC00"}}
        >
          <MenuItem value={0}>Straight</MenuItem>
          <MenuItem value={1}>LGBT</MenuItem>
          <MenuItem value={""}><b>Unselect</b></MenuItem>
        </Select>
      </FormControl>
      <br></br>
      <br></br>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120, backgroundColor:"#282c34", width:"25%"}}>
        <InputLabel id="demo-simple-select-standard-label" sx={{ color:"#FF8000"}}>Dating Intention</InputLabel>
        <Select
          labelId="dating-goal-select"
          id="dating-goal-select"
          value={goal}
          onChange={handleGoal}
          label="dating-goal-select"
          sx={{ color:"#00CC00"}}
        >
          <MenuItem value={0}>Marriage</MenuItem>
          <MenuItem value={1}>Long-term relationship</MenuItem>
          <MenuItem value={2}>Hook up</MenuItem>
          <MenuItem value={3}>Figuring it out</MenuItem>
          <MenuItem value={""}><b>Unselect</b></MenuItem>
        </Select>
      </FormControl>
      <br></br>
      <br></br>
      <br></br>
      <div className='age_section'>
        <div className='age_subsection_text'>
            <p>Between the age(s) of </p>
        </div>
        <div className='age_subsection'>
            <TextField
                id="min-age-input"
                label="Minimum Age"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                sx={{
                    label: {color: '#FF8000'},
                    input: { color: '#00CC00' }
                }}
                value={min_age}
                onChange={handleMinAge}
            />
        </div>
        <div className='age_subsection_text_and'>
            <p>and </p>
        </div>
        <div className='age_subsection'>
            <TextField
                id="max-age-input"
                label="Maximum Age"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                sx={{
                    label: {color: '#FF8000'},
                    input: { color: '#00CC00' }
                }}
                value={max_age}
                onChange={handleMaxAge}
            />
        </div>
        <div className='age_subsection_filler'></div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className='height_section'>
        <div className='height_subsection_text'>
            <p>Between the height of </p>
        </div>
        <div className='height_subsection'>
            <TextField
                id="min-age-input"
                label="Feet"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                sx={{
                    label: {color: '#FF8000'},
                    input: { color: '#00CC00' }
                }}
                value={min_feet}
                onChange={handleMinFeet}
            />
        </div>
        <div className='height_subsection'>
            <TextField
                id="min-age-input"
                label="Inches"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                sx={{
                    label: {color: '#FF8000'},
                    input: { color: '#00CC00' }
                }}
                value={min_inch}
                onChange={handleMinInch}
            />
        </div>
        <div className='height_subsection_text_and'>
            <p>and </p>
        </div>
        <div className='height_subsection'>
            <TextField
                id="max-age-input"
                label="Feet"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                sx={{
                    label: {color: '#FF8000'},
                    input: { color: '#00CC00' }
                }}
                value={max_feet}
                onChange={handleMaxFeet}
            />
        </div>
        <div className='height_subsection'>
            <TextField
                id="max-age-input"
                label="Inches"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                sx={{
                    label: {color: '#FF8000'},
                    input: { color: '#00CC00' }
                }}
                value={max_inch}
                onChange={handleMaxInch}
            />
        </div>
        <div className='height_subsection_filler'></div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className='remaining_sections'>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, backgroundColor:"#282c34", width:"25%"}}>
            <InputLabel id="demo-simple-select-standard-label" sx={{ color:"#FF8000"}}>Ethnicity</InputLabel>
            <Select
                labelId="ethnicity-select"
                id="ethnicity-select"
                value={ethnicity}
                onChange={handleEthnicity}
                label="ethnicity-select"
                sx={{ color:"#00CC00"}}
                >
                <MenuItem value={"American Indian"}>American Indian</MenuItem>
                <MenuItem value={"Black/African Descent"}>Black/African Descent</MenuItem>
                <MenuItem value={"East Asian"}>East Asian</MenuItem>
                <MenuItem value={"Hispanic/Latino"}>Hispanic/Latino</MenuItem>
                <MenuItem value={"Middle Eastern"}>Middle Eastern</MenuItem>
                <MenuItem value={"Pacific Islander"}>Pacific Islander</MenuItem>
                <MenuItem value={"South Asian"}>South Asian</MenuItem>
                <MenuItem value={"Southeast Asian"}>Southeast Asian</MenuItem>
                <MenuItem value={"White/Caucasian"}>White/Caucasian</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
                <MenuItem value={""}><b>Unselect</b></MenuItem>
            </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, backgroundColor:"#282c34", width:"25%"}}>
            <InputLabel id="demo-simple-select-standard-label" sx={{ color:"#FF8000"}}>Political Views</InputLabel>
            <Select
                labelId="politics-select"
                id="politics-select"
                value={politics}
                onChange={handlePolitics}
                label="politics-select"
                sx={{ color:"#00CC00"}}
                >
                <MenuItem value={0}>Liberal</MenuItem>
                <MenuItem value={1}>Moderate</MenuItem>
                <MenuItem value={2}>Conservative</MenuItem>
                <MenuItem value={3}>Not Political</MenuItem>
                <MenuItem value={4}>Other</MenuItem>
                <MenuItem value={""}><b>Unselect</b></MenuItem>
            </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, backgroundColor:"#282c34", width:"25%"}}>
            <InputLabel id="demo-simple-select-standard-label" sx={{ color:"#FF8000"}}>Religion</InputLabel>
            <Select
                labelId="religion-select"
                id="religion-select"
                value={religion}
                onChange={handleReligion}
                label="religion-select"
                sx={{ color:"#00CC00"}}
                >
                <MenuItem value={"Agnostic"}>Agnostic</MenuItem>
                <MenuItem value={"Atheist"}>Atheist</MenuItem>
                <MenuItem value={"Buddhist"}>Buddhist</MenuItem>
                <MenuItem value={"Catholic"}>Catholic</MenuItem>
                <MenuItem value={"Christian"}>Christian</MenuItem>
                <MenuItem value={"Hindu"}>Hindu</MenuItem>
                <MenuItem value={"Jewish"}>Jewish</MenuItem>
                <MenuItem value={"Muslim"}>Muslim</MenuItem>
                <MenuItem value={"Sikh"}>Sikh</MenuItem>
                <MenuItem value={"Spiritual"}>Spiritual</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
                <MenuItem value={""}><b>Unselect</b></MenuItem>
            </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, backgroundColor:"#282c34", width:"25%"}}>
            <InputLabel id="demo-simple-select-standard-label" sx={{ color:"#FF8000"}}>Education Level</InputLabel>
            <Select
                labelId="education-level-select"
                id="education-level-select"
                value={education_level}
                onChange={handleEducationLevel}
                label="education-level-select"
                sx={{ color:"#00CC00"}}
                >
                <MenuItem value={0}>High School</MenuItem>
                <MenuItem value={1}>Undergrad</MenuItem>
                <MenuItem value={2}>Postgrad</MenuItem>
                <MenuItem value={""}><b>Unselect</b></MenuItem>
            </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, backgroundColor:"#282c34", width:"25%"}}>
            <InputLabel id="demo-simple-select-standard-label" sx={{ color:"#FF8000"}}>School</InputLabel>
            <Select
                labelId="school-select"
                id="school-select"
                value={school}
                onChange={handleSchool}
                label="school-select"
                sx={{ color:"#00CC00"}}
                >
                <MenuItem value={0}>UNC Chapel Hill</MenuItem>
                <MenuItem value={1}>NC State</MenuItem>
                <MenuItem value={2}>UC Berkeley</MenuItem>
            </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, backgroundColor:"#282c34", width:"25%"}}>
            <InputLabel id="demo-simple-select-standard-label" sx={{ color:"#FF8000"}}>Employer</InputLabel>
            <Select
                labelId="employer-select"
                id="employer-select"
                value={employer}
                onChange={handleEmployer}
                label="employer-select"
                sx={{ color:"#00CC00"}}
                >
                <MenuItem value={0}>Google</MenuItem>
                <MenuItem value={1}>Delta Force</MenuItem>
            </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, backgroundColor:"#282c34", width:"25%"}}>
            <InputLabel id="demo-simple-select-standard-label" sx={{ color:"#FF8000"}}>Job</InputLabel>
            <Select
                labelId="job-select"
                id="job-select"
                value={job}
                onChange={handleJob}
                label="job-select"
                sx={{ color:"#00CC00"}}
                >
                <MenuItem value={0}>Engineer</MenuItem>
                <MenuItem value={1}>Consultant</MenuItem>
            </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, backgroundColor:"#282c34", width:"25%"}}>
            <InputLabel id="demo-simple-select-standard-label" sx={{ color:"#FF8000"}}>Location</InputLabel>
            <Select
                labelId="location-select"
                id="location-select"
                value={location}
                onChange={handleLocation}
                label="location-select"
                sx={{ color:"#00CC00"}}
                >
                <MenuItem value={0}>Los Angeles, CA</MenuItem>
                <MenuItem value={1}>Bay Area, CA</MenuItem>
                <MenuItem value={2}>Raleigh, NC</MenuItem>
            </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, backgroundColor:"#282c34", width:"25%"}}>
            <InputLabel id="demo-simple-select-standard-label" sx={{ color:"#FF8000"}}>Do you lift bro?</InputLabel>
            <Select
                labelId="workout-select"
                id="workout-select"
                value={workout}
                onChange={handleWorkout}
                label="workout-select"
                sx={{ color:"#00CC00"}}
                >
                <MenuItem value={0}>Never</MenuItem>
                <MenuItem value={1}>Occasionally</MenuItem>
                <MenuItem value={2}>So so</MenuItem>
                <MenuItem value={3}>Frequently</MenuItem>
                <MenuItem value={4}>Bro are you juicing?</MenuItem>
            </Select>
        </FormControl>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Button variant="contained" color='secondary' size='large'>Fuck Around and Find Out</Button>
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