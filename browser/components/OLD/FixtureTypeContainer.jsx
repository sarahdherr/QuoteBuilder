import React from "react";

import Title from "../components/Title";
import FixtureType from "../components/FixtureType"
import OptionalFixtureType from "../components/OptionalFixtureType"
import ChannelLengthTable from "../components/ChannelLengthTable"
import CollasedFixtureType from "../components/CollapsedFixtureType"
import FixtureTypeHeader from "../components/FixtureTypeHeader"

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fixtureType: "",
            partNumber: "",
            fixVals: {
                prefix: {value: "SS", initials: "SS"}
            },
            status: "Incomplete",
            open: true
        };
        this.handleCollapse = this.handleCollapse.bind(this);
        this.handleFixtureType = this.handleFixtureType.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.calculatePartNumber = this.calculatePartNumber.bind(this);
    }

    handleFixtureType(evt) {
        evt.preventDefault();
        this.setState({ fixtureType: evt.target.value });
    }

    handleCollapse(evt) {
        this.setState({ open: !this.state.open });
    }

    handleSelect(name, evt) {
        evt.preventDefault();
        let val = evt.target.value;
        let stateObj = this.state.fixVals;
        stateObj[name] = { value: val, initials: val.split(" - ")[0].split(".")[0] }
        this.setState({ fixVals: stateObj }, this.calculatePartNumber)
    }

    calculatePartNumber() {
        var prefix = this.state.fixVals.prefix ? this.state.fixVals.prefix.initials : ""
        var channel = this.state.fixVals.channel ? this.state.fixVals.channel.initials : ""
        var lens = this.state.fixVals.lens ? this.state.fixVals.lens.initials : ""
        var intensity = this.state.fixVals.intensity ? this.state.fixVals.intensity.initials : ""
        var cct = this.state.fixVals.cct ? this.state.fixVals.cct.initials : ""
        var newPartNumber = `${prefix}${channel}${lens}${intensity}${cct}`;
        this.setState({ partNumber : newPartNumber });
    }

    render() {
        return (
            <div>
                {
                    this.state.open ? 
                        <div className="fixture-type-form fixtype-container">
                            {/* <FixtureTypeHeader 
                                handleCollapse={this.handleCollapse} 
                                partNumber={this.state.partNumber} 
                                fixtureType={this.state.fixtureType} 
                                handleFixtureType={this.handleFixtureType}/> */}
                            <Title title="DEFINE TYPE" />
                            <FixtureType 
                                fixVals={this.state.fixVals}
                                handleSelect={this.handleSelect} />
                            <Title title="DEFINE RUNS" />
                            <ChannelLengthTable />
                        </div>
                        : <CollasedFixtureType 
                            fixtureType={this.state.fixtureType}
                            partNumber={this.state.partNumber} 
                            status={this.state.status} 
                            handleCollapse={this.handleCollapse} />
                }
            </div>
        )
    }
}
