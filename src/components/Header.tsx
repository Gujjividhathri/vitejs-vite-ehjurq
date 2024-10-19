import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/workers">Workers</Link></li>
          <li><Link to="/booking">Book Now</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;