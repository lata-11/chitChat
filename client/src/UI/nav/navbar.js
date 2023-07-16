import './navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <h1>Chit chat</h1>
      </div>
      <div className='navbar-right'>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Logout</a></li>
          <li><a href='#'>Friends</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;