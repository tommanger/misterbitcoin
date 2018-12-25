import React, { Component } from 'react';
import UserService from '../../services/UserService'


class Signup extends Component {
    state = {
        user: ''
    }

    saveUser(ev){
        let user = ev.target.value
        this.setState({user})
    }

    signupUser(ev){
        ev.preventDefault()
        const user = UserService.signup(this.state.user)
        this.props.setUser(user)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <form onSubmit={this.signupUser.bind(this)}>
                    <input onChange={this.saveUser.bind(this)} type="text" placeholder="Enter your name" />
                    <button>Signup</button>
                </form>
            </div>
        )
    }
}

export default Signup