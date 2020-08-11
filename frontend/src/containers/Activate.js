  import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../actions/auth';

const Activate = (props) => {
    const [verified, setVerified] = useState(false);

    const verify_account = e => {
        const uid = props.match.params.uid;
        const token = props.match.params.token;

        props.verify(uid, token);
        setVerified(true);
    };

    if (verified)
        return <Redirect to='/' />
    return (
        <div className=''>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',marginTop: '200px' }}>
                <h1>Verify your Account:</h1>
                <button 
                    onClick={e => {verify_account(e)}}
                    style={{ marginTop: '50px' }}
                    type="button"
                    className="border border-blue-800 rounded-full p-2 bg-blue-800 uppercase text-white"
                >
                    Verify
                </button>
            </div>
        </div>
    );
};

export default connect(null, { verify })(Activate);