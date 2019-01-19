import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = (props) => {
    const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Meat', type: 'meat'},
        {label: 'Cheese', type: 'cheese'}
    ]
    return (<div className={classes.BuildControls}>
        <p>Total Price: {props.burgerPrice.toFixed(2)}</p>
        {controls.map((control) => (
            <BuildControl 
              label={control.label} 
              key={control.label}
              added={() => props.ingredientAdded(control.type)}
              deleted={() => props.ingredientRemoved(control.type)}
              >
            </BuildControl>
        ))}
    </div>)
}

export default buildControls