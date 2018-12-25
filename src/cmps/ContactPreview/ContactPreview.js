import React from 'react'


const ContactPreview = ({ contact }) => (
    <div className="contact-prev">
        <span>{contact.name}</span>
        <img className="img-contact" src={`https://robohash.org/${contact.name}.png`}></img>
    </div >
)

export default ContactPreview