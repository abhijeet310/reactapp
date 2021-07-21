import {Link} from 'react-router-dom'
function Cake(props){
  
  function ShowDetail(event){
props.history.push('/cake/'+props.data.cakeid)
  }
    return(
        
        <div class="card col-3" style={{width: '18rem'}} >
       <Link><img onClick={ShowDetail}  src={props.data.image} className="card-img-top" alt="..."/></Link>
        
        <div class="card-body">
          <h5 class="card-title">{props.data.title}</h5>
          <p class="card-text">{props.data.price}</p>
          <a href="..." class="btn btn-primary">Add To cart</a>
        </div>
      </div>
     

    )
}
export default Cake