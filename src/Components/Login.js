import {Link} from 'react-router-dom'
function Login(){
    let style={width:'50%', marginLeft:'25%',marginTop:'10%'}

    return(

<form style={style}>
  <div class="form-group">
    <label for="exampleInputEmail1" style={{float:'left'}}>Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" style={{float:'left'}}>Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
    
  </div>
  <div>
  <Link to='/signup'>New User ? Signup</Link>
  </div>
  <button style={{marginTop:"10px"}} type="submit" class="btn btn-primary">Submit</button>
  
</form>

    )
}

export default Login