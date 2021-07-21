import Cake from './Cake.js'
function CakeList(props){

    let cake1 = {
        title: "Vanila Cake",
        price: 500,
        image: "cake2.jpeg",
        cakeid:5465657
      };
      let cake2 = {
        title: "Chocolate Cake",
        price: 600,
        image: "cake3.jpeg",
        cakeid:6534364
      };

    return(
        <div className='row'>
            <Cake data={cake1} history={props.history}/>
            <Cake data={cake2}  history={props.history}/>
        </div>
    )


}
export default CakeList