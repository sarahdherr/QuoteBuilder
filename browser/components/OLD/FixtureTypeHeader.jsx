import React from "react";

export default (props) =>
    <div>
        <div className="header">
            <div className="header-left">
                <div className="type-container">
                    <p className="type-label">Fixture type</p>
                    <input 
                        className="type-input" 
                        value={props.fixtureType}
                        onChange={props.handleFixtureType} />
                </div>
                <div className="type-container">
                    <p className="type-label">Part number</p>
                    <input className="type-input" 
                        value={props.partNumber} />
                </div>
            </div>
            <div className="open-arrows">
                <span className="fa fa-arrows-v collapsed-arrows-icon" onClick={props.handleCollapse}/>
            </div>
        </div>
        <div>
            <h3 className="define-title">
                Define Fixture Type
            </h3>
        </div>
    </div>