import Loader from "react-loader-spinner";
import Home from "./Components/Home.js";
import Login from "./Components/Login.js";
import Signup from "./Components/Signup.js";
import Search from "./Components/Search.js";
import Addcake from "./Components/Addcake";
import CakeDetail from "./Components/CakeDetail.js";
import { useState, useEffect } from "react";
import "./App.css";
import { Navbar } from "./Components/nav.js";
import PageNotFound from "./Components/Pagenotfound.js";
//import Cake from "./Components/Cake.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  const [loader, setLoader] = useState(true);
  const[IsuserLoggedIn,setUserLoggedIn]=useState(localStorage.token?true:false)
  const style = { marginTop: "20%", marginRight: "5%" };
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  });

const loggedIn=()=>{
setUserLoggedIn(true)
  
} 

  return (
    <div className="App">
      {loader ? (
        <Loader
          style={style}
          type="Oval"
          color="#00BFFF"
          height={100}
          width={100}
        />
      ) : (
        <BrowserRouter>
          <Navbar IsuserLoggedIn={IsuserLoggedIn}></Navbar>
          <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" ><Login loggedIn={loggedIn}/></Route>
            <Route exact path="/search" component={Search} />
            <Route exact path="/addcake" component={Addcake} />
            <Route exact path="/cake/:cakeid" component={CakeDetail} />
            <Route exact path="**" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
