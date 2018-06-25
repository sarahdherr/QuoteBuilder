import React from "react";

import DefineJob from "./DefineJob";
import DefineType from "./DefineType";
import DefineRuns from "./DefineRuns";
import FinalButtons from "../components/FinalButtons";
import LoginModal from "./LoginModal";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            job: {},
            fixtureType: {
                partNumber : "",
                vals: {},
                runs: []
            },
            showLogin: false
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleJobInfo = this.handleJobInfo.bind(this);
        this.handleFixtureInfo = this.handleFixtureInfo.bind(this);
        this.login = this.login.bind(this);
    }

    handleJobInfo(jobState) {
        this.setState({job: jobState})
    }

    handleFixtureInfo(fixtureState) {
        var fixture = this.state.fixtureType;
        fixture.vals = fixtureState;

        this.setState({fixtureType: fixture});
    }

    handleRunsInfo(runState) {
        var fixture = this.state.fixtureType;
        fixture.runs = runState;

        this.setState({fixtureType: fixture});
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

    login() {
        console.log("LOGIN")
        this.setState({ showLogin: true });
    }

    render() {
        return (
            <div>
                <button onClick={this.login}>Login</button>
                { this.state.showLogin ? <LoginModal /> : null }
                <DefineJob sendJobInfo={this.handleJobInfo}/>
                <div className="define-container">
                    <DefineType sendFixtureInfo={this.handleFixtureInfo}/>
                    <DefineRuns fixture={this.state.fixtureType.vals}/>
                </div>
                <FinalButtons handleAdd={this.handleAdd} />
            </div>
        )
    }
}