import React from 'react'
import BasketItem from './BasketItem'

const Basket = (props) => {
    const { order = [], } = props

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quanity
    }, 0)

    return (
        <ul className="collection basket">
            <li className="collection-item active  purple lighten-1">
                <button
                    onClick={() => props.handleBasketShow()}
                    className="close-basket material-icons">
                    <span>close</span>
                </button>
                <span>Корзина</span>
            </li>
            {
                order.length
                    ? order.map(item => {
                        return (
                            <BasketItem
                                removeFromBasket={props.removeFromBasket}
                                addQuantity={props.addQuantity}
                                removeQuantity={props.removeQuantity}
                                key={item.id}
                                {...item}
                            />
                        )
                    })
                    : <li className="collection-item ">Корзина пуста</li>

            }
            <li className="collection-item active  purple lighten-1">
                <span> Общая стоимость: {totalPrice}$ </span>
                <button className="basket-btn">Оформить заказ</button>
            </li>
        </ul>
    )
}

export default Basket