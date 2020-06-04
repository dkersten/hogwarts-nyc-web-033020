import React, {Component} from 'react'
import PigCard from './PigCard'

export default class PigContainer extends Component {
    render() {
        return (
            <div className="ui grid container">
                {
                    this.props.pigs[0].map((pig, index) => <PigCard key={index} {...pig} />)
                }
            </div>
        )
    }
}