import { useContext, useState } from 'react';
import { UserContext } from '../context/context';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useNavigate } from "react-router-dom";

const Download = () => {
    const { saveUserData, userData } = useContext(UserContext);
    const navigate = useNavigate();
    console.log(userData)

    const downloadPdfDocument = async () => {
        const element = document.getElementById('download'),
            canvas = await html2canvas(element),
            data = canvas.toDataURL('image/jpg'),
            link = document.createElement('a');

        link.href = data;
        link.download = 'downloaded-image.jpg';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    const leavePage = () => {
        localStorage.clear()
        navigate("/");
    }


    return (
        <div className="container mx-auto p-8  ">
            <div className='flex justify-around space-x-4 mt-4 w-full'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white w-32 font-bold py-2 px-4 rounded' onClick={downloadPdfDocument}>Download</button>
                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={leavePage}>Left</button>
            </div>
            <div className="grid grid-cols-1 h-[auto] w-[210mm] mx-auto border-2  bg-white md:grid-cols-3 " id='download' >
                <div className="md:col-span-1 h-full bg-gray-100">
                    <div className="p-6  h-auto">
                        <div className="flex items-center justify-center ">
                            <div className="w-32 h-32 bg-gray-500 rounded-full"></div>
                        </div>
                        <h1 className="text-3xl font-bold text-center text-gray-800 mt-4 ">{userData.FullName}</h1>
                        <h2 className="text-xl font-semibold text-center text-gray-700 ">{userData.jobTitle}</h2>
                        <p className="text-lg font-medium  text-gray-700 capitalize">{userData.BirthDay}</p>
                        <p className="text-lg font-medium  text-gray-700 capitalize">{userData.phone}</p>
                        <p className="text-lg font-medium  text-gray-700 capitalize">{userData.email}</p>
                        <div className="mt-4">
                            {userData.socialMediaList.map((item, index) => (
                                item.SocialMediaURL && item.SocialMediaURL.trim() !== "" && (
                                    <div key={index} className="text-left">
                                        <p className="text-lg font-medium  text-gray-700 capitalize">{item.SocialMediaURL}</p>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                    <div className="p-6 bg-gray-100">
                        <h1 className="text-2xl font-bold  text-center text-gray-800  ">Education</h1>
                        <p className="text-lg font-medium  text-gray-700 capitalize mt-4 ">{userData.School}</p>
                        <p className="text-lg font-medium  text-gray-700 capitalize ">{userData.SchoolBranch}</p>
                        <p className="text-lg font-medium  text-gray-700 capitalize ">{userData.city}</p>
                        <p className="text-lg font-medium  text-gray-700 capitalize ">{userData.Starting} - {userData.Graduation}</p>
                    </div>
                    <div className="p-6 bg-gray-100">
                        <h1 className="text-2xl font-bold text-center text-gray-800 ">Languages</h1>
                        {userData.LanguagesList.map((item, index) => (
                            item.Languages && item.LanguageLevel.trim() !== "" && (
                                <div className="flex justify-between items-center mt-2 " key={index}>
                                    <p className="capitalize text-lg font-semibold text-gray-700 sm:px-2 ">{item.Languages}</p>
                                    <p className="capitalize text-lg font-semibold text-gray-700">{item.LanguageLevel}</p>
                                </div>
                            )
                        ))}
                    </div>
                </div>
                <div className="md:col-span-2">
                    <div className="bg-white  p-8">
                        <h1 className="text-3xl font-semibold italic text-gray-800">Skills Info</h1>
                        <div className="h-2 w-full rounded bg-gray-500 mt-4"></div>
                        <ul className="mt-4">
                            {userData.SkillsList.map((item, index) => (
                                item.Skills && item.Skills.trim() !== "" && (
                                    <li key={index} className="capitalize text-lg py-1 font-semibold text-gray-700">{item.Skills}</li>
                                )
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-8 mt-8">
                        <h1 className="text-3xl font-semibold italic text-gray-800">Work Experience</h1>
                        <div className="h-2 w-full rounded bg-gray-500 mt-4"></div>
                        {userData.WorkList.map((item, index) => (
                            item.Company && item.Position && item.Description.trim() !== "" && (
                                <div key={index} className="mt-4">
                                    <div className="flex justify-between items-center">
                                        <h1 className="text-2xl font-semibold capitalize text-gray-700">{item.Company}</h1>
                                        <h2 className="text-xl capitalize text-gray-700">{item.Position}</h2>
                                    </div>
                                    <p className="text-lg font-medium text-gray-700 mt-2">{item.Description}</p>
                                </div>
                            )
                        ))}

                    </div>
                    <div className="bg-white  p-8 mt-8">
                        <div>
                            <h1 className="text-3xl font-semibold italic text-slate-800">Projects</h1>
                            <div className="h-2 w-full rounded bg-gray-500 mt-4"></div>
                            {userData.ProjectsList.map((item, index) => (
                                item.Project && item.ProjectDesc && item.ProjectDesc.trim() !== "" && (
                                    <div key={index} className="mt-4">
                                        <div className="flex justify-between items-center">
                                            <h1 className="text-2xl capitalize text-gray-700">{item.Project}</h1>
                                        </div>
                                        <p className="text-lg font-medium capitalize text-gray-700 mt-2">{item.ProjectDesc}</p>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Download

