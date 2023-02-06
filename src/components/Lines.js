import Line from "./Line";


const Lines = (props) => {
    return (

        <section class="section">
            <div class="container">
                <h1 class="title">{props.title}</h1>

                <div className="cardgrid">
                    {
                        props.items.map((element, index) => {

                            return (<div key={index} className="box" droppable="true" >
                                <Line title={element.title} />
                            </div>)
                        })
                    }
                </div>
            </div>
        </section>
    )
};

export default Lines;