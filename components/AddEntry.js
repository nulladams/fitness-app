import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { getMetricDataInfo } from '../utils/helpers'

export default class AddEntry extends Component {
    state = {
        run: 0,
        bike: 0,
        swim: 0,
        sleep: 0,
        eat: 0,
    }
    increment = (metric) => {
        const { max, step } = getMetricDataInfo(metric)

        this.setState((currState) => {
            const count = currState[metric] - step

            return {
                ...currState,
                [metric]: count > max ? max : count
            }
        })
    }
    decrement = (metric) => {
        this.setState((currState) => {
            const count = currState[metric] - step

            return {
                ...currState,
                [metric]: count < 0 ? 0 : count
            }
        })
    }
    slide = (metric, value) => {
        this.setState(() => ({
            [metric]: value
        }))
    }
    render() {
        return (
            <View>
                {getMetricDataInfo('bike').getIcon()}
            </View>
        )
    }
}