import React from "react";

function Header(props) {
  return (
    <>
      <header className="header">
        <section>
          <h1> Our Menu</h1>
          <div className="underline"> </div>
        </section>
        <nav>
          <ul className="menu">
            <li onClick={() => props.updateActiveMenu("all")}>All</li>
            {props.category.map((ele, i) => {
              return (
                <li key={i} onClick={() => props.updateActiveMenu(ele)}>
                  {ele}
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
