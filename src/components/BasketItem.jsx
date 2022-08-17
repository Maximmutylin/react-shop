import React from 'react'

const BasketItem = (props) => {

    const {
        id,
        name,
        price,
        quanity,

    } = props

    return (
        <li className="collection-item">
            <div className='basket-left'>
                <span>{name}</span>
                <div onClick={() => props.removeQuantity(id)} className="material-icons arrow-basket">arrow_downward</div> x{quanity}
                <div onClick={() => props.addQuantity(id)} className="material-icons arrow-basket">arrow_upward</div> = {price * quanity}$
            </div>
            <span className="secondary-content">
                <button className="material-icons" onClick={() => props.removeFromBasket(id)}>delete</button>
            </span>
        </li>

    )
}

export default BasketItem