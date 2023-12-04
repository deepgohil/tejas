import Footer from "./components/Footer";
import LeftSideBar from "./components/LeftSideBar";
import TopMenuBar from "./components/TopMenuBar";
import ViewPage from "./components/ViewPage";
import ActivePageProvider from "./contexts/ActivePageContext";

function App() {
	return (
		<ActivePageProvider>
			<div className="h-screen grid grid-cols-mobile xl:grid-cols-g-t-c-2 grid-rows-g-t-r-3 ">
				<TopMenuBar />
				<LeftSideBar />
				<ViewPage />
				<Footer />
			</div>
		</ActivePageProvider>
	);
}

export default App;
