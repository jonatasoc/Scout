import { Link } from 'react-router-dom';
import Teams from './Teams';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src="https://img.icons8.com/office/40/000000/football.png"/>         
            <ul className="menu">
                <Link to="/"><li>Home</li></Link>
                <Link to="/teams"><li>Create Team</li></Link>
                <Link to="/"><li>Login</li></Link>
            </ul>
        </div>
    )
}

export default Navbar;