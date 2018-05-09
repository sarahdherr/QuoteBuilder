import React from "react"

const fixOptions = {
    prefix: [
        { value: "SS" }
    ],
    channel: [
        { initials: "E", value: "None"},
        { initials: "S", value: "Surface Mount"},
        { initials: "C", value: "Corner"}
    ],
    lens: [
        { initials: "FM", value: "Flat Milky"},
        { initials: "FF", value: "Flat Frosted"},
    ],
    intensity: [
        { value: "2.5"},
        { value: "5.0"},
        { value: "10.0"},
    ],
    cct: [
        { initials: "22", value: "2200K"},
        { initials: "27", value: "2700K"},
        { initials: "30", value: "3000K"},
        { initials: "35", value: "3500K"},
        { initials: "41", value: "4100K"},
        { initials: "55", value: "5500K"},
    ]
}

class FixtureType extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            partNumber: ""
        }
    }

    handleSelect(name, evt) {
        var stateObj = {}
        stateObj[name] = { value: evt.target.value, initials: evt.target.value.split(" - ")[0].split(".")[0] }
        this.setState(stateObj, this.calculatePartNumber)
    }

    calculatePartNumber() {
        var prefix = this.state.prefix ? this.state.prefix.initials : ""
        var channel = this.state.channel ? this.state.channel.initials : ""
        var lens = this.state.lens ? this.state.lens.initials : ""
        var intensity = this.state.intensity ? this.state.intensity.initials : ""
        var cct = this.state.cct ? this.state.cct.initials : ""
        var newPartNumber = `${prefix}${channel}${lens}${intensity}${cct}`;
        this.setState({ partNumber : newPartNumber }, () => console.log(this.state))
    }

    render() {
        return (
            <div className="fixture-type-form fixtype-container">
                <p>Define your fixture type</p>
                <form>
                    Fixture prefix:
                    <select onChange={(e) => this.handleSelect("prefix", e)}>
                        <option></option>
                        {
                            fixOptions.prefix.map(el => 
                                <option key={el.value}>{el.value}</option>
                            )
                        }
                    </select>
                    Channel:
                    <select onChange={(e) => this.handleSelect("channel", e)}>
                        <option></option>
                        {
                            fixOptions.channel.map(chan =>
                                <option key={chan.initials}>{chan.initials} - {chan.value}</option>
                            )
                        }
                    </select>
                    Lens:
                    <select onChange={(e) => this.handleSelect("lens", e)}>
                        <option></option>
                        {
                            fixOptions.lens.map(len =>
                                <option key={len.initials}>{len.initials} - {len.value}</option>
                            )
                        }
                    </select>
                    Intesity:
                    <select onChange={(e) => this.handleSelect("intensity", e)}>
                        <option></option>
                        {
                            fixOptions.intensity.map(intense =>
                                <option key={intense.value}>{intense.value}</option>
                            )
                        }
                    </select>
                    CCT:
                    <select onChange={(e) => this.handleSelect("cct", e)}>
                        <option></option>
                        {
                            fixOptions.cct.map(color =>
                                <option key={color.initials}>{color.initials} - {color.value}</option>
                            )
                        }
                    </select>
                </form>
                {/*<p className="part-number">Part Number: {this.state.partNumber}</p>*/}
            </div>
        )
    }
}

export default FixtureType
    