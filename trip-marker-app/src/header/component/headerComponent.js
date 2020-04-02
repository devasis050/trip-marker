import React from 'react';
import {getFbOauthUrl, getUserUrl} from '../../util/url';
import axios from 'axios';
import {updateUserAction} from '../action/userAction';
import {connect} from 'react-redux';
import Cookies from 'js-cookie';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const userSessionCookie = Cookies.get('userSession');
        if(userSessionCookie) {
            axios.post(getUserUrl(), {userSession:userSessionCookie}).then(res => {
                if(res.status === 200) {
                    this.props.dispatch(updateUserAction(res.data));
                }
            })
        }

    }

    render() {
        console.log('user in render', this.props.user);
        const isUserAuthenticated = this.props.user && this.props.user.isAuthenticated;
        return (
            <div className='row h-10 container-fluid'>
                <table className='w-100'>
                    <thead>
                        <tr>
                            <td>
                                <div>Face</div>
                            </td>
                            {isUserAuthenticated && 
                                (<td className='justify-content-center d-flex'>
                                    <span>Welcome {this.props.user.name}</span>
                                </td>)
                            }
                            
                            <td>
                                {!isUserAuthenticated ? (
                                    <a href={getFbOauthUrl()} className='btn btn-primary btn-sm float-right'>
                                        <span className="fa fa-facebook"></span> Login with faccebook
                                    </a>
                                ) : (
                                    <button className='btn btn-link btn-sm float-right'>Logout</button>
                                )}
                                
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }

}

function mapStateToProps(store) {
    return {
        user: store.user
    }
}

const ConnectedHeader = connect(mapStateToProps)(Header);

export default ConnectedHeader;