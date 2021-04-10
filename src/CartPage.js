import React from 'react';
import PropTypes from 'prop-types';
import "./CartPage.css";

import Item from "./Item.js"

function CartPage({items, onAddToCart}) {
  return (
    <ul className="CartPage-items">
      {items.map(item =>
        <li key={item.id} className="CartPage-item">
          <Item item={item} onAddToCart={() => onAddToCart(item)}/>
       </li>)}
    </ul>
  );
}

CartPage.propTypes = {
  items: PropTypes.array.isRequired
};

export default CartPage;