import React from "react";

const Categories = ({ items }) => {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map((el, index) => {
          return <li key={`${el}__${index}`}>{el}</li>;
        })}
      </ul>
    </div>
  );
};

export default Categories;
