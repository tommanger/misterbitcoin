import React from 'react'
import ContactPreview from '../../cmps/ContactPreview/ContactPreview'
import { Link } from 'react-router-dom';


const ContactList = ({ contacts, onSetSelected }) => (
    <div>
        <ul>
            {
                contacts.map(contact =>
                    <Link to={`/contact/${contact._id}`} key={contact._id}>
                        <li  onClick={onSetSelected.bind(null, contact)} >
                            <ContactPreview contact={contact}/>
                        </li>
                    </Link>
                )}

        </ul>
    </div>
)

export default ContactList