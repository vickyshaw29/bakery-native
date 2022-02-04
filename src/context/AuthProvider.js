import React, { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getAuth,
} from 'firebase/auth';

export const AuthContext = React.createContext();
const auth = getAuth();

const AuthProvider = ({ children }) => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    try {
      let loggedInUser = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(loggedInUser?.user, 'm logged in');
      if (loggedInUser) {
        setIsLoggedIn(true);
      }
      return loggedInUser;
    } catch (error) {
      console.log(error);
    }
  };
  const signUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };
  const logout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const val = {
    user,
    setUser,
    signUp,
    login,
    logout,
    isLoggedIn,
  };

  useEffect(() => {
    const unscubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unscubscribe;
  }, []);
  return (
    <AuthContext.Provider value={val}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
