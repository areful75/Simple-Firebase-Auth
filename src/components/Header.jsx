import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    const navStyle = {
        marginRight: '10px'
      };
    
    return (
        <div>
          <NavLink style={navStyle}  to={'/'}>Home</NavLink>
          <NavLink to={'/login'}>LogIn</NavLink>

        </div>
    );
};

export default Header;