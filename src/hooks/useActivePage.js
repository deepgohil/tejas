import { useContext } from "react";
import { ActivePageContext } from "../contexts/ActivePageContext";

// Custom Hook
export const useActivePage = () => {
	const context = useContext(ActivePageContext);

	if (context === undefined)
		throw new Error("Context was used outside it's provider.");

	return context;
};
