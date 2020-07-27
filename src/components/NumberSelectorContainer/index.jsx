import React from "react";

import NumberSelector from "./NumberSelector";

import classNames from "./style.module.scss";

const NumberSelectorContainer = props => {
    return (
        <div className={classNames["number-selector-container"]}>
            <NumberSelector
                onSelectionChange={number => {
                    props.onSelectionChange(0, number);
                }}
            />
            <NumberSelector
                onSelectionChange={number => {
                    props.onSelectionChange(1, number);
                }}
            />
            <NumberSelector
                onSelectionChange={number => {
                    props.onSelectionChange(2, number);
                }}
            />
            <NumberSelector
                onSelectionChange={number => {
                    props.onSelectionChange(3, number);
                }}
            />
        </div>
    );
};

export default NumberSelectorContainer;
