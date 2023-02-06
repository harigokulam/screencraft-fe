import { useEffect, useState } from "react";
import Acts from "../components/Acts";


const FiveActStruct = () => {

    const [items, setItems] = useState([]);


    useEffect( () => {
        setItems([
            { title: 'Act 1' },
            { title: 'Act 2' },
            { title: 'Act 3' },
            { title: 'Act 4' },
            { title: 'Act 5' }
        ])
    }, []);

    return (
        <div>
            <Acts title="Five Act Structure" items={items}></Acts>
        </div>
    )
}

export default FiveActStruct;