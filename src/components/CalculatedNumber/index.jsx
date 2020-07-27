import React from "react";

import classNames from "./style.module.scss";

const CalculatedNumber = props => {
    const { selectedNumbers, onCalculate, correct } = props;

    const calculateNumber = () => {
        const calculatedNumber = selectedNumbers.reduce((prev, next) => {
            return prev * next;
        }, 1);

        onCalculate(calculatedNumber);

        return calculatedNumber;
    };

    const classes = [classNames["calculated-number"]];
    if (correct) {
        classes.push(classNames.correct);
    }

    return (
        <div className={classNames["calculated-number-container"]}>
            <p className={classNames.label}>Current:</p>
            <span className={classes.join(" ")}>{calculateNumber()}</span>
        </div>
    );
};

export default CalculatedNumber;
