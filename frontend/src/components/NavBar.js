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
            <li className="p-1">
                <NavLink className="flex" exact to='/login'>
                    <svg fill="none" className="h-5 mr-1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                    Login
                </NavLink>
            </li>
            <li className="p-1">
                <NavLink className="flex" exact to='/signup'>
                    <svg fill="none" className="h-5 mr-1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Sign Up
                </NavLink>
            </li>
        </>
    );
    return (
        <div className="col-span-1">
            <nav className="flex justify-between sm:block">
                <Link className="uppercase p-1 font-semibold" to='/'>Auth System</Link>
                <div className="" id="">
                    <div className="pl-16 m-1 list-none sm:hidden">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="menu w-6 h-6"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </div>
                    <ul className="p-2">
                        <li className="p-1">
                            <NavLink className="flex" exact to='/'>
                                <svg fill="none" className="h-5 mr-1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>Home
                            </NavLink>
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
