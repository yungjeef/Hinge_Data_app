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

export default function UploadQueryForm() {

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

    // ==================================
    // The required section
    // ==================================

    // Dating app choice
    const [dating_app, setDatingApp] = React.useState(null);
    const handleDatingAppSelection = (event) => {
        setDatingApp(event.target.value);
    };

    let dating_app_input;
    if(dating_app == 0) {
        dating_app_input = 
            <h2>Please upload <span>matches.json</span> from your Hinge data export</h2>
    }

    // File upload
    const [file, setFile] = React.useState(null);
    const handleFile = (event) => {
        setFile(event.target.files[0]);
    };

    // Age
    const [age, setAge] = React.useState(null);
    const handleAge = (event) => {
        const new_age = Number(event.target.value);

        // Age can't be negative or decimal
        if(new_age < 0 || !checkNumber(new_age) || new_age > 90) {
            const age_input = document.getElementById('age-input');
            age_input.value = '';
        }
        setAge(event.target.value);
    };

    // Feet
    const [feet, setFeet] = React.useState('');
    const handleFeet = (event) => {
        const new_min_feet = Number(event.target.value);

        // Height can't be negative or decimal
        if(new_min_feet < 0 || !checkNumber(new_min_feet) || new_min_feet > 8) {
            const feet_input = document.getElementById('feet-input');
            feet_input.value = '';
        }

        setFeet(event.target.value);
    };

    // Inches
    const [inches, setInches] = React.useState('');
    const handleInches = (event) => {
        const new_min_inch = Number(event.target.value);

        // Height can't be negative or decimal
        if(new_min_inch < 0 || !checkNumber(new_min_inch) || new_min_inch > 11) {
            const inch_input = document.getElementById('inch-input');
            inch_input.value = '';
        }
        setInches(event.target.value);
    };

    // Gender
    const [gender, setGender] = React.useState(null);
    const handleGender = (event) => {
        setGender(event.target.value);
    };

    // Orientation
    const [orientation, setOrientation] = React.useState(null);
    const handleOrientation = (event) => {
        setOrientation(event.target.value);
    };

    // Ethnicity
    const [ethnicity, setEthnicity] = React.useState(null);
    const handleEthnicity = (event) => {
        setEthnicity(event.target.value);
    };

    // ==================================
    // End of the required section
    // ==================================



    // ==================================
    // The optional section
    // ==================================

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

    // Job
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

    function generate_submission_form() {
        
        // Calculate height, convert to inches
        let actual_height = 0;

        if(feet != '') {
            actual_height = Number(feet) * 12;
            if(inches != '') {
                actual_height = actual_height + Number(inches);
            }
        }

        const submission_data = {
            'dating_app': dating_app,
            'file': file,
            'gender': gender,
            'orientation': orientation,
            'ethnicity': ethnicity,
            'age': age,
            'height': actual_height,
            'intention': goal,
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

        console.log(submission_form);

        if(submission_form.dating_app == null) {
            alert("Dating app needs to be specified.")
        } else if(submission_form.file == null) {
            alert("File was not uploaded.")
        } else if(submission_form.gender == null) {
            alert("Gender needs to be specified.")
        } else if(submission_form.orientation == null) {
            alert("Orientation needs to be specified.")
        } else if(submission_form.height == 0) {
            alert("Height needs to be specified.")
        } else if(submission_form.ethnicity == null) {
            alert("Ethnicity needs to be specified.")
        } else if(submission_form.age == null) {
            alert("Age needs to be specified.")
        } else {
            // Submit using Axios to backend
            console.log(submission_form);
            setSubmissionData(submission_form);
        }
    }

  return (
    <div className='query_form_body' style={{backgroundColor:"#282c34"}}>
        <div class='dating-app-select'>
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
            <div class='dating-app-select-subsection'>
                {dating_app_input}
            </div>
            <div class='dating-app-select-subsection'>
                <Button variant="contained"
                        color='secondary' 
                        size='large'>
                    <input type="file" 
                        onChange={handleFile}
                        accept=".json"/>
                </Button>
            </div>
        </div>
        <br></br>
        <br></br>
        <h2>Your attributes</h2>
        <h3>Please fill out these five boxes below.</h3>
        <FormControl 
            variant="standard" 
            sx={{ m: 1, minWidth: 120, backgroundColor:"#282c34", width:"25%"}}>
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
        <br></br>
        <br></br>
        <br></br>
        <div className='age_section'>
            <div className='age_subsection'>
                <TextField
                    id="age-input"
                    label="Age"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{
                        label: {color: '#FF8000'},
                        input: { color: '#00CC00' }
                    }}
                    value={age}
                    onChange={handleAge}
                />
            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='height_section'>
            <div className='height_subsection_text'>
                <p><span>Height</span></p>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className='height_subsection'>
                <TextField
                    id="feet-input"
                    label="Feet"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{
                        label: {color: '#FF8000'},
                        input: { color: '#00CC00' }
                    }}
                    value={feet}
                    onChange={handleFeet}
                />
            </div>
            <div className='height_subsection'>
                <TextField
                    id="inch-input"
                    label="Inches"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{
                        label: {color: '#FF8000'},
                        input: { color: '#00CC00' }
                    }}
                    value={inches}
                    onChange={handleInches}
                />
            </div>
            <div className='height_subsection_filler'></div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='remaining_sections'>
            <h3>For the rest of these, fill in as many or as little as you want.</h3>
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