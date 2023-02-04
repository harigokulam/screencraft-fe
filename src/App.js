
import './App.css';

function App() {
    return (
        <div className="container">
            <div className="cards">


                <nav className="panel">
                    <p className="panel-heading">
                        One line Order
                    </p>
                    <div className="panel-block cardgrid">

                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    Component
                                </p>
                            </header>
                        </div>
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    Component 2
                                </p>
                            </header>
                        </div>
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    Component 3
                                </p>
                            </header>
                        </div>
                    </div>

                    <div className="panel-block">
                        <button className="button is-link is-outlined is-fullwidth">
                            Reset all filters
                        </button>
                    </div>
                </nav>

            </div>
        </div>
    );
}

export default App;
