import React from "react";

import DefineJob from "./DefineJob";
import DefineType from "./DefineType";
import DefineRuns from "./DefineRuns";
import FinalButtons from "../components/FinalButtons";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fixtureTypes: [ 
                {
                    id: 0,
                    partNumber : "",
                    open: true
                } 
            ]
        };
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(evt) {
        evt.preventDefault();
        var newFixTypes = this.state.fixtureTypes.map(ft => {
            ft.open = false;
            return ft;
        });
        var newType = { id: this.state.fixtureTypes.length ,partNumber: "", open: true };
        newFixTypes.push(newType);
        this.setState({ fixtureTypes: newFixTypes });
    }

    render() {
        return (
            <div>
                <DefineJob />
                {
                    this.state.fixtureTypes.map(ft =>
                        <div key={ft.id} className="define-container">
                            <DefineType />
                            <DefineRuns />
                        </div>
                    )
                }
                <FinalButtons handleAdd={this.handleAdd} />
            </div>
        )
    }
}