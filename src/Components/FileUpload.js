import React, { useEffect, useState } from "react";
import LargeFileInput from "./Dropzone";
import DisplayInfo from "./DisplayInfo";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [idDetails, setIdDetails] = useState(null);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile.size <= 2 * 1024 * 1024) {
      setFile(selectedFile);
    } else {
      alert("file size shoule be less that or equal to 2 MB");
    }
  };

  const handleSubmit = async (file) => {
    console.log("file = ", file);
    const formData = new FormData();
    formData.append("image", file, file.name);
    try {
      // Make a POST request to your backend API endpoint to store the file
      const response = await fetch("http://localhost:8080/files/upload", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());
      // Handle the response as needed
      console.log("File uploaded successfully", response);
      setIdDetails(response?.response);
      setShowModal(true);
    } catch (error) {
      console.error("Error uploading file", error);
    }
  };

  const handleAddOCR = async (idDetails) => {
    if(idDetails){
        await fetch("http://localhost:8080/OCR/addOCR", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(idDetails)
          })
    }
  }

  useEffect(() => {
    if(idDetails){
        handleAddOCR(idDetails);
    }
  }, [idDetails])

  useEffect(() => {
    if (file) {
      handleSubmit(file);
    }
  }, [file]);

  return (
    <>
      <LargeFileInput handleFileChange={handleFileChange} />
      {showModal && <DisplayInfo idDetails={idDetails} setShowModal={setShowModal} showModal={showModal}/>}
    </>
  )
}

export default FileUpload;
