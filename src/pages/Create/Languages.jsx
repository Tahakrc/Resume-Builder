import { Link } from "react-router-dom"
import { useContext, useState } from 'react';
import { UserContext } from '../context/context';
import { toast } from "react-toastify";

const Languages = () => {
    const { saveUserData } = useContext(UserContext);
    const [formData, setFormData] = useState({
        LanguagesList: [],
        Languages: '',
        LanguageLevel: '',
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
            LanguagesList: [
                ...prevData.LanguagesList,
                {
                    Languages: prevData.Languages,
                    LanguageLevel: prevData.LanguageLevel,
                }
            ],
            Languages: '',
            LanguageLevel: '',
        }));
    };
    const handleSubmit = () => {
        handleClick()
        saveUserData(formData.LanguagesList);
    };
    return (
        <div className="min-h-screen  flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-8">Languages Info</h1>
                <div className="space-y-4 ">
                    <div>
                        <label htmlFor="Languages" className="block text-gray-700 font-bold">Languages:</label>
                        <input
                            type="text"
                            name="Languages"
                            value={formData.Languages}
                            onChange={handleChange}
                            placeholder="English,Spanish vs vs."
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <select name="LanguageLevel" className="border-2 px-2 py-1 w-full" onChange={handleChange}>
                        <option value="Beginner" selected >Beginner</option>
                        <option value="İntermediate">İntermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                    <div className="w-full flex justify-center items-center">
                        <button onClick={handleClick} className="w-full  rounded-xl py-2 border-2 text-xl font-bold cursor-pointer">EKLE</button>
                    </div>
                    <div className="mt-6 flex justify-end">
                        <Link
                            to={'/Projects'}
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

export default Languages