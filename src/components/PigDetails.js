import React, { Component } from 'react'

export default class PigDetails extends Component {
    render() {

        const {specialty, greased, weight, medal} = this.props.pig
        console.log(this.props.hidden)

        let details;

        if (this.props.hidden === false) {
            details = `Specialty:  ${specialty}
            Greased: ${greased ? "True" : "False"}
            Weight: ${weight}
            Highest Medal Achieved ${medal}`
        }

        return (
            <div className="pig-info">
                {details}
            </div>
        )
    }
}