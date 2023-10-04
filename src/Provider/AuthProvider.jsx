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
	const [loading, setLoading] = useState(true);

	// Creat user
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// use sign in

	const userLogin = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// use sign out
	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	// Update uer profile
	const updateUserProfile = (name, photo) => {
		setLoading(true);
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};

	//google signin
	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};
	//github signin
	const githubSignIn = () => {
		setLoading(true);

		return signInWithPopup(auth, githubProvider);
	};

	// Get currentlu sign in user
	useEffect(() => {
		setLoading(true);
		const unsubcribe = onAuthStateChanged(auth, currentUser => {
			console.log("Observe current user", currentUser);
			setUser(currentUser);
			setLoading(false);
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
		loading,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node,
};

export default AuthProvider;
