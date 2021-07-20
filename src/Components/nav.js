import {useState} from 'react'
import{Link} from 'react-router-dom'
export function Navbar(){
  const[title,setTitle]=useState("Abhijet")


function demo(event){
event.preventDefault()

let value=document.getElementById('golu123').value
setTitle(value)
}


    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">{title}'s Cake Gallery</a>
        
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
          <form class="form-inline my-2 my-lg-0"  style={{marginLeft:'18%'}}>
        
            <input id="golu123" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button onClick={demo} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
         <Link  style={{marginLeft:'42%'}} to='/login'> <button type="button" className="btn btn-primary">Login</button></Link>
        </div>
      </nav>
        
    )
}

