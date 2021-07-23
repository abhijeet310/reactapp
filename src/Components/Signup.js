import axios from "axios";

function Signup() {
  let user = {};
  //let data = { name: "Abhi", password: "123", email: "abhijeet.bhawsar11@gmail.com" };
  let nameHandler = (event) => {
    user.name = event.target.value;
  };
  let emailHandler = (event) => {
    user.email = event.target.value;
  };
  let passwordHandler = (event) => {
    user.password = event.target.value;
  };
console.log(user)
  const signup = (event) => {
    let data = {  email: "abhijeet.bhawsar11@gmail.com",password:'123' };
    //let apiurl1 = "https://apifromashu.herokuapp.com/api/register";
    let apiurl = "https://apifromashu.herokuapp.com/api/login";
    axios({
      method: "post",
      url: apiurl,
      data: data,
    })
      .then((res) => {
        console.log("response from register api", res);
      })
      .catch((err) => {
        console.log("err from register api", err);
      });

    event.preventDefault();
  };

  let style = {
    width: "50%",
    marginLeft: "25%",
    marginTop: "8%",
    background: "#282828",
  };

  return (
    <form style={style} className="jumbotron">
      <div class="form-group">
        <label
          style={{ float: "left", color: "whitesmoke" }}
          for="exampleInputEmail1"
        >
          Name
        </label>
        <input
           onChange={nameHandler}
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="form-group">
        <label
          style={{ float: "left", color: "whitesmoke" }}
          for="exampleInputEmail1"
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
          style={{ float: "left", color: "whitesmoke" }}
          for="exampleInputPassword1"
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

      <button
         onClick={signup}
        style={{ marginLeft: "88%" }}
        type="submit"
        class="btn btn-primary"
      >
        Signup
      </button>
    </form>
  );
}

export default Signup;
