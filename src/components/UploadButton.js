import React from "react";
import { useNavigate } from "react-router-dom";

function UploadButton() {
  const navigate = useNavigate();

  const handleUploadButtonClick = () => {
    navigate("/upload");
  };

  return (
    <div className="upload-button" onClick={handleUploadButtonClick} style={{ cursor: "pointer" }}>
      <img src="/photo/upload.png" alt="UploadButton"/>
    </div>
  );
}

export default UploadButton;