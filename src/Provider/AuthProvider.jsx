import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";

// AuthContext
export const AuthContext = createContext();

//Provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
	// user state
	const [user, setUser] = useState(null);

	// Creat user
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// use sign in

	const userLogin = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	// use sign out
	const logOut = () => {
		return signOut(auth);
	};

	// Update uer profile
	const updateUserProfile = (name, photo) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};

	//google signin
	const googleSignIn = () => {
		return signInWithPopup(auth, googleProvider);
	};
	//github signin
	const githubSignIn = () => {
		return signInWithPopup(auth, githubProvider);
	};

	// Get currentlu sign in user
	useEffect(() => {
		const unsubcribe = onAuthStateChanged(auth, currentUser => {
			console.log("Observe current user", currentUser);
			setUser(currentUser);
		});

		return () => {
			unsubcribe();
		};
	}, []);

	// send this object as value
	const authInfo = {
		user,
		createUser,
		updateUserProfile,
		userLogin,
		logOut,
		googleSignIn,
		githubSignIn,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export default AuthProvider;
