import {useState} from 'react'
import{Link} from 'react-router-dom'
export function Navbar(){
  const[searchText,setSearchText]=useState("")
  const title="Abhijeet"

let getSearchText=(event)=>{
setSearchText(event.target.value)
event.preventDefault();

}




    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to='/'><a className="navbar-brand" href="/">{title}'s Cake Gallery</a></Link>
        
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
          <form class="form-inline my-2 my-lg-0"  style={{marginLeft:'18%'}}>
        
            <input onChange={getSearchText}  className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
           <Link to={`/search?q=${searchText}`}> <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></Link>
          </form>
         <Link  style={{marginLeft:'42%'}} to='/login'> <button type="button" className="btn btn-primary">Login</button></Link>
        </div>
      </nav>
        
    )
}

