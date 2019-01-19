import React from 'react'

import classes from './Burguer.css'
import BurguerIngredient from './BurgerIngredients/BurgerIngredient'

const burguer = (props) => {
    let transformIngredients = Object.keys(props.ingredients).map(key => {
        return [...Array(props.ingredients[key])].map((_, i) => {
            return (<BurguerIngredient key={key + i} type={key} ></BurguerIngredient>)
        });
    }).reduce((prev, next) => {
        return prev.concat(next)
    }, []);
    if (transformIngredients.length === 0) {
        transformIngredients = (<p> Please add Ingredients</p>)
    }
    return (
    <div className={classes.Burger}>
        <BurguerIngredient type="bread-top"></BurguerIngredient>
        {transformIngredients}
        <BurguerIngredient type="bread-bottom"></BurguerIngredient>
    </div>)
}

export default burguer