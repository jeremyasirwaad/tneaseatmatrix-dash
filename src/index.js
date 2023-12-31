import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { SideNav } from "./Components/SideNav/SideNav";
import { TopBar } from "./Components/TopBar/TopBar";
import { FillednFilled } from "./Pages/Filled_NotFilled/FillednFilled";
import { Eachcollege } from "./Pages/EachCollege/Eachcollege";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />
	},
	{
		path: "/fillednotfilled",
		element: <FillednFilled />
	},
	{
		path: "/fillednotfilled/college/:id",
		element: <Eachcollege />
	}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<div className="Layout">
			<SideNav />
			<div className="Layout1">
				<TopBar />
				<RouterProvider router={router} />
			</div>
		</div>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
