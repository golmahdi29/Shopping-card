import React, { useContext } from 'react'
import './Toast.css'
import productsContext from '../../Contexts/ProductContext'

export default function Toast() {

  const contextData = useContext(productsContext)

  return (
    <div className='tost'>
        <div>Product Added Successfully</div>
        <button className='btn btn-close' onClick={() => contextData.setIsShowToast(false)}></button>
    </div>
  )
}
