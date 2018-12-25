import React, { Component } from 'react'
import ContactService from '../../services/ContactService'
import { Link } from 'react-router-dom';
import TransferFund from '../../cmps/TransferFund/TransferFund'
import UserService from '../../services/UserService'
import MoveList from '../../cmps/MovesList/MovesList'

export default class ContactDetailsPage extends Component {
    state = { contact: null }
    async componentDidMount() {
        const { id } = this.props.match.params;
        const contact = await ContactService.getContactById(id)
        this.setState({ contact })
    }
    TransferCoin(ev){
        UserService.addMove(ev,this.state.contact)
    }
    getMoves(){
        if(!this.state.contact) return []
        return UserService.getMoves(this.state.contact._id)
    }
    render() {
        const { contact } = this.state
        const moves = this.getMoves()
        return (
            <div>
                {contact &&
                    <div>
                        <h2>{contact.name}</h2>
                        <h4>{contact.email}</h4>
                        <h4>{contact.phone}</h4>
                        <TransferFund onTransferCoin={this.TransferCoin.bind(this)} contact={contact}/>
                        <MoveList moves={moves}/>
                        <Link to="/contact">
                            <button onClick={this.props.onClose}>back to list</button>
                        </Link>
                        <Link to={`/contact/edit/${contact._id}`}>
                            <button>Edit contact</button>
                        </Link>
                    </div>
                }
            </div>
        )
    }
}

