import React from 'react';
import { v4 as uuidv4 } from 'uuid';


const List = ({ laps })=>{

 return (
   <div className="laps-container">
       {
           laps.map(lap=>(
               <div key={uuidv4()}>
                <p>{lap}</p>
               <hr/>
               </div>
           ))
       }
   </div>
 )   
}

export default List;