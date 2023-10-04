// Hook for return news json data

import { useEffect, useState } from "react";

const useNews = () => {
	const [newses, setNewses] = useState([]);

	useEffect(() => {
		fetch("/news.json")
			.then(res => res.json())
			.then(data => setNewses(data));
	}, []);

	return newses;
};

export default useNews;
