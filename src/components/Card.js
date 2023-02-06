
const Card = (props) => {
    return (

        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    Component 3
                </p>
            </header>
            <content className="card-content">
                {props.title}
            </content>
        </div>
    )
}


export default Card;