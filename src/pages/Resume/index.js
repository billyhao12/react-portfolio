import React from "react";
import './style.css';
import billyResume from "./resume.pdf";

function Resume() {
    return <iframe title="resume" src={billyResume} />
}

export default Resume;