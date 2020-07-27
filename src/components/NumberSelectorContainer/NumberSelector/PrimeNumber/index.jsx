import React from "react";

import classNames from "./style.scss";

const PrimeNumber = props => {
    const classes = [classNames.number];
    if (props.selected) {
        classes.push(classNames.selected);
    }
    return (
        <div className={classes.join(" ")} onClick={props.onClick}>
            {props.value}
        </div>
    );
};

export default PrimeNumber;
