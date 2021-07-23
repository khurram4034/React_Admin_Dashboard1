import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import './app.css';
import Home from "./Components/Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./Components/Pages/UserList/UserList";
import User from "./Components/Pages/User/User";
import NewUser from "./Components/Pages/NewUser/NewUser";
import ProductList from "./Components/Pages/ProductList/ProductList";
import Product from "./Components/Pages/Product/Product";
import NewProduct from "./Components/Pages/NewProduct/NewProduct";
import Analysis from "./Components/Pages/Analysis/Analysis";
import Sales from "./Components/Pages/Sales/Sales";
import Transaction from "./Components/Pages/Transaction/Transaction";


function App() {
  return (
    <Router>
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>

            <Route path="/transaction">
              <Transaction />
            </Route>

            <Route path="/sales">
              <Sales />
            </Route>

            <Route path="/analysis">
              <Analysis />
            </Route>

            <Route path="/user/:userId">
              <User />
            </Route>

            <Route path="/newUser">
              <NewUser />
            </Route>

            <Route path="/products">
              <ProductList />
            </Route>

            <Route path="/product/:productId">
              <Product />
            </Route>

            <Route path="/newproduct">
              <NewProduct />
            </Route>
            
            <Route path="/users">
              <UserList />
            </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      
    </div>
    </Router>
  );
}

export default App;
