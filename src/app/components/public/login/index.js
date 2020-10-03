import React, { useState, useEffect } from 'react';
import SVG from 'react-inlinesvg';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './style.scss';
import { loginWihCredentials } from 'app/api';
import { users, tweets, likes, following } from 'app/api/dumpData';
import Logo from 'assets/img/logo.svg';

export default function Login() {
    const [loginForm, setLoginForm] = useState({
        identifier: '',
        password: ''
    });
    const [isSubmitting, setLoading] = useState(false);
    const [errorText, setErrorText] = useState('');
    const dispatch = useDispatch();
    const route = useHistory();

    async function handleSubmit(event) {
        setErrorText('');
        setLoading(true);
        event.preventDefault();
        const response = await dispatch(loginWihCredentials(loginForm));
        if (response === 'USER_NOT_FOUND') {
            setErrorText('Wrong user identifier. Check your email/username/phone with password');
            setLoading(false);
        } else {
            route.replace('/home');
        }
    }

    useEffect(() => {
        // dumpe data to localstoage once first load of the application
        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify(users))
        }
        if (!localStorage.getItem('tweets')) {
            localStorage.setItem('tweets', JSON.stringify(tweets))
        }
        if (!localStorage.getItem('likes')) {
            localStorage.setItem('likes', JSON.stringify(likes))
        }
        if (!localStorage.getItem('following')) {
            localStorage.setItem('following', JSON.stringify(following))
        }
        return () => {
            console.log('Login unmounted')
        }
    }, [])

    return (
        <div className="login-wrapper">
            <SVG alt="logo" src={Logo} className="logo" />
            <h2>Login into Twitter</h2>
            {/* Login Form */}
            { errorText && <p>{errorText}</p>}
            <form onSubmit={(event) => handleSubmit(event)}>
                <input placeholder="Phone, email or username" value={loginForm.identifier} type="text" onChange={(event) =>
                    setLoginForm({ ...loginForm, identifier: event.target.value })

                } disabled={isSubmitting} />
                <input placeholder="password" type="password" value={loginForm.password} autoComplete="password" onChange={(event) =>
                    setLoginForm({ ...loginForm, password: event.target.value })
                } disabled={isSubmitting} />
                <button type="submit" className={'login' + (isSubmitting ? '-validating' : '')} disabled={loginForm.identifier.length === 0 || loginForm.password.length === 0}>
                    {isSubmitting ? '' : 'Login'}
                    {
                        isSubmitting && <div className="spinner"></div>
                    }
                </button>
            </form>
            <div className="login-action">
                {/* Not imeplemented the route so pointing to '/' */}
                <span><Link to="/">Forgot Password?</Link></span>
                <span> · <Link to="/">Signup for Twitter</Link></span>
            </div>
        </div>
    )
}
