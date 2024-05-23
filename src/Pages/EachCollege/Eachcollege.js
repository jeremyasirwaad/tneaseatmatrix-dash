import React, { useEffect, useState } from "react";
import "./Eachcollege.css";
import { DataGrid } from "@mui/x-data-grid";
import { AiFillUnlock } from "react-icons/ai";
import { FileDownloadCard } from "../../Components/FileDownloadCard/FileDownloadCard";
import { useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

export const Eachcollege = () => {
	const { id } = useParams();
	const [clgdata, setClgdata] = useState({});

	useEffect(() => {
		data();
	}, []);

	const data = async () => {
		const data = await fetch(`http://35.154.42.235/api/list/college/${id}`)
			.then((res) => res.json())
			.then((res2) => {
				setClgdata(res2[0]);
				console.log(res2[0]);
			});
	};

	const unlockp1 = async () => {
		console.log("clicked");
		const data = await fetch(`http://35.154.42.235/api/unlockp1/${id}`)
			.then((res) => res.json())
			.then((res2) => {
				if (res2.status) {
					toast.success("Successfully unlocked!");
				}
			});
	};

	const unlockp2 = async () => {
		const data = await fetch(`http://35.154.42.235/api/unlockp2/${id}`)
			.then((res) => res.json())
			.then((res2) => {
				if (res2.status) {
					toast.success("Successfully unlocked!");
				}
			});
	};

	const columns = [
		{ field: "courseCode", headerName: "Course Code" },
		{
			field: "courseName",
			headerName: "Course Name",
			valueFormatter: (params) => params.value.label,
			flex: 1
		},
		{
			field: "accredation",
			headerName: "Acc Stat",
			valueFormatter: (params) => params.value.label
		},
		{ field: "intake", headerName: "Total Intake" },
		{ field: "Govt", headerName: "Govenment" },
		{ field: "Surrender", headerName: "Surrender" },
		{ field: "Management", headerName: "Management " },
		{ field: "SWS", headerName: "SWS" },
		{ field: "Added", headerName: "Added " }
	];

	const rows = [
		{
			id: 1,
			ccode: 1,
			cname:
				"University Departments of Anna University, Chennai - CEG Campus, Sardar Patel Road, Guindy, Chennai 600 025",
			firstName: "Jon",
			age: 35
		},
		{
			id: 2,
			ccode: 2,
			cname:
				"University Departments of Anna University, Chennai - ACT Campus, Sardar Patel Road, Guindy, Chennai 600 025",
			firstName: "Cersei",
			age: 42
		},
		{
			id: 3,
			ccode: 3,
			cname:
				"School of Architecture and Planning, Anna University,Chennai 600025",
			firstName: "Jaime",
			age: 45
		},
		{
			id: 4,
			ccode: 4,
			cname:
				"StUniversity Departments of Anna University, Chennai - MIT Campus, Chrompet, Tambaram Taluk, Chengalpattu District 600 044ark",
			firstName: "Arya",
			age: 16
		},
		{
			id: 5,
			ccode: 5,
			cname:
				"Annamalai University Faculty of Engineering and Technology,Annamalai nagar,Cuddalore",
			firstName: "Daenerys",
			age: null
		},
		{
			id: 6,
			ccode: 6,
			cname:
				"University College of Engineering, Villupuram, Kakuppam, Villupuram District 605103 ",
			firstName: null,
			age: 150
		},
		{
			id: 7,
			ccode: 7,
			cname:
				"University College of Engineering, Tindivanam, Melpakkam, Tindivanam, Villupuram District 604001 ",
			firstName: "Ferrara",
			age: 44
		},
		{
			id: 8,
			ccode: 8,
			cname:
				"University College of Engineering, Arni, Arni to Devikapuram Road, Thatchur, Arni, Thiruvannamalai District 632326 ",
			firstName: "Rossini",
			age: 36
		},
		{
			id: 9,
			ccode: 9,
			cname:
				"University College of Engineering, Kancheepuram, Ponnerikarai Campus, NH4, Chennai-Bangalore Highway, Karaipettai Village & Post, Kancheepuram District 631552",
			firstName: "Harvey",
			age: 65
		}
	];

	return (
		<div className="eachcollegepage">
			<div>
				<Toaster />
			</div>
			<section className="collegeinfo">
				<h2>College Details</h2>
				<div className="centermargin">
					<div className="collegeinfoinner">
						<div className="collegeinfoele">
							<span>College Name</span>
							<input type="text" disabled value={clgdata.can} />
						</div>
						<div className="collegeinfoele">
							<span>College Code</span>
							<input type="text" disabled value={clgdata.ccode} />
						</div>
						<div className="collegeinfoele">
							<span>Email Address</span>
							<input type="text" disabled value={clgdata.Email} />
						</div>
						<div className="collegeinfoele">
							<span>Principal Name</span>
							<input type="text" disabled value={clgdata.PrincipalName} />
						</div>
						<div className="collegeinfoele">
							<span>College Type</span>
							<input type="text" disabled value={clgdata.Category} />
						</div>
						<div className="collegeinfoele"></div>
						<div className="collegeinfoelebtn"></div>
						<div className="collegeinfoelebtn">
							{clgdata.Phase1Freeze ? (
								<button
									className="unlockbtn"
									onClick={() => {
										unlockp1();
									}}
								>
									{" "}
									<AiFillUnlock style={{ marginRight: "10px" }} />
									Unlock Section 1
								</button>
							) : (
								<button
									className="unlockbtn"
									onClick={() => {
										toast.error("Already Unlocked");
									}}
								>
									{" "}
									<AiFillUnlock style={{ marginRight: "10px" }} />
									Unlocked !
								</button>
							)}
						</div>
					</div>
				</div>
			</section>
			<section className="collegeinfo">
				<h2>Course details</h2>
				<div
					style={{ height: "100vh", width: "100%", padding: "40px" }}
					className="tablediv"
				>
					{clgdata.CourseDetails == null ||
					clgdata.CourseDetails == undefined ? (
						"No data"
					) : (
						<DataGrid
							rows={clgdata.CourseDetails}
							columns={columns}
							pageSize={5}
							rowHeight={80}
							rowsPerPageOptions={[5]}
							hideFooter={true}
							style={{ backgroundColor: "white" }}
							getRowId={(row) => row.courseCode}
						/>
					)}
				</div>
				<div className="sec2unlockbtn">
					{clgdata.Phase2Freeze ? (
						<button
							className="unlockbtn"
							onClick={() => {
								unlockp2();
							}}
						>
							{" "}
							<AiFillUnlock style={{ marginRight: "10px" }} />
							Unlock Section 1
						</button>
					) : (
						<button
							className="unlockbtn"
							onClick={() => {
								toast.error("Already Unlocked");
							}}
						>
							{" "}
							<AiFillUnlock style={{ marginRight: "10px" }} />
							Unlocked !
						</button>
					)}
				</div>
			</section>
			<section className="collegeinfo">
				<h2>Documents</h2>
				<p style={{ marginLeft: "20px" }}>
					Click on the document images to download the document
				</p>

				<div className="filesgrid">
					{clgdata.docUrl?.seatMatrix && (
						<FileDownloadCard
							title={"Seatmatrix"}
							click={clgdata.docUrl.seatMatrix}
						/>
					)}
					{clgdata.docUrl?.AICTEApproval && (
						<FileDownloadCard
							title={"AICTE Approval"}
							click={clgdata.docUrl.AICTEApproval}
						/>
					)}
					{clgdata.docUrl?.AUAffiliation && (
						<FileDownloadCard
							title={"AUA Affiliation"}
							click={clgdata.docUrl.AUAffiliation}
						/>
					)}
					{clgdata.docUrl?.Accredation && (
						<FileDownloadCard
							title={"Accredation"}
							click={clgdata.docUrl.Accredation}
						/>
					)}
					{clgdata.docUrl?.Minority && (
						<FileDownloadCard
							title={"Minority"}
							click={clgdata.docUrl.Minority}
						/>
					)}
				</div>
			</section>
		</div>
	);
};
