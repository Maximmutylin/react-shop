import React from 'react'

const Product = (props) => {

    const {
        id,
        name,
        description,
        price,
        image
    } = props;

    return (
        <div>
            <div>
                <div className="card">
                    <div className="card-image">
                        <img src={`${image}`} alt={`${name}`} />
                        <div className="card-title">{name} </div>
                    </div>
                    <div className="card-content">
                        <p>{description}</p>
                    </div>
                    <div className='bottom-info'>
                        <div className="card-price">Ценa: {price}$</div>
                        <button onClick={() => props.addToBasket({id, name, price})} className="waves-effect waves-light btn card-button">Buy</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product