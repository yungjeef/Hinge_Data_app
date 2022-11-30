import CanvasJSReact from '../../assets/canvasjs.react';
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

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class SearchResults extends React.Component {

    render() {
        const results_data = this.props.results_data;
        const gender = this.props.gender;

        if(results_data == null) {
            return (
                <p></p>
            )
        }

        // =============================================
        // Beginning message section
        // =============================================

        let gender_str = "";
        if(gender == 0) {
            gender_str = "male";
        } else {
            gender_str = "female";
        }

        let dating_app = "";
        if(results_data["dating_app"] == 0) {
            dating_app = "Hinge";
        } else if(results_data["dating_app"] == 1) {
            dating_app = "Tinder";
        } else {
            dating_app = "Bumble"; // Further development will be done on this
        }

        let metric = "";
        let metric_explanation = "";
        if(results_data["metric"] == 0) {
            metric = "Total matches";
        } else if(results_data["metric"] == 1) {
            metric = "Match-to-Like Ratio";
            metric_explanation = "Match-to-Like ratio is the ratio of likes" +
                " sent that end up with a match. For example, if you send 10 likes" +
                " and get 5 matches from it, your Match-to-Like ratio is 0.5.";
        } else if(results_data["metric"] == 2) {
            metric = "Matches per day";
            metric_explanation = "Note: Only active days are counted when calculating" +
                " matches per day. Active days are days when you use the app to" +
                " message, like, match, etc.";
        } else {
            metric = "Percent from Received Likes";
            metric_explanation = "Percent from Received Likes is the percent of" +
                " total matches which came from you matching with someone that already" +
                " liked/swiped on you.";
        }

        let beginning_message;
        
        beginning_message = 
            <h2><span>{metric}</span> statistics on {dating_app} among straight {gender_str} users</h2>

        // =============================================
        // End of Beginning message section
        // =============================================


        // =============================================
        // Graph data generation section
        // =============================================

        let height_dataPoints;
        if(gender == 0) {
            height_dataPoints = [
                { label: "5 ' 0 - 5 ' 3", y: 0.015 },
                { label: "5 ' 3 - 5 ' 6", y: 0.02 },
                { label: "5 ' 6 - 5 ' 9", y: 0.08 },
                { label: "5 ' 9 - 6 ' 0", y: 0.1 },
                { label: "6 ' 0 - 6 ' 3", y: 0.21 },
                { label: "6 ' 3 - 6 ' 6", y: 0.24 },
                { label: "Over 6 ' 6", y: 0.19 },
            ]
        } else {
            height_dataPoints = [
                { label: "4 ' 9 - 5 ' 0", y: 0.24 },
                { label: "5 ' 0 - 5 ' 3", y: 0.31 },
                { label: "5 ' 3 - 5 ' 6", y: 0.56 },
                { label: "5 ' 6 - 5 ' 9", y: 0.59 },
                { label: "5 ' 9 - 6 ' 0", y: 0.65 },
                { label: "6 ' 0 - 6 ' 3", y: 0.55 },
                { label: "Over 6 ' 3", y: 0.67 },
            ]
        }

        let ethnicity_dataPoints;
        if(gender == 0) {
            ethnicity_dataPoints = [
                { label: "American Indian", y: 0, indexLabel: "Not enough data" },
                { label: "Black/African", y: 0.16 },
                { label: "East Asian", y: 0.08 },
                { label: "Hispanic/Latino", y: 0.17 },
                { label: "Middle Eastern", y: 0.15 },
                { label: "Pacific Islander", y: 0,  indexLabel: "Not enough data"},
                { label: "South Asian", y: 0.06 },
                { label: "Southeast Asian", y: 0.04 },
                { label: "White/Caucasian", y: 0.21 },
                { label: "Other", y: 0, indexLabel: "Not enough data"},
            ]
        } else {
            ethnicity_dataPoints = [
                { label: "American Indian", y: 0, indexLabel: "Not enough data" },
                { label: "Black/African", y: 0.13 },
                { label: "East Asian", y: 0.43 },
                { label: "Hispanic/Latino", y: 0.39 },
                { label: "Middle Eastern", y: 0.55 },
                { label: "Pacific Islander", y: 0, indexLabel: "Not enough data"},
                { label: "South Asian", y: 0.39 },
                { label: "Southeast Asian", y: 0.31 },
                { label: "White/Caucasian", y: 0.59 },
                { label: "Other", y: 0, indexLabel: "Not enough data"},
            ]
        }
        

        const height_options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark2", //"light1", "dark1", "dark2"
			title:{
				text: "Based on height"
			},
			axisY: {
				includeZero: true
			},
			data: [{
				type: "column", //change type to bar, line, area, pie, etc
				//indexLabel: "{y}", //Shows y value on all Data Points
				indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "outside",
				dataPoints: height_dataPoints
			}]
		}

        const ethnicity_options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark2", //"light1", "dark1", "dark2"
			title:{
				text: "Based on ethnicity"
			},
			axisY: {
				includeZero: true
			},
			data: [{
				type: "column", //change type to bar, line, area, pie, etc
				//indexLabel: "{y}", //Shows y value on all Data Points
				indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "outside",
				dataPoints: ethnicity_dataPoints
			}]
		}


    return (
        <div className='graph_body' style={{backgroundColor:"#282c34"}}>
            {beginning_message}
            <h3>{metric_explanation}</h3>
            <br></br>
            <br></br>
            <div class="by-age">
            <CanvasJSChart options = {height_options} />
            </div>
            <br></br>
            <br></br>
            <div class="by-ethnicity">
            <CanvasJSChart options = {ethnicity_options} />
            </div>
        </div>
    )
    };
}