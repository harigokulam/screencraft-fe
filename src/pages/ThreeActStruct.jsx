import { useEffect, useState } from "react";
import Acts from "../components/Acts";
import Screen from "../components/Screen";


const ThreeActStruct = () => {

    const [items, setItems] = useState([]);


    useEffect( () => {
        setItems([
            { title: 'Act 1' },
            { title: 'Act 2' },
            { title: 'Act 3' }
        ])
    }, []);

    return ( 
        <Screen caption="Tree Act Structure">
        <Acts items={items}></Acts>
    </Screen>)
}
export default ThreeActStruct;