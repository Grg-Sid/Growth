import React, { useState } from "react";
// import { sections, information } from "../../Data";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
// import { TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { Select } from "@mui/material";

const ResumeFormat = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [dataObj, setDataObj] = useState({
    name: "Pushkar Khare",
    email: "kharepushkar2804@gmail.com",
    mobile: "9026114143",
    currentJobTitle: "Web developer",
  });

  const [name, setName] = useState("Pushkar Khare");
  const [email, setemail] = useState("kharepushkar2804@gmail.com");
  const [mobile, setMobile] = useState("9026114143");
  const [summaryDet, setSummaryDet] =
    useState(`Optional: Summary paragraph highlighting your accomplishments,
  experience, tuned to target job/role. Key Accomplishments or skills
  can be included with bullets.`);

  const handleChangeResume = (e) => {
    const { name, value } = e.target;
    setDataObj({ ...dataObj, [name]: value });
  };

  const sections = {
    basicInfo: "Basic Info",
    experience: "Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };

  const companyWork = [
    {
      companyName: "Google",
      jobTitle: "",
      address: "",
      startYear: "",
      endYear: "",
      desc: "",
      role: [],
    },
  ];
  //   const [name, setName] = useState("");
  //   const [name, setName] = useState("");
  //   const [name, setName] = useState("");
  //   const [name, setName] = useState("");
  //   const [name, setName] = useState("");
  //   const [name, setName] = useState("");
  //   const [name, setName] = useState("");
  //   const [name, setName] = useState("");
  // Sections

  return (
    <div className="resumeWrap">
      <div className="resume-template">
        {/* Name section */}
        <div className=" bigFont">{dataObj.name}</div>
        <div className="">
          <span className=" ">{dataObj.email}</span>
          <span className=" space">{dataObj.mobile}</span>
        </div>
        <div>{dataObj.currentJobTitle}</div>
        {/* heading */}
        <div className="wrapHeading">
          <div className="headingResume">{sections.summary}</div>
          <div>{dataObj.summary}</div>
        </div>
        {/* heading */}
        <div className="wrapHeading">
          <div className="headingResume">{sections.experience}</div>
          {/* Company */}
          {companyWork.map((data) => {
            return (
              <>
                <div className="flex-seperate">
                  <span className="subHeadingResume">
                    {dataObj.companyName}
                  </span>
                  <span className="subHeadingResume">{dataObj.address}</span>
                </div>
                <div>{data.desc}</div>
                {/* jobs */}
                <div className="jobs">
                  <div className="flex-seperate">
                    <span className="subsubHeadingResume">{data.jobTitle}</span>
                    <span>
                      {data.startYear}-{data.endYear}
                    </span>
                  </div>
                  <ul>
                    <li>{data.role}</li>
                    {/* <li>bla bla bla blabla</li>
                    <li>bla bla bla blabla</li> */}
                  </ul>
                </div>
              </>
            );
          })}
        </div>
        <div className="wrapHeading">
          <div className="headingResume">Education</div>
          <div className="subHeadingResume">Stanford Graduate</div>
          <ul>
            <li>lba</li>
            <li>lba</li>
          </ul>
        </div>
        <div className="wrapHeading">
          <div className="headingResume">Additional</div>
          <ul>
            <li>lba</li>
            <li>lba</li>
          </ul>
        </div>
      </div>
      <div className="heading">
        <span className="middle">Contact Information</span>
        <div className="inputData">
          {/* Name */}
          <TextField
            label="Full Name"
            variant="standard"
            value={dataObj.name}
            name="name"
            onChange={handleChangeResume}
          />
          {/* Email */}
          <TextField
            label="Email"
            type="email"
            name="email"
            onChange={handleChangeResume}
            value={dataObj.email}
            variant="standard"
            autoComplete="username"
            //   sx={{ m: 1, width: "50ch" }}
          />
          {/* Mobile */}
          <TextField
            label="Mobile"
            type="number"
            variant="standard"
            name="mobile"
            onChange={handleChangeResume}
            value={dataObj.mobile}
            // autoComplete="username"
            //   sx={{ m: 1, width: "50ch" }}
          />
          {/* Current Job Title */}
          <TextField
            label="Job title"
            variant="standard"
            name="currentJobTitle"
            onChange={handleChangeResume}
            value={dataObj.currentJobTitle}
            autoComplete="username"
            //   sx={{ m: 1, width: "50ch" }}
          />
          {/* summary */}
          <TextField
            label="Summary"
            variant="standard"
            name="summary"
            onChange={handleChangeResume}
            value={dataObj.summary}
            autoComplete="username"
            //   sx={{ m: 1, width: "50ch" }}
          />
          {/* Company */}
          <TextField
            label="Company Name"
            variant="standard"
            name="companyName"
            onChange={handleChangeResume}
            value={dataObj.companyName}
            autoComplete="username"
            //   sx={{ m: 1, width: "50ch" }}
          />
          <button className="btnAdd">+ Add a Company</button>
        </div>
      </div>
    </div>
  );
};

export default ResumeFormat;
