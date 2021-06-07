import React, { useState } from "react";

const Categories = ({ items }) => {
  const [categories] = useState([
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ]);
  const [active, setActive] = useState(0);
  const onSelect = (index) => {
    setActive(index);
  };
  return (
    <div className="categories">
      <ul>
        {categories &&
          categories.map((el, index) => {
            return (
              <li
                onClick={() => onSelect(index)}
                key={`${el}__${index}`}
                className={active === index ? "active" : ""}
              >
                {el}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Categories;
