import React from "react";
import Categories from "../../components/Categories/Categories";
import SortPopup from "../../components/SortPopup/SortPopup";
import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";

const Home = ({ items }) => {
  if (items.length === 0) {
    return <h1>Идет загрузка...</h1>;
  }
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <SortPopup />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((el) => {
          return <PizzaBlock key={el.id} {...el} />;
        })}
      </div>
    </div>
  );
};

export default Home;
