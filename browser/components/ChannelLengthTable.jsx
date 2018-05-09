import React from "react"
import ChannelLength from "./ChannelLength"

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [true, true, true]
        }
        this.handleAddAnother = this.handleAddAnother.bind(this)
    }

    handleAddAnother(){
        var newRowNumber = this.state.rows.concat([ true ]);
        this.setState({ rows: newRowNumber })
    }

    render() {
        console.log(this.state)
        return (
            <div className="fixtype-container">
                <p>Channels</p>
                <table className="channeltbl">
                    <thead>
                        <tr className="channeltbl-header">
                            <th className="channeltbl-header-cell">Quantity</th>
                            <th className="channeltbl-header-cell">Length (feet)</th>
                            <th className="channeltbl-header-cell">Length (inches)</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.rows.map((row, idx) => 
                            <ChannelLength key={idx}/>
                        )
                    }
                    </tbody>
                </table>
                <div className="channeltbl-btn">
                    <button className="channeltbl-add-btn" onClick={this.handleAddAnother}>Add another channel</button>
                </div>
            </div>
        )
    }
}