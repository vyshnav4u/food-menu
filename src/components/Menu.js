import React from "react";

function Menu(props) {
  const { title, description, price, image, category } = props;
  return (
    <section className="single-data">
      <figure className="menu-img">
        <img src={image} alt="" />
      </figure>
      <div className="menu-meta-wrapper">
        <section className="menu-meta">
          <h3> {title} </h3>
          <div className="price"> {"$" + price} </div>
        </section>
        <section>
          <p> {description} </p>
        </section>
      </div>
    </section>
  );
}

export default Menu;
