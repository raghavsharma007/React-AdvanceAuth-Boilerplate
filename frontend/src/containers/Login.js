import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

function Login({login, isAuthenticated}) {

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


    if (isAuthenticated)
        return <Redirect to='/' />;


    return (
        <div className="col-span-4">
            <h1>Sign In</h1>
            <p>Sign into your account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className="flex flex-col w-1/2 mx-auto border-2 p-5 rounded-lg shadow-md">
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
            {
                isAuthenticated ? <h1>true</h1> : <h1>false</h1>
            }
        </div>
    )
}

const mapStateToProps = state=> ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(Login)
