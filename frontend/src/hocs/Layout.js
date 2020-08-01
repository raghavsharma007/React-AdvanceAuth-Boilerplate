import React from 'react';
import NavBar from '../components/NavBar';

function Layout(props) {
    return (
        <div>
            <NavBar />
            {props.children}
        </div>
    )
}

export default Layout
