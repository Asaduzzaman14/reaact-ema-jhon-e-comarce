import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'



const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handelEmailBlur = event => {
        setEmail(event.target.value)
        console.log(email);
    }

    const handelPasswordBlur = event => {
        setPassword(event.target.value)
        console.log(password);
    }

    const handelconfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
        console.log(confirmPassword);

    }

    if (user) {
        navigate('/inventory')
    }

    const handelCreatUser = event => {
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
            .then((result) => {
                // const user = result.user
                console.log(result);
                console.log("this is result");
            })

        // createUserWithEmailAndPassword(email, password)

    }


    return (
        <div>

            <div className='form-contianer'>
                <div>
                    <h1 className='form-title'>SignUp</h1>

                    <form onSubmit={handelCreatUser}>

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
                            <input onBlur={handelconfirmPasswordBlur} type="password" name='password' required />
                        </div>
                        <p style={{ color: 'red' }}>
                            {error.message}

                        </p>
                        <input className='form-submit' type="Sign Up" value="Submit" />

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