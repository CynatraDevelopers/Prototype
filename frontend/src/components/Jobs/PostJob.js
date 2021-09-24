import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom';
import axios from "axios";

class PostJobs extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            desc: "",
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted")
        const newLove = {
            title: this.state.title,
            desc: this.state.desc,
        }

        axios
            .post("/api/auth/postjobs", newLove)
            .then(data => {
                console.log(data);
                this.props.history.push("/jobs");
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="div1" style={{ "padding-top": "3rem", "paddingLeft": "3rem" }}>
                <div>
                    {'C Y N A T R A'}
                </div>
                <div style={{ marginTop: "4rem" }} className="row">
                    <div className="col s8 offset-s2">
                        <div className="col s12" style={{ paddingLeft: "0px" }}>
                            <h4 style={{ "fontSize": "21px", "paddingLeft": "2rem" }}>
                                Post your <b>Job</b> below
                            </h4>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12" style={{ "padding-top": "3rem", "paddingLeft": "3rem" }}>
                                <label htmlFor="email">Title</label>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.title}
                                    id="title"
                                    type="text"
                                />
                            </div>
                            <div className="input-field col s12" style={{ "padding-top": "3rem", "paddingLeft": "3rem" }}>
                                <label htmlFor="email">Description</label>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.desc}
                                    id="desc"
                                    type="text"
                                />
                            </div>
                            <button
                                style={{
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem",
                                    paddingBottom: "30px",
                                    marginTop: "21px",
                                    marginLeft: "21px"
                                }}
                                type="submit"
                                className="btn waves-effect waves-light hoverable blue accent-3"
                            >
                                Post
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default withRouter(PostJobs);