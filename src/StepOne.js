import React, {Component} from 'react'

class StepOne extends Component {
    render() {
        let {meal, person, currentStep} = this.props.data

        if (currentStep !== 1){
            return null
        }

        return (
            <div className="section">
                <div className="form-group col-md-6 offset-3">
                    <label>Select Meal</label>
                    <select className="form-control" name="meal" value={meal} onChange={this.props.handleChange}>
                        <option>--Select--</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>
                </div>
                <div className="form-group col-md-6 offset-3">
                    <label>Enter number of people</label>
                    <input className="form-control" name="person" type="number" min={1} value={person} onChange={this.props.handleChange} />
                </div>
            </div>
        )
    }
}

export default StepOne