import React from "react";

import Title from "../components/Title";
import RunTable from "../components/RunTable";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <Title title="DEFINE RUNS" />
                <RunTable />
            </div>
        );
    }
}