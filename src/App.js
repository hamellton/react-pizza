import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  );
};

export default App;
