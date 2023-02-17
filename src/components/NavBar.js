import { Link } from "react-router-dom";


const NavBar = () => {

    return (
        <nav className="navbar  is-dark">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    <img className="icon is-16x16" src="/images/icon.png" alt="SC"/>
                    <span>&nbsp; ScreenCraft</span>
                </a>
                <div className="navbar-burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to={"/"}>
                        Home
                    </Link>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <span className="navbar-link" >
                            Story
                        </span>
                        <div className="navbar-dropdown is-boxed">
                            <Link className="navbar-item" to={"/threeact"}>
                                Three Act Structure
                            </Link>
                            <Link className="navbar-item" to={"/fiveact"}>
                                Five Act Structure
                            </Link>
                            <Link className="navbar-item" to={"/onelines"}>
                                OneLine Order
                            </Link>
                            <Link className="navbar-item" to={"/characters"}>
                                Characters
                            </Link>

                        </div>
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <span className="navbar-link" >
                            Documents
                        </span>
                        <div className="navbar-dropdown is-boxed">
                            <Link className="navbar-item" to={"output/oneliners"}>
                                OneLiners
                            </Link>
                            <Link className="navbar-item" to={"output/treatement"}>
                                Treatment
                            </Link>
                            <Link className="navbar-item" to={"output/screenplay"}>
                                Screen Play
                            </Link>

                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            {/* <p className="control">
                                <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                                    <span className="icon">
                                        <i className="fab fa-twitter"></i>
                                    </span>
                                    <span>
                                        Tweet
                                    </span>
                                </a>
                            </p> */}
                            <p className="control">
                                <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.4/bulma-0.9.4.zip">
                                    <span className="icon">
                                        <i className="fas fa-download"></i>
                                    </span>
                                    <span>Login</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;