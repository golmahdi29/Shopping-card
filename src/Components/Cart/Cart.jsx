import React, { useContext } from 'react'
import './Cart.css'
import { BsBag } from 'react-icons/bs'
import productsContext from '../../Contexts/ProductContext'

export default function Cart() {

    const contextData = useContext(productsContext)

    return (
        <aside className={`bag-sidebar ${contextData.isShowCart ? 'active' : ''}`}>
            <h3 className='bag-title'>
                <span>
                    <BsBag />
                </span>
                <span>
                    Bag
                </span>
                <span className='btn btn-close' onClick={() => contextData.setIsShowCart(false)}></span>
            </h3>

            <div className="row bag-wrapper">
                <div className='col-12 mt-5'>
                    {contextData.userCart.map(product => (
                        <div key={product.id}>
                            <div className='py-3 px-3 card-wrapper'>
                                <div className='col-4 text-center me-2'>
                                    <img src={product.img} alt="pi" className='card-img-top' />
                                </div>
                                <div className='card-body d-flex flex-column justify-content-center align-items-start me-1'>
                                    <p className='card-text'>{product.title}</p>
                                    <div className='flex'>
                                        <p className='price'>${product.price}</p>
                                        <p className='number mx-2 rounded'>{product.count}</p>
                                    </div>
                                    <div>
                                        <a href="#" className='btn btn-outline-danger'>Buy</a>
                                        <a href="#" className='btn btn-outline-dark ms-1 text-capitalize'>
                                            More Information
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    )
}
