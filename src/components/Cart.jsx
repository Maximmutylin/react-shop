import React from 'react'

const Cart = (props) => {

    const { quanity = 0 } = props;

    return (
        <div className='cart' onClick={() => props.handleBasketShow()}>
            <div className=' large material-icons'>shopping_cart</div>
            {
                quanity ? <span className='cart-quanity'>{quanity}</span> : null
            }


        </div>
    )
}

export default Cart