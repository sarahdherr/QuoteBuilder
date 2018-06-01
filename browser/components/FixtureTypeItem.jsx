import React from "react";

export default (props) =>
    <div className="fixture-form-cell">
        <p className="fixture-form-label">{props.title}:</p>
        <select 
            className="fixture-form-select" 
            onChange={(e) => props.handleSelect(props.keyStr, e)}
            defaultValue={props.defaultVal}>
            {
                props.values.map(val =>
                    <option key={val.value}>{ val.initials ? `${val.initials} - ${val.value}` : val.value }</option>
                )
            }
        </select>
    </div>