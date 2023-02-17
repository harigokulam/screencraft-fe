
const Line = (props) => {
    const handleDoubleClick = (e) => {
        alert('Double click ' + e.target.innerText)
        console.log(e.target);
    };

    const item = props.item;

    return(


    //     <div draggable="true" className="card" onDoubleClick={handleDoubleClick}>
          
       
    //     <div className="card-content">
    //         <div className="content">
    //             {props.title}
    //         </div>
    //     </div>
    // </div>
            <div className="content">
                <span className="padded item-id">{item.id}</span>
                <span className="padded item-interior">{(item.interior == 'Yes') ? 'INT': 'EXT'}</span>
                <span className="padded item-location">{item.location}</span>
                <span className="padded item-description">{item.description}</span>
                
             </div>
    )
};

export default Line;

