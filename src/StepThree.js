import React, {Component} from 'react'
import dishes from './dishes'

class StepThree extends Component {
    render() {
        let {meal, resto, currentStep} = this.props.data

        if (currentStep !== 3) {
            return null
        }

        let availableDishes = dishes.dishes.filter(restaurant => restaurant.availableMeals.includes(meal) && restaurant.restaurant === resto)

        return (
            <div className="section">
                <div className="form-group col-md-6 offset-4">
                <table id="orderTable">
                    <thead>
                        <tr>
                            <td>Select Dish</td>
                            <td>Enter Quantity</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.totalDishes.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <select className="form-control" name="dish" id={`select-${index}`} value={this.props.data.totalDishes[index].dish} onChange={this.props.handleRow(index)}>
                                        <option>--Select--</option>
                                        {
                                            availableDishes.map((key) => <option key={key.id} value={key.name}>{key.name}</option>)
                                        }
                                    </select>
                                </td>
                                <td>
                                    <input className="form-control" name="quantity" type="number" value={this.props.data.totalDishes[index].quantity} onChange={this.props.handleRow(index)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="btn btn-success offset-1" onClick={this.props.handleAddDish}>Add</button>
            </div>
            </div>
        )
    }
}

export default StepThree