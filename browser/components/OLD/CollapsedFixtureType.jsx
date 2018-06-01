import React from "react";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.handleArrowClick = this.handleArrowClick.bind(this);
    }

    handleArrowClick(evt) {
        evt.preventDefault();
        this.props.handleCollapse();
    }

    render() {
        return (
            <div className="collapsed-container">
                <div className="collapsed-info">
                    <div className="collapsed-partnum">
                        <p className="collapsed-partnum-text">Fixture type: {this.props.fixtureType}</p>
                    </div>
                    <div className="collapsed-partnum">
                        <p className="collapsed-partnum-text">Part number: {this.props.partNumber}</p>
                    </div>
                    <div className="collapsed-status">
                        <p className="collapsed-status-text">Status: {this.props.status}</p>
                    </div>
                </div>
                <div className="collapsed-arrows">
                    <span className="fa fa-arrows-v collapsed-arrows-icon" onClick={this.handleArrowClick}/>
                </div>
            </div>
        )
    }
}