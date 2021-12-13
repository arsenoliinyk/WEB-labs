import { GlobalProvider } from "./context/GlobalState";
import { Route, Switch } from "react-router-dom";
import Catalogue from "./pages/Catalog";
import Home from "./pages/Home";
import Header from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart";
import HelicopterDetails from "./pages/HelicopterDetails";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/catalog" component={Catalogue} exact />
        <Route path="/catalog/:id" component={HelicopterDetails} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/checkout" component={Checkout} exact />
        <Route path="/success" component={Success} exact />
      </Switch>
      <Footer />
    </GlobalProvider>
  );
}

export default App;
