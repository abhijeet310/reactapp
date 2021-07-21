import { Crousel } from "./Crousel.js";

import CakeList from './CakeList'
function Home(props){
    

    return(
        <div>
         <Crousel/>
         <CakeList history={props.history}/>
        </div>
    )
}

export default Home