import { useContext, useState } from 'react';
import { UserContext } from '../context/context';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
const Skills = () => {
    const { saveUserData } = useContext(UserContext);
    const [formData, setFormData] = useState({
        SkillsList: [],
        Skills: '',

    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleClick = () => {
        toast.success("Ekleme Başarılı.Tekrar Ekleyebilirsiniz !", {
        });
        saveUserData(formData)
        setFormData((prevData) => ({
            ...prevData,
            SkillsList: [
                ...prevData.SkillsList,
                {
                    Skills: prevData.Skills,
                }
            ],
            Skills: '',
        }));
    };
    const handleSubmit = () => {
        handleClick()
        saveUserData(formData.SkillsList);
    };
    return (
        <div className="min-h-screen  flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-8">Skills Info</h1>
                <div className="space-y-4">
                    <div className="flex ">
                        <input
                            type='text'
                            rows="10"
                            cols="50"
                            name="Skills"
                            placeholder="Tell us about your skills"
                            value={formData.Skills}
                            onChange={handleChange}
                            className="w-full mr-4 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>,
                <div className="w-full flex justify-center items-center">
                    <button onClick={handleClick} className="w-full  rounded-xl py-2 border-2 text-xl font-bold cursor-pointer">EKLE</button>
                </div>
                <div className="mt-6 flex justify-end">
                    <Link
                        to="/SocialMedia"
                        onClick={handleSubmit}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Next
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Skills