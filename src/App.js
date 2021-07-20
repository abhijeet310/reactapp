// import Loader from "react-loader-spinner";
import Home from "./Components/Home.js";
import Login from "./Components/Login.js";
import Signup from "./Components/Signup.js"
import { useState, useEffect } from "react";
import "./App.css";
import { Navbar } from "./Components/nav.js";
import PageNotFound from "./Components/Pagenotfound.js"
//import Cake from "./Components/Cake.js";
import { BrowserRouter, Route,Switch } from "react-router-dom";
function App() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
  }, []);
  // let cake1 = {
  //   title: "Vanila Cake",
  //   price: 500,
  //   image: "cake2.jpeg",
  // };
  // let cake2 = {
  //   title: "Chocolate Cake",
  //   price: 600,
  //   image: "cake3.jpeg",
  // };

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
      
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="**" component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
