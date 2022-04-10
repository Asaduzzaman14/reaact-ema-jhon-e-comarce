import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {

    const [user] = useAuthState(auth)
    const handelSignOut = () => {
        signOut(auth)
    }

    return (
        <nav className='header'>
            <img src={Logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {user ? <button onClick={handelSignOut}>sign Out</button> :
                    <Link to="/login">login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;