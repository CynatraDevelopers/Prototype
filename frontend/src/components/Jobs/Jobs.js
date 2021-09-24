import './Jobs.css'
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
            <div className="jobBody">
                <div className="jobBodyHeader">
                    <p className="jobBodyHeaderText">Explore Opportunities</p>
                    <div className="row button">
                        <Link to="/postjobs"><button style={{ "marginBottom": "20px" }}>Post</button></Link>
                    </div>
                </div>

                {/* RECT BOXES -------------------------------------------------------------------------------------------------------------- */}

                {data != null && jobsfed}

                {/* RECT BOXES -------------------------------------------------------------------------------------------------------------- */}

                <div className="messagingRect">
                    <p className="messagingRectText">Messaging</p>
                </div>
            </div>
        );

    }
}

export default JobFeed;