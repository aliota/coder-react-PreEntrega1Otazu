import {FaShoppingCart} from "react-icons/fa";


function CartWidget() {
  return (
    <div className="carrito">
        <FaShoppingCart size="25px"/>
        <span className="badge">8</span>
    </div>
  )
}

export default CartWidget