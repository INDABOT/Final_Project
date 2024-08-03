import CartItems from "../Components/CartItems/CartItems"
import Header from "../Layouts/Header/Header"
import Footer from "../Layouts/Footer/Footer"

const CartSection = () => {
  return (
    <div>
        <Header />
        <CartItems />
        <Footer/>
    </div>
  )
}

export default CartSection