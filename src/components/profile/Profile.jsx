import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Profile = () => {
    const { user } = use( AuthContext );
    return ( <div className='max-w-sm mx-auto'>
        Profile
        <p>{ user.email}</p>
    </div> );
};

export default Profile;