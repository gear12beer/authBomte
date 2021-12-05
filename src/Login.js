import React, {useState} from "react";
import { GoogleLogin, GoogleLogout } from 'react-google-login' ;

export default function Login(){

    const clientId = "72686779336-on4fmi2qn3c4rp4dvstvv1k0u7p0m3bd.apps.googleusercontent.com";
    
    const [showloginButton, setShowloginButton] = useState(true) ;
    const [showlogoutButton, setShowlogoutButton] = useState(false) ;

    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj) ;
        setShowloginButton(false) ;
        setShowlogoutButton(true) ;
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res) ;
    };

    const onSignoutSuccess = () => {
        alert("You have been signed out successfully") ;
        setShowloginButton(true) ;
        setShowlogoutButton(false) ;
        console.clear() ;
    };
    
    return (
        <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                /> : null}

            
            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }

        </div>
    )
}