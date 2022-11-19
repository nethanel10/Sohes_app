import { Link } from "react-router-dom";

function Navbar() {
  return (
      <div className='navbar'>
        <Link className="navbar__link" to="/">
            Home
        </Link>
        <Link className="navbar__link" to="/shoes">
            Shoes
        </Link>
        <Link className="navbar__link" to="/shoes/new">
            New Shoe
        </Link>
        <Link className="navbar__link" to="/about">
            About
        </Link>
      </div>
  );
}

export default Navbar;
