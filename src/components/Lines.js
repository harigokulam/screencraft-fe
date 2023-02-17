import Line from "./Line";


const Lines = (props) => {
    return (

        <section className="panel">
            <div className="panel-header">
                {/* <h1 className="title center">{props.title}</h1> */}
                </div>

                <div className="cardgrid1">
                    {
                        props.items.map((element, index) => {

                            return (
                            <div key={index} className="panel-block" droppable="true" >
                                <Line item={element} />
                            </div>
                            );
                        })
                    }
                </div>
           
        </section>
    )
};

export default Lines;