import { useEffect, useState } from "react";
import Acts from "../components/Acts";
import Screen from "../components/Screen";


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
        <Screen caption="Five Act Structure">
            <Acts items={items}></Acts>
        </Screen>
    )
}

export default FiveActStruct;