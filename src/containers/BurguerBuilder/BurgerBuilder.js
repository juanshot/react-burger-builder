import React, {Component} from 'react'
import Aux from './../../components/hoc/Aux'
import Burger from './../../components/Burger/Burger'
import BurgerControls from './../../components/Burger/BuildControls/BuildControls'
import ProductsPrices from './../../data/ProductsPrices'

class BurgerBuilder extends Component {
    // constructor (props) {
    //     super(props);
    //     this.state = {}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0
    }
    render () {
        return (
        <Aux>
            <Burger ingredients={this.state.ingredients}></Burger>
            <BurgerControls 
              burgerPrice={this.state.totalPrice} 
              ingredientAdded={ this.addIngredientHandler } 
              ingredientRemoved={ this.removeIngredientHandler }>
            </BurgerControls>
        </Aux>)
    }
    addIngredientHandler = (type) => {
        this.setState((state) => {
            state.ingredients[type] = state.ingredients[type] + 1 
            state.totalPrice = state.totalPrice + ProductsPrices[type]
            return {...state}
        })
    }

    removeIngredientHandler = (type) => {
        this.setState((state) => {
            state.ingredients[type] = state.ingredients[type] === 0 ? state.ingredients[type] : state.ingredients[type] - 1 
            state.totalPrice = state.totalPrice - ProductsPrices[type]
            return {...state}
        })
    }
}

export default BurgerBuilder