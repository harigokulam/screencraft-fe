import { useEffect, useState } from "react";
import Lines from "../components/Lines";


const OneLineOrder  = ( ) => {

    const [items, setItems] = useState([]);


    useEffect( () => {
        setItems([
            { title: 'Line 1' },
            { title: 'Line 2' },
            { title: 'Line 3' },
            { title: 'Line 4' },
            { title: 'Line 5' },
            { title: 'Line 1' },
            { title: 'Line 2' },
            { title: 'Line 3' },
            { title: 'Line 4' },
            { title: 'Line 5' }
        ])
    }, []);


    return (
        <div>
            <Lines title="Oneline Order" items={items}/>
        </div>
    )
};


export default OneLineOrder ;