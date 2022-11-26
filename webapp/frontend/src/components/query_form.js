import * as React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/query_form.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { sizeHeight } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchResults from './search_results.js';

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
        if(new_swipe_ratio > 1 || new_swipe_ratio < 0) {
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
        const new_min_feet = Number(event.target.value);

        // Height can't be negative or decimal
        if(new_min_feet < 0 || !checkNumber(new_min_feet) || new_min_feet > 8) {
            const min_feet_input = document.getElementById('min-feet-input');
            min_feet_input.value = '';
        }

        setMinFeet(event.target.value);
    };

    // Min inches
    const [min_inch, setMinInch] = React.useState('');
    const handleMinInch = (event) => {
        const new_min_inch = Number(event.target.value);

        // Height can't be negative or decimal
        if(new_min_inch < 0 || !checkNumber(new_min_inch) || new_min_inch > 11) {
            const min_inch_input = document.getElementById('min-inch-input');
            min_inch_input.value = '';
        }
        setMinInch(event.target.value);
    };

    // Max feet
    const [max_feet, setMaxFeet] = React.useState('');
    const handleMaxFeet = (event) => {
        const new_max_feet = Number(event.target.value);

        // Height can't be negative or decimal
        if(new_max_feet < 0 || !checkNumber(new_max_feet) || new_max_feet > 8) {
            const max_feet_input = document.getElementById('max-feet-input');
            max_feet_input.value = '';
        }
        setMaxFeet(event.target.value);
    };

    // Max inches
    const [max_inch, setMaxInch] = React.useState('');
    const handleMaxInch = (event) => {
        const new_max_inch = Number(event.target.value);

        // Height can't be negative or decimal
        if(new_max_inch < 0 || !checkNumber(new_max_inch) || new_max_inch > 11) {
            const max_inch_input = document.getElementById('max-inch-input');
            max_inch_input.value = '';
        }
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

    function generate_submission_form() {
        
        // Calculate height, convert to inches
        let actual_min_height = 0;
        let actual_max_height = 0;

        if(min_feet != '') {
            actual_min_height = Number(min_feet) * 12;
            if(min_inch != '') {
                actual_min_height = actual_min_height + Number(min_inch);
            }
        }

        if(max_feet != '') {
            actual_max_height = Number(max_feet) * 12;
            if(max_inch != '') {
                actual_max_height = actual_max_height + Number(max_inch);
            }
        }

        if(actual_min_height > actual_max_height) {
            let temp = actual_max_height;
            actual_max_height = actual_min_height;
            actual_min_height = temp;
        }

        // Determine if min age is greater than max age
        let actual_min_age = 0;
        let actual_max_age = 0;
        if(min_age != '' && max_age != '') {
            if(Number(min_age) > Number(max_age)) {
                actual_max_age = Number(min_age);
                actual_min_age = Number(max_age);
            } else {
                actual_min_age = Number(min_age);
                actual_max_age = Number(max_age);
            }
        } else if(min_age != '') {
            actual_min_age = Number(min_age);
        } else if(max_age != '') {
            actual_max_age = Number(max_age);
        }

        const submission_data = {
            'dating_app': dating_app,
            'metric': metric,
            'total_matches': total_matches,
            'swipe_ratio': swipe_ratio,
            'match_per_day': match_per_day,
            'min_age': actual_min_age,
            'max_age': actual_max_age,
            'min_height': actual_min_height,
            'max_height': actual_max_height,
            'gender': gender,
            'orientation': orientation,
            'ethnicity': ethnicity,
            'politics': politics,
            'religion': religion,
            'employer': employer,
            'job': job,
            'education_level': education_level,
            'school': school,
            'goal': goal,
            'location': location,
            'workout': workout,
        }

        return submission_data
    }

    const [displayResult, setDisplayResult] = React.useState(false);
    const [submission_data, setSubmissionData] = React.useState(null);

    // On button click, this will start it all!
    function handleSubmit() {
        const submission_form = generate_submission_form();

        if(submission_form.dating_app == "") {
            alert("Dating app needs to be specified.")
        } else if(submission_form.metric == 1 && submission_form.swipe_ratio == "") {
            alert("Match Ratio metric must be specified.");
        } else if(submission_form.metric == 2 && submission_form.match_per_day == "") {
            alert("Match per day metric must be specified.");
        } else if(submission_form.metric == 0 && submission_form.total_matches == "") {
            alert("Total matches metric must be specified.");
        } else {
            // Submit using Axios to backend
            console.log(submission_form);
            setSubmissionData(submission_form);
        }
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
      <h3>Fill in as many or as little as you want. The queried group will be the pool you are compared to.</h3>
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
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
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
          <MenuItem value={"Straight"}>Straight</MenuItem>
          <MenuItem value={"LGBT"}>LGBT</MenuItem>
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
          <MenuItem value={"Marriage"}>Marriage</MenuItem>
          <MenuItem value={"Long-term relationship"}>Long-term relationship</MenuItem>
          <MenuItem value={"Hook up"}>Hook up</MenuItem>
          <MenuItem value={"Figuring it out"}>Figuring it out</MenuItem>
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
                id="min-feet-input"
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
                id="min-inch-input"
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
                id="max-feet-input"
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
                id="max-inch-input"
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
                <MenuItem value={"Liberal"}>Liberal</MenuItem>
                <MenuItem value={"Moderate"}>Moderate</MenuItem>
                <MenuItem value={"Conservative"}>Conservative</MenuItem>
                <MenuItem value={"Not Political"}>Not Political</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
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
                <MenuItem value={"High School"}>High School</MenuItem>
                <MenuItem value={"Undergrad"}>Undergrad</MenuItem>
                <MenuItem value={"Postgrad"}>Postgrad</MenuItem>
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
                <MenuItem value={"UNC Chapel Hill"}>UNC Chapel Hill</MenuItem>
                <MenuItem value={"NC State"}>NC State</MenuItem>
                <MenuItem value={"UC Berkeley"}>UC Berkeley</MenuItem>
                <MenuItem value={""}><b>Unselect</b></MenuItem>
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
                <MenuItem value={"Google"}>Google</MenuItem>
                <MenuItem value={"Delta Force"}>Delta Force</MenuItem>
                <MenuItem value={""}><b>Unselect</b></MenuItem>
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
                <MenuItem value={"Engineer"}>Engineer</MenuItem>
                <MenuItem value={"Consultant"}>Consultant</MenuItem>
                <MenuItem value={""}><b>Unselect</b></MenuItem>
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
                <MenuItem value={"Los Angeles, CA"}>Los Angeles, CA</MenuItem>
                <MenuItem value={"Bay Area, CA"}>Bay Area, CA</MenuItem>
                <MenuItem value={"Raleigh, NC"}>Raleigh, NC</MenuItem>
                <MenuItem value={""}><b>Unselect</b></MenuItem>
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
                <MenuItem value={"Never works out"}>Never</MenuItem>
                <MenuItem value={"Occasionally works out"}>Occasionally</MenuItem>
                <MenuItem value={"Average works out"}>So so</MenuItem>
                <MenuItem value={"Frequently works out"}>Frequently</MenuItem>
                <MenuItem value={"Definitely juices"}>Bro are you juicing?</MenuItem>
                <MenuItem value={""}><b>Unselect</b></MenuItem>
            </Select>
        </FormControl>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Button 
            variant="contained"
            color='secondary' 
            size='large' 
            onClick={handleSubmit}
            >
                Play Around and Find Out
        </Button>
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
        <SearchResults results_data = {submission_data}/>
        <br></br>
        <br></br>
        <br></br>
    </div>
  );
}