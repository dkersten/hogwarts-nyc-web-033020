import React, { Component } from 'react';
import PigDetails from './PigDetails'

export default class PigCard extends Component {

    state = {
        hidden: true
    }

    showDetails = (hidden) => {
        this.setState({
            hidden: false
        })
    }

    render() {

        const { name } = this.props
        let imgUrl = name.toLowerCase()
        let imgUrlUnderscore = imgUrl.split(' ').join('_')
        let pigImg = require(`../hog-imgs/${imgUrlUnderscore}.jpg`)

        return (
            
            <div onClick={this.showDetails} className="ui four wide column card">
                <h2>Name: {name}</h2>
                <img className="img" src={pigImg} alt=""/>
                <PigDetails hidden={this.state.hidden} pig={this.props} />
            </div>
        )
    }
}