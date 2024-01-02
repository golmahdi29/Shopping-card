import React, { useContext } from 'react'
import './Navbar.css'
import { BsBag } from "react-icons/bs";
import productsContext from '../../Contexts/ProductContext';


export default function Navbar() {

    const contextData = useContext(productsContext)
    
  return (
    <nav className='navbar navbar-expand-sm py-3 d-flex'>
        <div className="container">
            <a href="#" className="navbar-brand text-white">
                Sabzlearn Shop
            </a>

            <ul className="navbar-nav me-auto ms-3">
                <li className='nav-item'>
                    <a href="#" className='nav-link'>
                        Home
                    </a>
                </li>
            </ul>

            <div className='bag-box'>
                <a href="javascript:void(0)" className='bag' onClick={() => contextData.setIsShowCart(true)}>
                    <BsBag className='text-white bag-icon' />
                    <span className='bag-product-counter'>{contextData.userCart.length}</span>
                </a>
            </div>
        </div>
    </nav>
  )
}
