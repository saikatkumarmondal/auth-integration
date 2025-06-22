import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  
} from "firebase/auth";
import { auth } from '../firebase.init';

const AuthProvider = ( { children } ) => {
    const [ user, setUser ] = useState( null );
    const [ loading, setLoading ] = useState( true );

    const createUser = ( email, password ) => {
        setLoading( true );
      return createUserWithEmailAndPassword(auth, email, password)
        
    };
    const loginUser = ( email, password ) => {
        setLoading( true );
        return signInWithEmailAndPassword(auth, email, password).then(
            ( result ) => {
                const user = result.user;
                console.log( user );
                alert("LoggedIn Buddy")
          }
        ).catch( error => {
            console.log(error)
        });
    };

    // onAuthStateChanged( auth, ( currentUser ) => {
    //     if ( currentUser )
    //     {
    //         console.log('Currently user:-' ,currentUser )
    //     } else
    //     {
    //         console.log( "Not One Buddy" );
    //     }
    // });
    useEffect( () => {
        const unSubscribe = onAuthStateChanged( auth, currentUser => {
            console.log( "current user inside useEffect on auth state change ", currentUser )
            setUser( currentUser );
            setLoading( false );
        } );
        return () => {
            unSubscribe();
        }
    }, [] )
    const signOutUser = () => {
        setLoading( true );
        return signOut( auth );
    }

    const userInfo = {
        user,
        loading,
      createUser,
      loginUser,
      signOutUser,
    };
    return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;