import Screen from "../components/Screen";

const Character = () => {
    return (
        <div className="card__wrapper column is-3">
            <div className="card">
                <div className="card-image">
                    <figure className="image ">
                        <img src="/images/male-face.jpg" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">props.title</p>
                        <p className="subtitle is-6">@johnsmith</p>
                    </div>
                </div>
                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br />
                    <time datetime="2016-1-1">props.date</time>
                </div>
            </div>
        </div>
    )
};


const Characters = () => {
    return (
        <Screen caption="Characters">
            <div className="columns is-multiline ">
                <Character></Character>
                <Character />
                <Character />
                <Character />
                <Character />
            </div>
        </Screen>
    )
};
export default Characters;