import React, {Component} from 'react'
import dishes from './dishes.json'

class StepTwo extends Component {
    render() {
        let {meal, resto, currentStep} = this.props.data

        if (currentStep !== 2){
            return null
        }

        function getUnique(arr) {
            let unique = []

            arr.forEach(element => {
                if(!unique.includes(element.restaurant)) {
                    unique.push(element.restaurant)
                }
            });

            return unique
        }

        let availableRestaurants = getUnique(dishes.dishes.filter(restaurant => restaurant.availableMeals.includes(meal)))

        return (
            <div className="section">
                <div className="form-group col-md-6 offset-3">
                    <label>Select Restaurant</label>
                    {<select className="form-control" name="resto" value={resto} onChange={this.props.handleChange}>
                        <option>--Select--</option>
                        {
                            availableRestaurants.map((key, value) => <option key={value} value={key}>{key}</option>)
                        }
                    </select>}
                </div>
            </div>
        )
    }
}

export default StepTwo