import { useState } from "react";

export default function Upload() {
    const [image, setImage] = useState(null); // State to store selected image file
    const [pdfOrDoc, setPdfOrDoc] = useState(null); // State to store selected PDF or DOC file
    const [imagePreview, setImagePreview] = useState(null); // State to store image preview
    const [filePreview, setFilePreview] = useState(null); // State to store file preview

    // Event handler for file selection
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile.type.includes("image") || selectedFile.type === "image/gif") {
            setImage(selectedFile);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setPdfOrDoc(selectedFile);
            setFilePreview(selectedFile.name);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-semibold text-gray-800">Upload PDF, Images or Docs</h1> 
            <div className="max-w-2xl w-full mx-auto"> 
                <div className="col-span-full">
                    <label htmlFor="file-upload" className="block text-sm font-medium leading-6 text-white">Select file</label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-white">
                        {imagePreview && (
                            <img src={imagePreview} alt="Selected" className="max-h-40 mx-auto mb-4" />
                        )}
                        {!imagePreview && filePreview && (
                            <p className="text-gray-800">{filePreview}</p>
                        )}
                        <div className="text-center">
                            <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                            </svg>
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                    <span>Select a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">PDF, DOC, DOCX, PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex justify-center"> 
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Start
                    </button>
                </div>
            </div>
        </div>
    );
}
