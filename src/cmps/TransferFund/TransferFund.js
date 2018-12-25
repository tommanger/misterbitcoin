import React from 'react'


const TransferFund = ({ contact, onTransferCoin }) => {
    let amount = 0;
    return (
        <div>
            <h2>Transfer coins to {contact.name}</h2>
            Amount: <input name="amount" type="text" onChange={ev => amount = ev.target.value} />
            <button onClick={() => onTransferCoin(amount)}>Transfer</button>
        </div>
    )
}

export default TransferFund