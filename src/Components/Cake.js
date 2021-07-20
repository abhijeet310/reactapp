function Cake(props){
    return(
        
        <div class="card col-3" style={{width: '18rem'}} >
        <img   src={props.data.image} className="card-img-top" alt="..."/>
        
        <div class="card-body">
          <h5 class="card-title">{props.data.title}</h5>
          <p class="card-text">{props.data.price}</p>
          <a href="..." class="btn btn-primary">Add To cart</a>
        </div>
      </div>
     

    )
}
export default Cake