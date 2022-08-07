import { productData } from "../Data/productData";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux'
import { setCartCount, setCartDetails } from '../store/cart/cartAction';
import { useState } from 'react'
function ProductCard() {
  const dispatch = useDispatch()
  // dispatch({ type: 'set', sidebarShow: visible })
  const cart = useSelector((state) => state.cartData);
  const [cartdata, setCartData] = useState(productData);
  const priceSectionStyle = {
    display: "flex",
    alignItem: "center",
    justifyContent: "space-between",
    margin: "1rem",
    alignItems: "center",
  };

  const atcBtnStyling = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const pTagStylingZMargin = {
    margin: 0,
  };

  const addtoCart = (data) => {
    if (data.quantity != 0) {
      let cartTempData = [...cart.cart_detail];
      let temp = cartTempData.find(ele => ele.id == data.id);
      if (temp != undefined) {
        temp.quantity = data.quantity;
        cartTempData.forEach((ele, index) => {
          if (ele.id == data.id) {
            cartTempData[index].quantity = cartTempData[index].quantity - 1
          }
        })
      } else {
        cartTempData.push(data)
      }
      dispatch(setCartCount((cart.cartCount) + 1));
      dispatch(setCartDetails(cartTempData));
      alert('Product Added to Cart Successfully')
    } else alert('Plese Update Qunatity')
  }

  const reduceCount = (data) => {
    if (data.quantity != 0) {
      let localData = [...cartdata]
      cartdata.forEach((ele, index) => {
        if (ele.id == data.id) {
          localData[index].quantity = localData[index].quantity - 1
        }
      })
      setCartData(localData);
    }
    else alert('Qunatity Can Not Less then 0')
  }

  const increaseCount = (data) => {
    let localData = [...cartdata]
    cartdata.forEach((ele, index) => {
      if (ele.id == data.id) {
        localData[index].quantity = localData[index].quantity + 1
      }
    })
    setCartData(localData);
  }

  return cartdata.map((product, index) => {
    return (
      <div
        className="card"
        style={{ width: "25%", margin: "2rem 1rem 1rem", cursor: "pointer" }}
        key={product.id}
      >
        <div>
          <img
            className="card-img-top"
            src={product.image}
            alt={product.name}
          />
          <h5 className="card-body">{product.name}</h5>
        </div>
        <div className="price" style={priceSectionStyle}>
          <p style={{ margin: "0" }}>{product.price}</p>
          <div className="btn-group">
            <button className="btn btn-outline-danger" onClick={() => reduceCount(product)}>-</button>
            <button className="btn btn-outline-dark" disabled>
              {product.quantity}
            </button>
            <button className={"btn btn-outline-success"} onClick={() => increaseCount(product)}>+</button>
          </div>
        </div>
        <button className="btn btn-success" style={atcBtnStyling}>
          <p style={pTagStylingZMargin} onClick={() => addtoCart(product)}>Add to Cart</p>
        </button>
      </div>
    );
  });
}

export default ProductCard;
