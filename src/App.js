import React, {useState} from "react";
import "./style.css";
import Nav from "./Nav.js";


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
    return <span>the items</span>;
    case 'cart':
    return <span>the cart</span>;
    default:
      break;
  }
};

export default App;