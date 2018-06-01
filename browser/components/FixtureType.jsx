import React from "react"
import FixtureTypeItem from "./FixtureTypeItem";

const fixOptions = {
    prefix: [
        { value: "SS" }
    ],
    channel: [
        { initials: "", value: "" },
        { initials: "E", value: "None" },
        { initials: "S", value: "Surface Mount" },
        { initials: "C", value: "Corner"}
    ],
    lens: [
        { initials: "", value: "" },
        { initials: "FM", value: "Flat Milky" },
        { initials: "FF", value: "Flat Frosted" },
    ],
    intensity: [
        { value: "" },
        { value: "2.5" },
        { value: "5.0" },
        { value: "10.0" },
    ],
    cct: [
        { initials: "", value: "" },
        { initials: "22", value: "2200K" },
        { initials: "27", value: "2700K" },
        { initials: "30", value: "3000K" },
        { initials: "35", value: "3500K" },
        { initials: "41", value: "4100K" },
        { initials: "55", value: "5500K" },
    ],
    powderCoating: [
        { value: "" },
        { value: "None" },
        { value: "Matte White" },
        { value: "Matte Black" },
        { value: "Custom" },
    ],
    dimming: [
        { value: "" },
        { value: "None" },
        { value: "0-10" },
        { value: "MLV" },
        { value: "DMX" },
    ]
}

export default class FixtureType extends React.Component {
    render() {
        return (
            <form className="fixture-form">
                <FixtureTypeItem 
                    title="Fixture prefix"
                    keyStr=""
                    values={fixOptions.prefix}/>
                <FixtureTypeItem
                    title="Channel"
                    keyStr="channel"
                    values={fixOptions.channel}
                    handleSelect={this.props.handleSelect}
                    defaultVal={this.props.fixVals && this.props.fixVals.channel ? this.props.fixVals.channel.value : ""} />
                <FixtureTypeItem 
                    title="Lens"
                    keyStr="lens"
                    values={fixOptions.lens}
                    handleSelect={this.props.handleSelect}
                    defaultVal={this.props.fixVals && this.props.fixVals.lens ? this.props.fixVals.lens.value : ""} />
                <FixtureTypeItem
                    title="Intensity"
                    keyStr="intensity"
                    values={fixOptions.intensity}
                    handleSelect={this.props.handleSelect}
                    defaultVal={this.props.fixVals && this.props.fixVals.intensity ? this.props.fixVals.intensity.value : ""} />
                <FixtureTypeItem 
                    title="CCT"
                    keyStr="cct"
                    values={fixOptions.cct}
                    handleSelect={this.props.handleSelect}
                    defaultVal={this.props.fixVals && this.props.fixVals.cct ? this.props.fixVals.cct.value : ""} />
                <FixtureTypeItem 
                    title="Powder coating"
                    keyStr="powderCoating"
                    values={fixOptions.powderCoating}
                    handleSelect={this.props.handleSelect}
                    defaultVal={this.props.fixVals && this.props.fixVals.powderCoating ? this.props.fixVals.powderCoating.value : ""} />
                <FixtureTypeItem 
                    title="Control / Dimming"
                    keyStr="dimming"
                    values={fixOptions.dimming}
                    handleSelect={this.props.handleSelect}
                    defaultVal={this.props.fixVals && this.props.fixVals.dimming ? this.props.fixVals.dimming.value : ""} />
            </form>
        )
    }
}
    