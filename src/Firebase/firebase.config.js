import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCtoEzPZYMdGZn5IfcZk4cF0UcjRZLVQxM",
	authDomain: "dragon-news-auth-73dd9.firebaseapp.com",
	projectId: "dragon-news-auth-73dd9",
	storageBucket: "dragon-news-auth-73dd9.appspot.com",
	messagingSenderId: "158103571447",
	appId: "1:158103571447:web:984e774ee788d63bcdbcf2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
