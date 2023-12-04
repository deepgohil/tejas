import { createContext, useState } from "react";

export const ActivePageContext = createContext();

const ActivePageProvider = ({ children }) => {
	const [active, setActive] = useState("Home");

	return (
		<ActivePageContext.Provider value={{ active, setActive }}>
			{children}
		</ActivePageContext.Provider>
	);
};

export default ActivePageProvider;
