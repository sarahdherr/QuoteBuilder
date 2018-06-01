import React from "react"
import ToggleButton from 'react-toggle-button'

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lengthFt: 0,
            lengthIn: 0,
            quantity: 0,
            value: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    handleChange(evt) {
        var stateObj = {}
        stateObj[evt.target.name] = Number(evt.target.value) * 1
        this.setState(stateObj)
    }

    handleKeyDown(evt, name) {
        var key = evt.key
        var stateKey = evt.target.name
        if (key === "ArrowUp" || key === "ArrowDown") {
            var stateObj = {}
            var increment = key === "ArrowUp" 
                ? 1 
                : (this.state[stateKey] <= 0 ? 0 : -1);
            stateObj[stateKey] = this.state[stateKey] + increment
            this.setState(stateObj)
        }
    }

    render() {
        return (
            <tr>
                <td className="channeltbl-body">
                    <input name="quantity" className="channeltbl-body-input"
                        value={this.state.quantity} 
                        onChange={this.handleChange} 
                        onKeyDown={this.handleKeyDown}/>
                </td>
                <td className="channeltbl-body">
                    <input name="lengthFt" className="channeltbl-body-input"
                        value={this.state.lengthFt} 
                        onChange={this.handleChange} 
                        onKeyDown={this.handleKeyDown}/>
                </td>
                <td className="channeltbl-body">
                    <input 
                        name="lengthIn" 
                        className="channeltbl-body-input"
                        value={this.state.lengthIn} 
                        onChange={this.handleChange} 
                        onKeyDown={this.handleKeyDown}/>
                </td>
                <td className="channeltbl-body">
                    <input 
                        className="channeltbl-body-input"
                        value="100" 
                        onChange={this.handleChange} 
                        onKeyDown={this.handleKeyDown}/>
                </td>
                <td className="channeltbl-body channeltbl-toggle">
                    {/* <label className="switch channeltbl-toggle-icon">
                        <input type="checkbox" />
                        <span className="slider round" />
                    </label>
                    <div>
                    <ToggleButton
                        value={this.state.value || false}
                        onToggle={(value) => {
                            this.setState({
                            value: !value,
                            })
                        }} />
                    </div> */}
                    <label>
                        <input type="checkbox" />
                    </label>
                </td>
            </tr>
        )
    }
}