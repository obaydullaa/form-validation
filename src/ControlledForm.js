import React from 'react'
import { useState } from 'react'

export default function ControlledForm() {
    const initialData  = {
        fullName: '',
        userName: '',
        email: '',
        bdNumber: '',
        password: '',
        confirmPassword: '',
        webSlug: '',
        webUrl: '',
    }

    const [userData, setUserData] = useState(initialData);

    const handleChange = (evt) => {
        // console.log(evt.target.name, evt.target.value)
        setUserData({
            ...userData,
            [evt.target.name]: evt.target.value,
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
    }
     
    const {
            fullName, 
            userName, 
            email, 
            bdNumber,
            password, 
            confirmPassword,
            webSlug,
            webUrl
        } = userData;
  return (
    <div className='container' style={{width: 600, margin:'50pz auto'}}>
        
     <h2>Controlled Form React Form Validation</h2>
     <br/>

        <form onSubmit={handleSubmit}>
            <div>
                <input type="text"
                    placeholder='Full Name*'
                    name='fullName'
                    id='fullName'
                    value={fullName}
                    onChange={handleChange}
                />
                <input type="text"
                    placeholder='User Name*'
                    name='userName'
                    id='userName'
                    value={userName}
                    onChange={handleChange}
                />
            </div>
            <br/>

            <div>
                <input type="email"
                    placeholder='Email*'
                    name='email'
                    id='email'
                    value={email}
                    onChange={handleChange}
                />
                <input type="number"
                    placeholder='Bd Number*'
                    name='bdNumber'
                    id='bdNumber'
                    value={bdNumber}
                    onChange={handleChange}
                />
            </div>
            <br/>

            <div>
                <input type="password"
                    placeholder='Password*'
                    name='password'
                    id='password'
                    value={password}
                    onChange={handleChange}
                />
                <input type="password"
                    placeholder='Confirm Password*'
                    name='confirmPassword'
                    id='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                />
            </div>
            <br/>

            <div>
                <input type="url"
                    placeholder='Website URL*'
                    name='webUrl'
                    id='webUrl'
                    value={webUrl}
                    onChange={handleChange}
                />
                <input type="text"
                    placeholder='Slug*'
                    name='webSlug'
                    id='webSlug'
                    value={webSlug}
                    onChange={handleChange}
                />
            </div>
            <br/>
            <br/>
            <button type='submit' value='submit'>Submit</button>
        </form>

    </div>
  )
}
