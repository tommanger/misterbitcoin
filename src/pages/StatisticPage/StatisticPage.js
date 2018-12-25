import React, { Component } from 'react'

import BitcoinService from '../../services/BitcoinService'
import Chart from '../../cmps/Chart/Chart'

export default class StatisticPage extends Component {
    state = { rate: null, chart: null }

    async componentDidMount() {
        const rate = await BitcoinService.getRate(10)
        this.setState({rate})
        const chart = await BitcoinService.getMarketPrice()
        console.log(chart)
        
        this.setState({chart})
    }

    render() {
        const {rate, chart} = this.state

        return (
            <div>
                {
                    rate &&
                    <h4>BTC: {rate}</h4>
                }
                {
                    chart&&
                    <Chart chart={chart}/>
                }
                
            </div>
        )
    }
}