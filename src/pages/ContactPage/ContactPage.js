import React, { Component } from 'react'

import ContactService from '../../services/ContactService'
import ContactList from '../../cmps/ContactList/ContactList'
import { Link } from 'react-router-dom';

export default class ContactPage extends Component {
    state = { contacts: [] }

    async componentDidMount() {
        const contacts = await ContactService.getContacts()
        this.setState({ contacts })
    }
    setSelected(selectedContact) {
        this.setState({ selectedContact })
    }
    async setFilter(ev) {
        const filteredContacts = await ContactService.getContacts({ term: ev.target.value })
        this.setState({ contacts: filteredContacts })
    }
    render() {
        const { contacts } = this.state
        return (
            <div>
                <div>
                    <Link to="/contact/edit">
                        <button>Add Contact</button>
                    </Link>
                    <input placeholder="filterd list" id="inputFilter" onChange={this.setFilter.bind(this)} type="text" />
                    <ContactList contacts={contacts} onSetSelected={this.setSelected.bind(this)} />
                </div>
            </div>
        )
    }
}