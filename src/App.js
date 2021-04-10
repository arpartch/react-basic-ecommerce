import React, {useState} from "react";
import "./style.css";
import Nav from "./Nav.js";

import ItemPage from "./ItemPage.js";
import {items} from "./static-data.js";

const App = () => {
  const [activeTab, setActiveTab] = useState('items');

  return (
    <div className="App">
      <Nav
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      {/* components are have self closing tags */}
      <main className="App-content">
        <Content tab={activeTab}/>
      </main>
    </div>
  );
}

const Content = ({tab}) => {
  switch (tab) {
    case 'items':
    return <ItemPage items={items}/>;
    case 'cart':
    return <span>the cart</span>;
    default:
      break;
  }
};

export default App;