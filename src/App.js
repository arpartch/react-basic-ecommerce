import React, {useState} from "react";
import "./style.css";
import Nav from "./Nav.js";
import Item from "./Item.js"
import ItemPage from "./ItemPage.js";
import {items} from "./static-data.js";

const App = () => {
  const [activeTab, setActiveTab] = useState('items');
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <Nav
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      {/* components are have self closing tags */}
      <main className="App-content">
        <Content tab={activeTab} onAddToCart={addToCart}/>
      </main>
    </div>
  );
}

const Content = ({tab, onAddToCart}) => {
  switch (tab) {
    case 'items':
    return <ItemPage items={items} onAddToCart={onAddToCart}/>;
    case 'cart':
    return <span>the cart</span>;
    default:
      break;
  }
};

export default App;