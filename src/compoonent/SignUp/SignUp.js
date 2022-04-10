
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'


import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


// google
// const provider = new GoogleAuthProvider()
// const auth2 = getAuth()

const SignUp = () => {


    // sign in with google
    // const handelGoogleSignIn = e => {
    //     signInWithPopup(auth2, provider)
    //         .then(res => {
    //             console.log(res);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }



    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handelEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handelPasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handelConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)

    }

    if (user) {
        navigate('/shop')
    }

    const handelCreateUser = event => {
        event.preventDefault()


        if (password !== confirmPassword) {
            setError('your confirm password did not match')
            return
        }
        if (password.length < 6) {
            setError('password must be 6 character or longer')
            return
        }

        createUserWithEmailAndPassword(email, password)

    }



    return (
        <div>


            <div className='form-contianer'>
                <div>
                    <h1 className='form-title'>SignUp</h1>

                    <form onSubmit={handelCreateUser}>

                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input onBlur={handelEmailBlur} type="email" name='email' required />
                        </div>

                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input onBlur={handelPasswordBlur} type="password" name='password' required />
                        </div>

                        <div className='input-group'>
                            <label htmlFor="Confirm-password">Confirm Password</label>
                            <input onBlur={handelConfirmPasswordBlur} type="password" name='password' required />
                        </div>
                        <p style={{ color: 'red' }}>
                            {error}

                        </p>

                        <input className='form-submit' type="submit" value="Submit" />

                    </form>
                    <p>
                        Alradey have an account ? <Link className='form-link' to={'/login'}>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;