import React, { Component } from 'react'
import ContactService from '../../services/ContactService'
import { Link } from 'react-router-dom';

export default class ContactEditPage extends Component {
    state = {
        contact: {
            name: '',
            email: '',
            phone: ''
        }
    }
    async componentDidMount() {
        const { id } = this.props.match.params
        if (id) {
            const contact = await ContactService.getContactById(id)
            this.setState({ contact })
        }
    }

    changeValue(ev) {
        let value = ev.target.value
        let name = ev.target.placeholder
        this.setState({ contact: { ...this.state.contact, [name]: value } })
    }
    saveContact(ev) {
        ev.preventDefault()
        ContactService.saveContact(this.state.contact)
        this.props.history.push('/contactpage')
    }
    deleteContact() {
        ContactService.deleteContact(this.state.contact._id)
        this.props.history.push('/contactpage')

    }
    render() {
        const { contact } = this.state
        return (
            <div>
                <form onSubmit={this.saveContact.bind(this)}>
                    <input type="text" onChange={this.changeValue.bind(this)} value={contact.name} placeholder="name" />
                    <input type="text" onChange={this.changeValue.bind(this)} value={contact.email} placeholder="email" />
                    <input type="text" onChange={this.changeValue.bind(this)} value={contact.phone} placeholder="phone" />
                    <button>{contact._id ? 'save' : 'add'}</button>
                </form>
                <Link to={`/contact/${contact._id || ''}`}>
                    <button>Back</button>
                </Link>
                {
                    contact._id &&
                    <button onClick={this.deleteContact.bind(this)}>Delete</button>
                }
            </div>
        )
    }
}