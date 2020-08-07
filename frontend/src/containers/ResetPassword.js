import React, {useState} from 'react';
import {reset_password} from '../actions/auth';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

function ResetPassword({reset_password}) {
    const [formData, setFormData] = useState({
        email: ''
    });
    const {email} = formData;

    const [requestSent, setRequestSent] = useState(false);

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})

    }

    const onSubmit = (e) => {
        e.preventDefault();
        reset_password(email);
        setRequestSent(true);
    }

    if (requestSent){
        return <Redirect to='/' />
    }
    return (
        <div className="mx-5">
            <form onSubmit={e => onSubmit(e)}>
                <input 
                    type="email"
                    value={email}
                    onChange={e => onChange(e)}
                    name="email"
                    placeholder="Email"
                    className="p-2 border border-gray-500 rounded-lg focus:outline-none focus:shadow-outline"
                    required
                />
                <button className="block border border-gray-300 p-2 rounded bg-blue-700 text-white hover:bg-blue-600">Send</button>
            </form>
        </div>
    )
}

export default connect(null, {reset_password})(ResetPassword)
