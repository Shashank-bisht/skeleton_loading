import React, { useEffect } from 'react'
import { useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

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
                <div className='profile'>
                    <h3>{profile.name || <Skeleton/>}</h3>
                    <p>{profile.email || <Skeleton/>}</p>
                    <a href={profile.website}>{profile.website || <Skeleton/>}</a>
                </div>
            ) : (
                <SkeletonTheme baseColor="#aaadab" highlightColor="#444">
                <p>
                  <Skeleton count={3} />
                </p>
              </SkeletonTheme>
            )}
        </div>
    )
}

export default User
