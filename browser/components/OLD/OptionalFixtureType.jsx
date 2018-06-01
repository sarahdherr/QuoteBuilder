import React from "react"

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(name, evt) {
        var stateObj = {}
        stateObj[name] = evt.target.value
        this.setState(stateObj)
    }

    render() {
        return (
            <div className="fixtype-container">
                <p><em>Optional</em></p>
                <form>
                    Powder coating:
                    <select onChange={(e) => this.handleSelect("powder-coating", e)}>
                        <option></option>
                        <option>None</option>
                        <option>Matte White</option>
                        <option>Matte Black</option>
                        <option>Custom</option>
                    </select>
                    Control / Dimming:
                    <select onChange={(e) => this.handleSelect("dimming", e)}>
                        <option></option>
                        <option>None</option>
                        <option>0-10</option>
                        <option>MLV</option>
                        <option>DMX</option>
                    </select>
                </form>
            </div>
        )
    }
}