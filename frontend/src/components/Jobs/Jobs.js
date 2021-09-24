import './Jobs.css'
import { TextField } from '@mui/material';
import { FaHome, FaBell, FaShareAlt } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"

class JobFeed extends Component {

    constructor() {
        super();
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        axios
            .get("/api/auth/jobs")
            .then(data => {
                console.log(data);
                this.setState({
                    data: data.data
                });
            })
            .catch(err => console.log(err));
    }
    submitSearch = (e) => {
        e.preventDefault();
    }

    render() {

        const { data } = this.state;

        const jobsfed = data != null ? data.map((feed, key) => (
            <div className="jobRect" key={key}>
                <p className="jobName">{feed.title}</p>
                <p className="jobName">{feed.desc}</p>
                <div className="applyButton">
                    <p className="applyText">Apply</p>
                </div>
            </div>
        )) : null;

        return (
            <div>
            <div className="jobHeader">
                {/* <div className="Title">
                    {"C Y N A T R A"}
                </div> */}
                <div className="Search">
                    <form>
                        <TextField 
                                id="outlined-basic" 
                                className="Searchtext" 
                                label="Search" 
                                variant="outlined"
                        />
                        <button className="search__div" onClick={this.submitSearch}>
                            <i class="fas fa-search explore__search"></i>
                        </button>
                    </form>
                </div>
                <div className="NavBarJobs">
                    <FaHome className = "iconHomeJobs"/>
                    <FaBell className = "iconBellJobs"/>
                    <FaShareAlt className = "iconShareJobs"/>
                    <FiSettings className = "iconSettingsJobs"/>
                </div> 
                <div className = "ProfileInfo">
                    <div className = "RectCareer">
                        <p className="CareerText">Career</p>
                    </div>
                    <div className = "RectName">
                        <p className = "Username">Jelly</p>
                    </div>
                    <div className = "ProfilePic"/>
                </div>
            </div>
            <div className="jobBody">
                <div className="jobBodyHeader">
                    <p className="jobBodyHeaderText">Explore Opportunities</p>
                    <div className="row button">
                        <Link to="/postjobs"><button style={{ "marginBottom": "20px" }}>Post</button></Link>
                    </div>
                </div>

                

                {data != null && jobsfed}

                

                <div className="messagingRect">
                    <p className="messagingRectText">Messaging</p>
                </div>
            </div>
        </div>
        );

    }
}

export default JobFeed;