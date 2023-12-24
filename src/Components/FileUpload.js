import React, { useState } from 'react';

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if(selectedFile.size <= 2 * 1024 * 1024) {
        setFile(selectedFile);
    } else {
        alert("file size shoule be less that or equal to 2 MB");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('image', file, file.name);
        console.log("formData = ", formData);
      try {
        // Make a POST request to your backend API endpoint to store the file
        const response = await fetch('http://localhost:8080/files/upload', {
          method: 'POST',
          body: formData
        });

        // Handle the response as needed
        console.log('File uploaded successfully', response);
      } catch (error) {
        console.error('Error uploading file', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} accept='.jpg, .jpeg, .png' />
      <button type="submit">Upload</button>
    </form>
  );
}

export default FileUpload;