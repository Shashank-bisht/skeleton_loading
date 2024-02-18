import React, { useEffect } from 'react'
import { useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import icon from '../assets/react.svg'
import Userskeletom from './Userskeletom';
const User = () => {
    const [profile, setProfile] = useState(null)

    useEffect(() => {
        if (profile === null) {
            setTimeout(async () => {
                const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
                const data = await res.json()
                setProfile(data)
            }, 5000)
        }
    }, [profile]) // Only re-run the effect when profile changes

    return (
        <div className='user'>
            <h2>User detail</h2>
            {profile ? (
                <div className='profile' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={icon} alt="" />
                    <h3>{profile.name }</h3>
                    <p>{profile.email }</p>
                    <a href={profile.website}>{profile.website}</a>
                </div>
            ) : (
                <Userskeletom />
            )}
        </div>
    )
}




export default User
