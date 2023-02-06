import './App.css';
import { Outlet } from 'react-router-dom';

import NavBar from './components/NavBar';

function App() {
    return (
        <>
            <NavBar />
            <div style={{ paddingBottom: 20 }}></div>

            <div className="container">
                <Outlet />
            </div>
        </>
    );
}

export default App;
