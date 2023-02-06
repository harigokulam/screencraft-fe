import { useEffect, useState } from "react";
import API from "../features/service";
import Act from "./Act";

const Acts = (props) => {

    
    return (
        
        <div className="cardgrid">

            {
                props.items.map((element, index) => {
                    
                    return (<div key={index} className="box" droppable="true" >
                        <Act  title={element.title} />
                    </div>)
                })
            }
        </div>
    )
}


export default Acts;