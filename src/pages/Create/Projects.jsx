import { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { UserContext } from "../context/context";
import { toast } from "react-toastify";

const Projects = () => {
    const { saveUserData } = useContext(UserContext);
    const [formData, setFormData] = useState({
        ProjectsList: [],
        Project: '',
        ProjectURL: '',
        ProjectDesc: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleClick = () => {
        toast.success("Ekleme Başarılı.Tekrar Ekleyebilirsiniz !", {});

        saveUserData(formData)
        setFormData((prevData) => ({
            ...prevData,
            ProjectsList: [
                ...formData.ProjectsList,
                {
                    Project: formData.Project,
                    ProjectURL: formData.ProjectURL,
                    ProjectDesc: formData.ProjectDesc,
                }
            ],
            Project: '',
            ProjectURL: '',
            ProjectDesc: '',
        }));
    };

    const handleSubmit = () => {
        handleClick()
        saveUserData(formData.ProjectsList);
    };
    return (
        <div className="min-h-screen  flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-8">Projects</h1>
                <div className="space-y-4 ">
                    <div>
                        <label htmlFor="Project" className="block text-gray-700 font-bold">Project Name:</label>
                        <input
                            type="text"
                            name="Project"
                            value={formData.Project}
                            onChange={handleChange}
                            placeholder="Project Name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="ProjectURL" className="block text-gray-700 font-bold">Project URL:</label>
                        <input
                            type="text"
                            name="ProjectURL"
                            value={formData.ProjectURL}
                            onChange={handleChange}
                            placeholder="Project URL"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="ProjectDesc" className="block text-gray-700 font-bold">Project Description:</label>
                        <textarea
                            name="ProjectDesc"
                            value={formData.ProjectDesc}
                            onChange={handleChange}
                            placeholder="Project Description"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <button onClick={handleClick} className="w-full  rounded-xl py-2 border-2 text-xl font-bold cursor-pointer">EKLE</button>
                    </div>
                    <div className="mt-6 flex justify-end">
                        <Link
                            to={'/Download'}
                            onClick={handleSubmit}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Next
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects