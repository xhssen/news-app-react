import '../index.css';
import {Link} from 'react-router-dom';

const Nav = () => {
   
   
  return (
    <>
        <h1 style={{textAlign:"center"}}>Latest News Source App</h1>
        <div className="navbar">
            <div className="nav-btn-container">
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
                    <li>All</li>
                </Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/science">
                    <li>Science</li>
                </Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/technology">
                    <li>Technology</li>
                </Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/sports">
                    <li>Sports</li>
                </Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/business">
                    <li>Business</li>
                </Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/health">
                    <li>Health</li>
                </Link>
            </div>
        
           
        </div>
        </>
   
                  
  )
}

export default Nav;