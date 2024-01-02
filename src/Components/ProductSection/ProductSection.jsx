import React, { useContext, useState } from 'react'
import './ProductSection.css'
import Toast from '../Toast/Toast'
import productsContext from '../../Contexts/ProductContext'

export default function ProductSection() {

    const contextData = useContext(productsContext)

    const toastShowHandler = (selectedProduct) => {
        contextData.setIsShowToast(true)
        setTimeout(() => contextData.setIsShowToast(false), 3000)

        let isValid = contextData.userCart.some(bagProduct => bagProduct.title === selectedProduct.title)

        if(!isValid){
            const newItem = {
                id: selectedProduct.id,
                title: selectedProduct.title,
                img: selectedProduct.img,
                price: selectedProduct.price,
                count: 1
            }
    
            contextData.setUserCart(pre => [...pre, newItem])
        } else {
            let userCart = [...contextData.userCart]

            userCart.some(bagProduct => {
                if(bagProduct.title === selectedProduct.title){
                    bagProduct.count += 1
                    return true;
                }
            })

            contextData.setUserCart(userCart)
        }
    }

    return (
        <>
            {contextData.allproducts.map(product => (
                <div key={product.id} className='row justify-content-center mt-5'>
                    <h3 className='text-center'>{product.title}</h3>

                    <div className='d-flex justify-content-center align-items-center gap-2 mt-5'>
                        {product.infos.map(item => (
                            <div className='card py-3 px-3 pt-5' key={item.id}>
                                <div className="col-12 text-center">
                                    <img src={item.img} alt="Product Photo" className='card-img-top w-50' />
                                </div>

                                <div className="card-body text-center">
                                    <p className="card-text">{item.title}</p>
                                    <p className='price'>${item.price}</p>
                                    <br />
                                    <a href="javascript:void(0)" className='btn btn-outline-danger my-3 d-block' onClick={() => toastShowHandler(item)}>Add To Card</a>
                                    <a href="#" className='btn btn-outline-dark text-capitalize d-block mb-2'>
                                        More Information
                                    </a>
                                    <p className='number rounded'>Number: {item.count}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {contextData.isShowToast && <Toast />}
        </>
    )
}
