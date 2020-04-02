import React from 'react';

class AuthRedirect extends React.Component {

    render() {
        console.log('AuthRedirect props', this.props);
        return (
            <div> 
                Redirectirng...
            </div>
        )
    }

}

export default AuthRedirect;