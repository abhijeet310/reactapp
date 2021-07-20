function Signup(){

    let style={width:'50%', marginLeft:'25%',marginTop:'10%'}

    return(
<form style={style}>
<div class="form-group" >
    <label style={{float:'left'}} for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="form-group">
    <label style={{float:'left'}} for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="form-group">
    <label style={{float:'left'}} for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    )
}

export default Signup;