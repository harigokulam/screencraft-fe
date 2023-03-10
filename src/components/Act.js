
const Act = (props) => {

    const handleDoubleClick = (e) => {
        alert('Double click ' + e.target.innerText)
        console.log(e.target);
    };


    return (
        <div draggable="true" className="card" onDoubleClick={handleDoubleClick}>

            <header class="card-header">
                <p class="card-header-title">
                    {props.title}
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    {props.title}
                </div>
            </div>
        </div>
    )
}


export default Act;