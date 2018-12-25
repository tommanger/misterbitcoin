import React, { Component } from 'react'

import UserService from '../../services/UserService'

export default class HomePage extends Component {
    state = { user: null }

    componentDidMount() {
        const user = UserService.loadUser()
        this.setState({ user })
    }

    render() {
        const { user } = this.state
        return (
            <div>
                {
                user &&
                <div>
                    <h2>Hello {user.name}</h2>
                    <h4>Coins: {user.coins}</h4>
                    <h4>{user.moves}</h4>
                </div>
                }

            </div>
        )
    }
}