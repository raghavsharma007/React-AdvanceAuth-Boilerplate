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
        <div className="container">
            <h1>Sign In</h1>
            <p>Sign into your account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="email"
                        value={email}
                        name="email"
                        onChange={e => onChange(e)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        name="password"
                        onChange={e => onChange(e)}
                        required
                    />
                    <button>Login</button>
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
