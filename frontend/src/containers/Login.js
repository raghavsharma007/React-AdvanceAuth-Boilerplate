import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

function Login({login}) {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData;

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    }

    //check if user authenticated?
    //redirect to home


    return (
        <div className="">
            <h1>Sign In</h1>
            <p>Sign into your account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className="flex flex-col w-1/3 mx-auto">
                    <input
                        type="email"
                        placeholder="email"
                        value={email}
                        className="p-2 border border-gray-500 rounded-lg focus:outline-none focus:shadow-outline"
                        name="email"
                        onChange={e => onChange(e)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        className="p-2 my-3 border border-gray-500 rounded-lg focus:outline-none focus:shadow-outline"
                        name="password"
                        onChange={e => onChange(e)}
                        required
                    />
                    <button className="bg-blue-500 hover:bg-blue-700 p-2 rounded border-blue-700 text-white w-1/2">Login</button>
                </div>
            </form>
            <p>
                Don't have an account?<Link to="/signup">Sign Up</Link>
            </p>
            <p>
                Forgot your password?<Link to="/reset_password">Reset Password</Link>
            </p>
        </div>
    )
}

// const mapStateToProps = state=> ({
//     is authenticated
// })

export default connect(null, {login})(Login)
