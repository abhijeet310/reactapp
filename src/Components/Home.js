import { Crousel } from "./Crousel.js";
import Cake from "./Cake.js";
function Home(props){
    let cake1 = {
        title: "Vanila Cake",
        price: 500,
        image: "cake2.jpeg",
      };
      let cake2 = {
        title: "Chocolate Cake",
        price: 600,
        image: "cake3.jpeg",
      };

    return(
        <div>
         <Crousel/>
         <div className='row'>
         <Cake data={cake1}/>
         <Cake data={cake2}/>
         </div>
        </div>
    )
}

export default Home