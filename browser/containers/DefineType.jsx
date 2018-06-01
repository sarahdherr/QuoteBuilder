import React from "react";

import Title from "../components/Title";
import FixtureType from "../components/FixtureType";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            partNumber: "",
            fixtureVals: {
                prefix: {value: "SS", initials: "SS"}
            }
        }
        this.handleSelect = this.handleSelect.bind(this);
        this.calculatePartNumber = this.calculatePartNumber.bind(this);
    }

    handleSelect(name, evt) {
        evt.preventDefault();
        let val = evt.target.value;
        let stateObj = this.state.fixVals;
        stateObj[name] = { value: val, initials: val.split(" - ")[0].split(".")[0] }
        this.setState({ fixtureVals: stateObj }, this.calculatePartNumber)
    }

    calculatePartNumber() {
        var prefix = this.state.fixtureVals.prefix ? this.state.fixtureVals.prefix.initials : ""
        var channel = this.state.fixtureVals.channel ? this.state.fixtureVals.channel.initials : ""
        var lens = this.state.fixtureVals.lens ? this.state.fixtureVals.lens.initials : ""
        var intensity = this.state.fixtureVals.intensity ? this.state.fixtureVals.intensity.initials : ""
        var cct = this.state.fixtureVals.cct ? this.state.fixtureVals.cct.initials : ""
        var newPartNumber = `${prefix}${channel}${lens}${intensity}${cct}`;
        this.setState({ partNumber : newPartNumber });
    }

    render() {
        return (
            <div>
                <Title title="DEFINE TYPE" />
                <FixtureType 
                    fixVals={this.state.fixtureVals}
                    handleSelect={this.handleSelect} />
            </div>
        )
    }
}