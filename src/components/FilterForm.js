import React, { Component } from 'react'

export default class FilterForm extends Component {

    handleChange = (e) => {
        if (e.target.value === "yes") {
            console.log("filter")
        } else {
            console.log("not filtered")
        }
    }

    render() {

        return (
            
            <div>
                <form>
                <label>Filter by Greased? </label>
                <select onChange={this.handleChange}>
                    <option></option>
                    <option value="yes">Yes</option>
                    <option value="No">No</option>
                </select>
                </form>
            </div>
        )
    }
}