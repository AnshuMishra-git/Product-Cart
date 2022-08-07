import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'

function Cart() {
  const cart = useSelector((state) => state.cartData);
  const [cartdata, setCartData] = useState(cart.cart_detail);
  const [total, setToatal] = useState(0)

  useEffect(() => {
    setCartData(cart.cart_detail)
    let total = 0;
    cartdata.forEach(element => {
      total = total + (element.quantity * element.price)
    });

    setToatal(total)

  }, [cart.cart_detail])


  const listStyling = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };


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
    margin: "2px"
  };

  const pTagStylingZMargin = {
    margin: 0,
  };

  return (
    <div>
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "15px" }}
      >
        <h3 style={{ margin: "2rem 0" }}>Cart</h3>
        <ul className="list-group" style={{ width: "40vw" }}>
          <li className="list-group-item" style={listStyling}>
            <p style={{ color: "green" }}>Total Price: </p>
            <p style={{ color: "green" }}>{total}</p>
          </li>
          <li className="list-group-item" style={listStyling}>
            <p style={{ color: "green" }}>Total Cart Count: </p>
            <p style={{ color: "green" }}>{cart.cartCount}</p>
          </li>
        </ul>
        <button className="btn btn-info" style={atcBtnStyling}>
          <p style={pTagStylingZMargin}>Check Out</p>
        </button>
      </div>
      {cartdata?.map((product, index) => (
        <div
          className="card"
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
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
            <p style={{ margin: "0" }}>Price : {product.price}</p>
            &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <p style={{ margin: "0" }}>Quantity :{product.quantity}</p>
          </div>
        </div>
      ))};
    </div>
  );
}

export default Cart;
