import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Cart from "./features/cart/Cart";
import Menu, {loader as menuLoader} from './features/menu/Menu';
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import Home from "./ui/Home";
import AppLayout from "./ui/Applayout";
// import { Children } from "react";


const router = createBrowserRouter([
	{
		element: <AppLayout />,
	
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/menu",
        element: <Menu />,
        loader: menuLoader
				
			},
			{ path: "/cart", element: <Cart /> },
			{
				path: "/order/new",
				element: <CreateOrder />,
				
			},
			{
				path: "/order/:orderId",
				element: <Order />,
				
			},
		],
	},
]);


function App() {

  
   
  return <RouterProvider router={router}/>
  
}
 
export default App;