import { Link} from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
        <h3>David Samuel</h3>
        <div className="links">
            <Link to='/'>Home</Link> 
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link> 
        <Link to='/products'>Products</Link>   
        </div>
    </div>
  );
};

export default NavBar;