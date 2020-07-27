import React from "react";

import classNames from "./style.scss";

const TargetNumber = props => {
    return (
        <div className={classNames["target-number-container"]}>
            <p className={classNames.label}>Target:</p>
            <span className={classNames["target-number"]}>
                {props.targetNumber}
            </span>
        </div>
    );
};

export default TargetNumber;
