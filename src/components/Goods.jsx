import React from 'react'
import Product from './Product'

const Goods = (props) => {

    const data = props.data;
    return (
        <div className='goods'>
            {
                data.length ?
                    data.map(data => (
                        <Product

                            key={data.id}
                            {...data}
                            addToBasket = {props.addToBasket}
                            
                        />
                    ))
                    : <h3>Ничего не найдено</h3>
                    
            }
        </div>
    )
}

export default Goods