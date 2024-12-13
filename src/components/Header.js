import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import LogoutLink from './LogoutLink';

const Header = ({ title, subtitle }) => {
    const { auth, username } = useContext(AuthContext);

    return (
        <header className="header">
            <div className='logo'>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <img src="https://rekhta.pc.cdn.bitgravity.com/content/images/favico.png" alt="RekhtaLabs Logo" />
                </Link>
            </div>
            <div className='header-center'>  
                <div className='main-title'>{title}</div>
                {subtitle && <div className='main-subtitle'>{subtitle}</div>}
            </div>
            <div className="header-right">
                {auth ? (
                    <>
                        <span>{username}</span>
                        <LogoutLink />
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
};

export default Header;
