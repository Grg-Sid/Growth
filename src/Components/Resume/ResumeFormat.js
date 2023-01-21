import React, { useState } from "react";
// import { sections, information } from "../../Data";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";

const ResumeFormat = () => {
  const [name, setName] = useState("Pushkar Khare");
  const [email, setemail] = useState("kharepushkar2804@gmail.com");
  const [mobile, setMobile] = useState("9026114143");
  const [summaryDet, setSummaryDet] =
    useState(`Optional: Summary paragraph highlighting your accomplishments,
  experience, tuned to target job/role. Key Accomplishments or skills
  can be included with bullets.`);
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
        <div className="middle bigFont">{name}</div>
        <div className="middle">
          <span className="middle space ">{email}</span>
          <span className="middle space">{mobile}</span>
        </div>
        {/* heading */}
        <div className="wrapHeading">
          <div className="headingResume">{sections.summary}</div>
          <div>{summaryDet}</div>
        </div>
        {/* heading */}
        <div className="wrapHeading">
          <div className="headingResume">{sections.experience}</div>
          {/* Company */}
          {companyWork.map((data) => {
            return (
              <>
                <div className="flex-seperate">
                  <span className="subHeadingResume">{data.companyName}</span>
                  <span className="subHeadingResume">{data.address}</span>
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
      <div className="inputData">
        Name
        <TextField label="Full Name" variant="standard" />
        {/* Email */}
        <TextField
          label="Email"
          type="email"
          variant="standard"
          autoComplete="username"
          //   sx={{ m: 1, width: "50ch" }}
        />
        {/* Mobile */}
        <TextField
          label="Mobile"
          type="number"
          variant="standard"
          // autoComplete="username"
          //   sx={{ m: 1, width: "50ch" }}
        />
        {/* Current Job Title */}
        <TextField
          label="Job title"
          variant="standard"
          autoComplete="username"
          //   sx={{ m: 1, width: "50ch" }}
        />
        {/* Address */}
        <TextField
          label="Address"
          variant="standard"
          autoComplete="username"
          //   sx={{ m: 1, width: "50ch" }}
        />
      </div>
    </div>
  );
};

export default ResumeFormat;
