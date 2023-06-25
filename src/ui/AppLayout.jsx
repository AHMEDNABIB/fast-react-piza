import Header from "./Header";
// import Loader from "./Loader";
import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";

function AppLayout() {
	return (
		<div>
			<Header />

			<Outlet />

			<CartOverview />
		</div>
	);
}

export default AppLayout;
