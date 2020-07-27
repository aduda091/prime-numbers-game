import React, { useState } from "react";

import PrimeNumber from "./PrimeNumber";

import classNames from "./style.module.scss";

const NumberSelector = props => {
    const [selectedNumber, setSelectedNumber] = useState(1);

    const updateSelection = number => {
        setSelectedNumber(number);
        props.onSelectionChange(number);
    };

    const primeNumbers = [1, 2, 3, 5, 7];
    const renderPrimeNumbers = primeNumbers.map(number => {
        return (
            <PrimeNumber
                key={number}
                value={number}
                selected={selectedNumber === number}
                onClick={() => {
                    updateSelection(number);
                }}
            />
        );
    });

    return (
        <div className={classNames["number-selector"]}>
            {renderPrimeNumbers}
        </div>
    );
};

export default NumberSelector;
