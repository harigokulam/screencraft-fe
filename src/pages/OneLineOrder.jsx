import { useEffect, useState } from "react";
import Lines from "../components/Lines";
import Screen from "../components/Screen";


const OneLineOrder  = ( ) => {

    const [items, setItems] = useState([]);


    useEffect( () => {
        setItems([
            { title: 'Line 1', id: 1, interior: 'Yes', location: 'Cricket Ground', tod: 'Morning', description: 'Sample description', notes: '' },
            { title: 'Line 2', id: 1, interior: 'Yes', location: 'Cricket Ground', tod: 'Morning', description: 'Sample description', notes: ''  },
            { title: 'Line 3' , id: 1, interior: 'Yes', location: 'Cricket Ground', tod: 'Morning', description: 'Sample description', notes: '' },
            { title: 'Line 4' , id: 1, interior: 'Yes', location: 'Cricket Ground', tod: 'Morning', description: 'Sample description', notes: '' },
            { title: 'Line 5' , id: 1, interior: 'Yes', location: 'Cricket Ground', tod: 'Morning', description: 'Sample description', notes: '' },
            { title: 'Line 1' , id: 1, interior: 'Yes', location: 'Cricket Ground', tod: 'Morning', description: 'Sample description', notes: '' },
            { title: 'Line 2' , id: 1, interior: 'No', location: 'Cricket Ground', tod: 'Evening', description: 'Sample description', notes: '' },
            { title: 'Line 3' , id: 1, interior: 'Yes', location: 'Cricket Ground', tod: 'Morning', description: 'Sample description', notes: '' },
            { title: 'Line 4' , id: 1, interior: 'No', location: 'Cricket Ground', tod: 'Morning', description: 'Sample description', notes: '' },
            { title: 'Line 5' , id: 1, interior: 'Yes', location: 'Cricket Ground', tod: 'Morning', description: 'Sample description', notes: '' }
        ])
    }, []);


    return (
        <Screen caption="Oneline Order">
           
            <Lines title="Oneline Order" items={items}/>
        </Screen>
    )
};


export default OneLineOrder ;