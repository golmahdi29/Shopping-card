import Navbar from "./Components/Navbar/Navbar";
import ProductSection from "./Components/ProductSection/ProductSection";
import './App.css'
import products from "./Datas/Products";
import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import productsContext from "./Contexts/ProductContext";

function App() {

  const [allproducts, setAllproducts] = useState(products)
  const [userCart, setUserCart] = useState([])
  const [isShowToast, setIsShowToast] = useState(false)
  const [isShowCart, setIsShowCart] = useState(false)

  return (
    <div>
      <productsContext.Provider value={{
        allproducts,
        userCart,
        setUserCart,
        isShowToast,
        setIsShowToast,
        isShowCart,
        setIsShowCart
      }}>
        <Navbar />
        
        <Cart />
        <main className="pb-5">
          <div className="container">
            <h1 className="text-center main-title">All Product</h1>
            {allproducts.map(product => <ProductSection key={product.id} />)}
            <Cart />
          </div>
        </main>
      </productsContext.Provider>
    </div>
  );
}

export default App;
