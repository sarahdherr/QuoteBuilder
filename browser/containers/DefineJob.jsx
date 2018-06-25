import React from "react";

import Title from "../components/Title";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            company : "",
            jobName : "",
            location : "",
            specifier : "",
            jobType : "",
            something: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        evt.preventDefault();
        let tempObj = {};
        tempObj[evt.target.name] = evt.target.value;
        this.setState(tempObj, this.props.sendJobInfo(this.state));
    }

    render () {
        return (
            <div>
                <Title title="DEFINE JOB"/>
                <div className="jobinfo-container">
                    <p className="jobinfo-item-label">Name:</p>
                    <input className="jobinfo-item-input" name="name" onChange={this.handleChange} value={this.state.name}/>
                </div>
                <div className="jobinfo-container">
                    <p className="jobinfo-item-label">Company:</p>
                    <input className="jobinfo-item-input" name="company" onChange={this.handleChange} value={this.state.company}/>
                </div>
                <div className="jobinfo-container">
                    <p className="jobinfo-item-label">Job Name:</p>
                    <input className="jobinfo-item-input" name="jobName" onChange={this.handleChange} value={this.state.jobName}/>
                </div>
                <div className="jobinfo-container">
                    <p className="jobinfo-item-label">Location:</p>
                    <input className="jobinfo-item-input" name="location" onChange={this.handleChange} value={this.state.location}/>
                </div>
                <div className="jobinfo-container">
                    <p className="jobinfo-item-label">Specifier:</p>
                    <input className="jobinfo-item-input" name="specifier" onChange={this.handleChange} value={this.state.specifier}/>
                </div>
                <div className="jobinfo-container">
                    <p className="jobinfo-item-label">Job Type:</p>
                    <select className="jobinfo-item-input" name="jobType" onChange={this.handleChange} value={this.state.jobType}>
                        <option></option>
                        <option>Hospitality</option>
                        <option>Residential</option>
                        <option>Commercial</option>
                    </select>
                </div>
            </div>
        )
    }
}