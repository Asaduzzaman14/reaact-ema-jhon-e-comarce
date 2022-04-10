import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {

    const [user] = useAuthState(auth)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    // const [error, setError] = useState('')

    // const navigate = useNavigate()

    // const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    // const handelEmailBlur = event => {
    //     setEmail(event.target.value)
    // }

    const handelAddressBlur = event => {
        setAddress(event.target.value)
    }

    const handelPhoneBlur = event => {
        setPhone(event.target.value)

    }
    const handelNameBlur = e => {
        setName(e.target.value)
    }
    const handelCreateUser = event => {
        event.preventDefault()
        const shipping = { name, email, address, phone }
        console.log(shipping);

    }
    return (
        <div className='form-contianer'>
            <div>
                <h1 className='form-title'>Shiping inforamtion</h1>

                <form onSubmit={handelCreateUser}>

                    <div className='input-group'>
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handelNameBlur} type="text" name='email' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="name">Your Email</label>
                        <input value={user?.email} readOnly type="email" name='email' required />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="Address">Address</label>
                        <input onBlur={handelAddressBlur} type="text" name='Address' required />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="Confirm-password">Phone Number</label>
                        <input onBlur={handelPhoneBlur} type="text" name='Phone' required />
                    </div>
                    {/* <p style={{ color: 'red' }}>
                        {error}

                    </p> */}

                    <input className='form-submit' type="submit" value="Add Shipping" />

                </form>

            </div>
        </div>
    );
};

export default Shipment;