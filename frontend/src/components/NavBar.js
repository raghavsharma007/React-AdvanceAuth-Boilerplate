import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

function NavBar({isAuthenticated, logout}) {
    const authLinks = (
        <li className="">
            <a className='' onClick={logout} href='#!'>Logout</a>
        </li>
    );

    const guestLinks = (
        <>
            <li className="">
                <NavLink className="" exact to='/login'>Login</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="" exact to='/signup'>Sign Up</NavLink>
            </li>
        </>
    );
    return (
        <div>
            <nav className="">
                <Link className="" to='/'>Auth System</Link>
                <button 
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className=""></span>
                </button>
                <div className="" id="">
                    <ul className="">
                        <li className="">
                            <NavLink className="" exact to='/'>Home</NavLink>
                        </li>
                        { <>{ isAuthenticated ? authLinks : guestLinks }</> }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {logout})(NavBar)
