import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className=''>
        <div className="">
            <h1 className="">Welcome to Auth System!</h1>
            <p className="">This is a super cool authentication system with all kinds of functionalities.</p>
            <hr className="" />
            <p>Go ahead and login!</p>
            <Link className="b" to='/login'>Login</Link>
        </div>
    </div>
    )
}

export default Home
