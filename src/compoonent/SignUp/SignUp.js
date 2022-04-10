import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const handelEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handelPasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handelconfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    const handelCreatUser = event => {
        event.preventDefault()
        if (password !== confirmPassword)
            setError('your confirm password did not match')
        console.log(error);
        return

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
                            {error ? error : ''}

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