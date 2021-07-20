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
         <Cake data={cake1}/>
        </div>
    )
}

export default Home