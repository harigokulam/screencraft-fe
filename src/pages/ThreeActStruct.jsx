import { useEffect, useState } from "react";
import Acts from "../components/Acts";


const ThreeActStruct = () => {

    const [items, setItems] = useState([]);


    useEffect( () => {
        setItems([
            { title: 'Act 1' },
            { title: 'Act 2' },
            { title: 'Act 3' }
        ])
    }, []);

    return ( <div>
        <Acts title="Three Act Structure" items={items}></Acts>
    </div>)
}
export default ThreeActStruct;