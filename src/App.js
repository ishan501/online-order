import React, {Component} from 'react'
import './App.css'
import './bootstrap.min.css'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from "./StepFour"

class App extends Component {
    constructor(props) {
        super(props)
        this.goNext = this.goNext.bind(this)
        this.goPrevious = this.goPrevious.bind(this)
        this.confirmOrder = this.confirmOrder.bind(this)
        this.validateStep = this.validateStep.bind(this)

        this.state = {
            currentStep: 1,
            meal: '',
            person: 1,
            resto: '',
            totalDishes: [{
                dish: "",
                quantity: 1
            }],
            formIsValid: false
        }
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleAddDish = () => {
        const item = {
            dish: "",
            quantity: 1
        }

        this.setState({
            totalDishes: [...this.state.totalDishes, item]
        })
    }

    handleRow = index => event => {
        const {name, value} = event.target
        const totalDishes = [...this.state.totalDishes];
        totalDishes[index][name] = value

        this.setState({
            totalDishes
        })
    }

    get previousBtn() {
        if (this.state.currentStep !== 1) {
            return (
                <button onClick={this.goPrevious} className="btn btn-warning">Previous</button>
            )
        }

        return null
    }

    get nextBtn() {
        if (this.state.currentStep !== 4) {
            return (
                <button onClick={this.goNext} className="btn btn-primary next">Next</button>
            )
        } else if (this.state.currentStep === 4) {
            return (
                <button onClick={this.confirmOrder} className="btn btn-success next">Confirm Order</button>
            )
        }

        return null
    }

    confirmOrder() {
        alert('Order confirmed, check your console!')
        console.log(this.state)
    }

    goNext() {
        let currentStep = this.state.currentStep

        this.validateStep(currentStep)

        if (!this.state.formIsValid) {
            alert('Please enter valid data')
            return
        }

        this.state.formIsValid = false

        currentStep = currentStep >= 4 ? 4 : currentStep + 1

        this.setState({
            currentStep: currentStep
        })
    }

    validateStep = (currentStep) => {
        switch (currentStep) {
            case 1:
                if(this.state.meal) this.state.formIsValid = true
                break
            case 2:
                if (this.state.resto) this.state.formIsValid = true
                break
            case 3:
                if (this.state.totalDishes[0].dish) this.state.formIsValid = true
                break
        }
    }

    goPrevious() {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1

        this.setState({
            currentStep: currentStep
        })

    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <b>Swaggy</b>, order food from your favourite restro!
                </header>
                <label>Step {this.state.currentStep}/4</label>
                <StepOne data={this.state} handleChange={this.handleChange}/>
                <StepTwo data={this.state} handleChange={this.handleChange}/>
                <StepThree data={this.state} handleAddDish={this.handleAddDish} handleRow={this.handleRow} removeRow={this.removeRow}/>
                <StepFour data={this.state}/>
                {this.previousBtn}
                {this.nextBtn}
            </div>
        )
    }
}

export default App;
