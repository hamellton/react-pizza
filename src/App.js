import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/db.json")
      .then((res) => {
        setPizzas(res.data.pizzas);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home items={pizzas} />} />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  );
};

export default App;
