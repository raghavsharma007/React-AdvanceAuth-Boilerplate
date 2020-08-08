import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return (
    <div className="col-span-4 p-3">
        <div className="w-3/4 m-auto border border-gray-400 p-5 rounded-lg shadow-md">
            <h1 className="">Welcome to Auth System!</h1>
            <p className="">This is a super cool authentication system with all kinds of functionalities.</p>
            <hr className="" />
            <p className="p-1">Go ahead and login!</p>
            <Link className="border border-yellow-600 rounded-full p-1 px-2 uppercase text-sm hover:bg-yellow-600 hover:text-white text-yellow-700 transition ease-in-out duration-200" to='/login'>Login</Link>
        </div>
    </div>
    )
}

export default Home
