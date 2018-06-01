import React from "react"

export default (props) =>
    <div className="final-buttons-container">
        <button className="final-buttons" onClick={props.handleAdd}>Add Another Type</button>
        <button className="final-buttons">Finish</button>
    </div>