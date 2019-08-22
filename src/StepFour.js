import React, {Component} from 'react'

class StepFour extends Component {
    render() {
        let {meal, resto, currentStep, totalDishes, person} = this.props.data

        if (currentStep !== 4) {
            return null
        }

        return (
            <div className="section">
                <div className="form-group col-md-6 offset-3">
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Meal: </td>
                            <td>{meal}</td>
                        </tr>
                        <tr>
                            <td>People: </td>
                            <td>{person}</td>
                        </tr>
                        <tr>
                            <td>Restaurant: </td>
                            <td>{resto}</td>
                        </tr>
                        <tr>
                            <td>Dishes: </td>
                        </tr>
                    </tbody>
                </table>
                <ul className="list-group">
                    {totalDishes.map((dish, index) => {
                        return (
                            <li className="list-group-item" key={index}>{dish.dish + ' - ' + dish.quantity}</li>
                        )
                    })}
                </ul>
            </div>
            </div>
        )
    }
}

export default StepFour