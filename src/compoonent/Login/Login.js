import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    const handelEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handelPasswordBlur = (e) => {
        setPassword(e.target.value)
    }

    if (user) {
        navigate('/shop')
    }

    const handelSignIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
        console.log(password);
    }


    return (
        <div className='form-contianer'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={handelSignIn}>

                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handelEmailBlur} type="email" name='email' required />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handelPasswordBlur} type="password" name='password' required />
                    </div>

                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>loading....</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />

                </form>
                <p>new to Ema-jhon? <Link className='form-link' to={'/signup'}>Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;