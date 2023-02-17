const Screen = (props) => {
    return (
        <section className="screen container">
            <div className="title caption">
                {props.caption}
            </div>
            <article>
                {props.children}
            </article>
        </section>
    )
};
export default Screen;