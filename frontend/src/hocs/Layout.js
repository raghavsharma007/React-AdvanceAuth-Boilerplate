import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../actions/auth';

function Layout(props) {
    useEffect((props) => {
        const fetchData = async () => {
            try {
                await props.checkAuthenticated();
                await props.load_user();
            } catch (err) {

            }
        }
        fetchData();
    }, []);

    return (
        <div className="block sm:grid grid-cols-5 gap-2">
            <NavBar />
            {props.children}
        </div>
    )
}

export default connect(null, {checkAuthenticated, load_user})(Layout)
