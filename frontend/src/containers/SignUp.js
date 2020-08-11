  
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { signup } from '../actions/auth';

const Signup = ({ signup, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        re_password: ''
    });

    const [accountCreated, setAccountCreated] = useState(false);

    const { name, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup({ name, email, password, re_password });
            setAccountCreated(true);
        }
    };

    if (isAuthenticated)
        return <Redirect to='/' />;
    if (accountCreated)
        return <Redirect to='login' />;
    
    return (
        <div className=''>
            <h1>Sign Up</h1>
            <p>Create your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className='p-1'>
                    <input 
                        className='p-1 outline-none focus:shadow-outline rounded-sm border border-gray-600'
                        type='text'
                        placeholder='Name*'
                        name='name'
                        value={name}
                        onChange={e => onChange(e)}
                        required 
                    />
                </div>
                <div className='p-1'>
                    <input 
                        className='p-1 outline-none focus:shadow-outline rounded-sm border border-gray-600'
                        type='email'
                        placeholder='Email*'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required 
                    />
                </div>
                <div className='p-1'>
                    <input
                        className='p-1 outline-none focus:shadow-outline rounded-sm border border-gray-600'
                        type='password'
                        placeholder='Password*'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <div className='p-1'>
                    <input
                        className='p-1 outline-none focus:shadow-outline rounded-sm border border-gray-600'
                        type='password'
                        placeholder='Confirm Password*'
                        name='re_password'
                        value={re_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='border border-blue-800 rounded-full p-2 bg-blue-800 uppercase text-white' type='submit'>Register</button>
            </form>
            <p className=''>
                Already have an account? <Link to='/login'>Sign In</Link>
            </p>
        </div>
    );

};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { signup })(Signup);
