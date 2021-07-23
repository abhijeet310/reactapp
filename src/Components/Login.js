import { Link,withRouter } from "react-router-dom";
import axios from "axios";
//import { useState } from "react";
function Login(props) {
 // const [message, setMessage] = useState("");
  let style = {
    width: "50%",
    marginLeft: "25%",
    marginTop: "10%",
    background: "#282828",
  };
  let user = {};
  const emailHandler = (event) => {
    user.email = event.target.value;
  };

  const passwordHandler = (event) => {
    user.password = event.target.value;
  };

  const login = (event) => {
    event.preventDefault();

    //setMessage("Invalid Credential");
    let apiurl = "https://apifromashu.herokuapp.com/api/login";
    axios({
      method: "post",
      url: apiurl,
      data: user,
    })
      .then((res) => {
       console.log(props)
        console.log("response from login api", res);
        if(res.data.token){
          props.loggedIn()
          localStorage.token = res.data.token
          props.history.push("/")
      }
      else{
        alert("Invalid Credentials")
    }
       
      })
      .catch((err) => {
        console.log("error from login api", err);
      });
   
  };

  return (
    <form style={style} className="jumbotron">
      <div class="form-group">
        <label
          for="exampleInputEmail1"
          style={{ float: "left", color: "whitesmoke" }}
        >
          Email address
        </label>
        <input
          onChange={emailHandler}
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="form-group">
        <label
          for="exampleInputPassword1"
          style={{ float: "left", color: "whitesmoke" }}
        >
          Password
        </label>
        <input
          onChange={passwordHandler}
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div>
        <Link to="/signup" style={{ color: "whitesmoke" }}>
          New User ? Signup
        </Link>
      </div>
      <button
        onClick={login}
        style={{ marginTop: "10px", marginLeft: "88%" }}
        type="submit"
        class="btn btn-primary"
      >
        Login
      </button>
      {/* <label className="errormessage" style={{ color: "red" }}>
        {message}
      </label> */}
    </form>
  );
}

export default withRouter(Login)