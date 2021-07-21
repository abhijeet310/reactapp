function Signup(){

    let style={width:'50%', marginLeft:'25%',marginTop:'8%', background:'#282828'}

    return(
<form style={style} className="jumbotron">
<div class="form-group" >
    <label style={{float:'left' , color:'whitesmoke'}} for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="form-group">
    <label style={{float:'left',color:'whitesmoke'}} for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="form-group">
    <label style={{float:'left',color:'whitesmoke'} }for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button style={{ marginLeft:"88%"}} type="submit" class="btn btn-primary">Signup</button>
</form>
    )
}

export default Signup;