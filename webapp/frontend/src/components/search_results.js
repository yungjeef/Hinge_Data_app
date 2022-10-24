import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import '../css/search_results.css';

export default class SearchResults extends React.Component {

    getPercentile() {
        return "50"
    }

    render() {
        const results_data = this.props.results_data;
        let ResultsDisplay;
        let AttributeTags = [];

        if(results_data == null) {
            ResultsDisplay = <p></p>
        } else {
            for(const key in results_data) {
                if(key == "dating_app" || key == "match_per_day" || key == "swipe_ratio" || key == "total_matches" || key == "metric" || key == "min_age" || key == "max_age" || key == "min_height" || key == "max_height") {
                    continue;
                }

                let message;
                if(results_data[key] == "") {
                    message = "Any " + key;
                } else {
                    message = results_data[key];
                }

                let btn = document.createElement('button');
                btn.innerHTML = results_data[key];
                AttributeTags.push(
                    <Button 
                        variant="contained"
                        color='secondary'
                        id='tag_button'
                        sx={{m:1}}>
                        {message}
                    </Button>);
            }

            let age_message = "";
            if(results_data["max_age"] != 0 && results_data["min_age"] != 0) {
                age_message = 'Between ' + results_data["min_age"] + ' and ' + results_data["max_age"] + ' years old'
            } else if(results_data["max_age"] != 0) {
                age_message = 'At most ' + results_data["max_age"] + ' years old'
            } else if(results_data["min_age"] != 0) {
                age_message = 'At least ' + results_data["min_age"] + ' years old'
            }

            let height_message = "";
            let min_height;
            let max_height;
            if(results_data["max_height"] != 0 && results_data["min_height"] != 0) {
                min_height = Math.floor(results_data["min_height"]/12) + "'" + results_data["min_height"]%12;
                max_height = Math.floor(results_data["max_height"]/12) + "'" + results_data["max_height"]%12;
                height_message = 'Between ' + min_height + ' and ' + max_height
            } else if(results_data["max_height"] != 0) {
                max_height = Math.floor(results_data["max_height"]/12) + "'" + results_data["max_height"]%12;
                height_message = 'At most ' + max_height
            } else if(results_data["min_height"] != 0) {
                min_height = Math.floor(results_data["min_height"]/12) + "'" + results_data["min_height"]%12;
                height_message = 'At least ' + min_height
            }

            if(age_message != "") {
                AttributeTags.push(
                    <Button 
                        variant="contained"
                        color='secondary'
                        id='tag_button'
                        sx={{m:1}}>
                        {age_message}
                    </Button>);
            }
            
            if(height_message != "") {
                AttributeTags.push(
                    <Button 
                        variant="contained"
                        color='secondary'
                        id='tag_button'
                        sx={{m:1}}>
                        {height_message}
                    </Button>);
            }

            const group_matches = [154, 256, 236, 13, 743, 434, 85, 635, 90, 99, 325, 495,
                223, 56, 54, 899, 434, 665, 232, 200, 109, 32, 34, 56, 78, 1099, 145, 23, 57,
                235, 45, 677, 76, 230, 302, 93, 842, 34, 920, 20, 392, 123, 40, 30, 29, 45
            ]

            const group_ratios = [0.12, 0.13, 0.12, 0.07, 0.25, 0.15, 0.15, 0.14, 0.14, 0.23, 0.4,
                0.33, 0.21, 0.23, 0.14, 0.12, 0.21, 0.11, 0.1, 0.09, 0.02, 0.04, 0.08, 0.09, 0.1,
                0.23, 0.21, 0.2, 0.19, 0.19, 0.16, 0.17, 0.18, 0.2, 0.23, 0.25, 0.29, 0.30, 0.32,
                0.23, 0.19, 0.24, 0.2, 0.19, 0.15, 0.23, 0.19, 0.34, 0.4, 0.21, 0.14, 0.09
            ]

            const group_rate = [2.1, 2.2, 2.1, 3.1, 3.5, 2.2, 2.6, 2.8, 1.2, 0.8, 0.8, 0.8, 0.4,
                0.5, 0.3, 0.2, 0.4, 0.6, 0.4, 2.1, 3.1, 3.2, 4.5, 6.4, 2.3, 3.4, 5.5, 4.4, 2.3, 1.2,
                1.5, 1.9, 1.8, 1.7, 1.7, 1.6, 1.7, 1.8, 2.1, 2.5, 2.6, 2.9, 2.7, 0.2, 2.9, 3.4, 5.4,
                2.3, 2.6, 2.7, 2.7, 2.5, 2.7, 2.9, 3, 4.2, 2.9, 2.6, 1.8, 1.9, 1.8, 1.4, 2.3
            ]

            let PercentileStatement;
            let percentile;
            if(results_data.metric == 0) {
                let length = group_matches.length;
                let counter = 0;
                for(var i=0; i < length; i++) {
                    if(group_matches[i] <= results_data.total_matches) {
                        counter++;
                    }
                }

                percentile = (counter/length).toFixed(2) * 100;
                PercentileStatement = 
                    <h2 style={{color:'white'}}>
                        With <font color="FF8000">{results_data.total_matches}</font> total matches, you are in the 
                        <font color="FF8000"> {percentile}% percentile</font> among the users.
                    </h2>
            } else if(results_data.metric == 1) {
                let length = group_ratios.length;
                let counter = 0;
                for(var i=0; i < length; i++) {
                    if(group_ratios[i] <= results_data.swipe_ratio) {
                        counter++;
                    }
                }

                percentile = (counter/length).toFixed(2) * 100;
                PercentileStatement = 
                    <h2 style={{color:'white'}}>
                        With <font color="FF8000">{results_data.swipe_ratio}</font> swipe ratio, you are in the 
                        <font color="FF8000"> {percentile}% percentile</font> among the users.
                    </h2>
            } else if(results_data.metric == 2) {
                let length = group_rate.length;
                let counter = 0;
                for(var i=0; i < length; i++) {
                    if(group_rate[i] <= results_data.match_per_day) {
                        counter++;
                    }
                }

                percentile = (counter/length).toFixed(2) * 100;
                PercentileStatement = 
                    <h2 style={{color:'white'}}>
                        With <font color="FF8000">{results_data.match_per_day}</font> matches per day, you are in the 
                        <font color="FF8000"> {percentile}% percentile</font> among the users.
                    </h2>
            }

            let PercentileImage;
            if(percentile > 70) {
                PercentileImage = <img src={require('../images/giga_chad.jpg')} width="400"></img>
            } else if(percentile <= 70 && percentile > 10) {
                PercentileImage = <img src={require('../images/wojak.jpg')} width="400"></img>
            } else if(percentile <= 10) {
                PercentileImage = <img 
                    src={require('../images/withered.jpg')}
                    width="400"
                    >

                </img>
            }

            ResultsDisplay = 
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1 style={{color:'white'}}>Search Results for {results_data.dating_app}</h1>
                    <p>With these attributes from fellow online daters</p>
                    <br></br>
                    <div>
                        {AttributeTags}
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
                        {PercentileStatement}
                        <br></br>
                        {PercentileImage}
                    </div>
                </div>
        }
    

    return (
        <div className='results_body' style={{backgroundColor:"#282c34"}}>
            {ResultsDisplay}
        </div>
    )
    };
}