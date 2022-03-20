import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { menuItems } from "./data/menu-items";

function App() {
  const [category, setCategory] = useState([]);

  const [activeMenu, setActiveMenu] = useState("all");

  const updateActiveMenu = (newMenuValue) => {
    setActiveMenu(newMenuValue);
    console.log(activeMenu);
  };

  useEffect(() => {
    const tempArray = [];
    menuItems.map((ele) => {
      if (!tempArray.includes(ele.category)) tempArray.push(ele.category);
    });
    setCategory([...tempArray]);
  }, []);

  return (
    <div className="App">
      <Header category={category} updateActiveMenu={updateActiveMenu} />
      <article className="two-col">
        {menuItems.map((ele, i) => {
          if (activeMenu === "all") return <Menu key={i} {...ele} />;
          if (activeMenu === ele.category) return <Menu key={i} {...ele} />;
        })}
      </article>
    </div>
  );
}

export default App;
