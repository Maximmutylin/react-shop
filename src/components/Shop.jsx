import React, { useEffect, useState } from 'react'
import { API_KEY, API_URL } from '../config'
import Alert from './Alert';
import Basket from './Basket';
import Cart from './Cart';
import Goods from './Goods';
import Preloader from './Preloader';

const Shop = () => {

    let [goods, setGoods] = useState([]);
    let [loading, setLoading] = useState(true);
    let [order, setOrder] = useState([]);
    let [isBasketShow, setBasketShow] = useState(false);
    let [alertName, setAlertName] = useState('');

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            }
        })
            .then(response => response.json())
            .then(data => {
                data.featured && setGoods(goods = data.featured);
                setLoading(false)
            })
    }, []);

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow)
    }

    const addToBasket = item => {
        const itemIndex = order.findIndex(el => el.id === item.id)
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quanity: 1,
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((e, i) => {
                if (i === itemIndex) {
                    return {
                        ...e,
                        quanity: e.quanity + 1
                    }
                } else {
                    return e
                }
            })
            setOrder(newOrder)
        }
        setAlertName(item.name)


    }

    const removeFromBasket = itemId => {
        const newOrder = order.filter(el => el.id !== itemId);
        setOrder(newOrder)

    }

    const addQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                const newQuantity = el.quanity + 1;
                return {
                    ...el,
                    quanity: newQuantity
                }
            } else {
                return el
            }
        });
        setOrder(newOrder);
    }

    const removeQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                let newQuantity = el.quanity - 1;
                if (newQuantity <= 1) {
                    newQuantity = 1;
                }
                return {
                    ...el,
                    quanity: newQuantity
                }
            } else {
                return el
            }
        });
        setOrder(newOrder);
    }

    const closeAlert = () => {
        setAlertName('')
    }

    return (
        <main className='container content'>
            <Cart quanity={order.length} handleBasketShow={handleBasketShow} />
            {
                loading ? <Preloader /> : <Goods addToBasket={addToBasket} data={goods} />
            }

            {
                isBasketShow && <Basket
                    removeFromBasket={removeFromBasket}
                    handleBasketShow={handleBasketShow}
                    addQuantity={addQuantity}
                    removeQuantity={removeQuantity}
                    order={order}
                />
            }

            {
                alertName && <Alert name={alertName} closeAlert={closeAlert} />
            }

        </main>
    )
}

export default Shop