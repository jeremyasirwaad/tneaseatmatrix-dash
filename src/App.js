import logo from "./logo.svg";
import "./App.css";
import { DataCard } from "./Components/DataCard/DataCard";
import { IframeCard } from "./Components/IframeCard/IframeCard";
import { useEffect, useState } from "react";

function App() {
	const [stats, setStats] = useState({});

	useEffect(() => {
		getdata();
	}, []);

	const getdata = async () => {
		const data = await fetch("https://tneaseatmatrix.com/api/list/seats")
			.then(res => res.json())
			.then(res2 => {
				setStats(res2);
			});
	};

	return <div className="Dashboard">
			<div className="Dashboard-grid">
				<DataCard title={"Total No of Seats"} data={stats.intake} />
				<DataCard title={"Total Government Seats"} data={stats.govt} />
				<DataCard title={"Total Management Seats"} data={stats.management} />
				<DataCard title={"Total Surrender Seats"} data={stats.surrender} />
				<DataCard title={"Total SW Total Seats"} data={stats.sws} />
				<DataCard title={"Personal Details Filled"} data={stats.perd} />
				{/* <DataCard title={"Bank Details Filled"} data={stats.bankd} /> */}
				<DataCard title={"Course Details"} data={stats.cour} />
				<DataCard title={"Phase 1 Freezed"} data={stats.Phase1Freeze} />
				<DataCard title={"Declearation Filled"} data={stats.dec} />
				<DataCard title={"Document Uploaded"} data={stats.doc} />
				<DataCard title={"Phase 2 Freezed"} data={stats.Phase2Freeze} />

				{/* <IframeCard
					src={
						<iframe
							src="http://64.227.184.234:3000/d-solo/f5079f94-8175-466c-b6bf-49170acab9b3/home?orgId=1&from=1682927798430&to=1682949398430&theme=light&panelId=123128"
							width="100%"
							height="100%"
							frameborder="0"
						></iframe>
					}
				/>
				<IframeCard
					src={
						<iframe
							src="http://64.227.184.234:3000/d-solo/f5079f94-8175-466c-b6bf-49170acab9b3/home?orgId=1&from=1682927205861&to=1682948805861&theme=light&panelId=123127"
							width="100%"
							height="100%"
							frameborder="0"
						></iframe>
					}
				/>
				<IframeCard
					src={
						<iframe
							src="http://64.227.184.234:3000/d-solo/f5079f94-8175-466c-b6bf-49170acab9b3/home?orgId=1&from=1682927279527&to=1682948879527&theme=light&panelId=123126"
							width="100%"
							height="100%"
							frameborder="0"
						></iframe>
					}
				/>
				<IframeCard
					src={
						<iframe
							src="http://64.227.184.234:3000/d-solo/f5079f94-8175-466c-b6bf-49170acab9b3/home?orgId=1&from=1682927318749&to=1682948918750&theme=light&panelId=123125"
							width="100%"
							height="100%"
							frameborder="0"
						></iframe>
					}
				/>
				<IframeCard
					src={
						<iframe
							src="http://64.227.184.234:3000/d-solo/f5079f94-8175-466c-b6bf-49170acab9b3/home?from=1682926608209&to=1682948208209&orgId=1&theme=light&panelId=123124"
							width="100%"
							height="100%"
							frameborder="0"
						></iframe>
					}
				/> */}
			</div>
		</div>;
}

export default App;
