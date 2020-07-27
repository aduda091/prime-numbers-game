import React, { useState } from "react";

import TargetNumber from "../TargetNumber";
import CalculatedNumber from "../CalculatedNumber";
import NumberSelectorContainer from "../NumberSelectorContainer";

import randomNumber from "../../util/randomNumberGenerator";

import classNames from "./style.module.scss";

const AppContainer = () => {
    const [target, setTarget] = useState(randomNumber());
    const [selectedNumbers, setSelectedNumbers] = useState([1, 1, 1, 1]);
    const [isCorrect, setIsCorrect] = useState(false);

    const onSelectionChange = (index, number) => {
        const numbers = [...selectedNumbers];
        numbers[index] = number;
        setSelectedNumbers(numbers);
    };

    const onCalculate = number => {
        setIsCorrect(number === target);
    };

    const restart = () => {
        location.reload();
    };

    return (
        <main className={classNames["app-container"]}>
            <h1>Prime Number multiplication game</h1>
            <TargetNumber targetNumber={target} />
            <CalculatedNumber
                selectedNumbers={selectedNumbers}
                onCalculate={onCalculate}
                correct={isCorrect}
            />
            <NumberSelectorContainer onSelectionChange={onSelectionChange} />

            {isCorrect && (
                <div className={classNames["win-message"]}>You win!</div>
            )}

            <div className={classNames.restart} onClick={restart}>
                Restart
            </div>
        </main>
    );
};

export default AppContainer;
