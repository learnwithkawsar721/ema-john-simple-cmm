import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import NotFount from "./components/NotFount/NotFount";
import Order from "./components/Order/Order";
import Products from "./components/Products/Products";
import Register from "./components/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route exact path="/home">
            <Products />
          </Route>
          <Route exact path="/order">
            <Order />
          </Route>
          <PrivateRoute exact path="/inventory">
            <Inventory />
          </PrivateRoute>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="*">
            <NotFount />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
