import { useContext, useState } from 'react';
import { UserContext } from '../context/context';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Experience = () => {
    const { saveUserData } = useContext(UserContext);
    const [formData, setFormData] = useState({
        WorkList: [],
        socialMedia: '',
        socialMediaURL: '',
        Description: '',
    });

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
            WorkList: [
                ...formData.WorkList,
                {
                    Company: formData.Company,
                    Position: formData.Position,
                    Description: formData.Description,
                }
            ],
            Company: '',
            Position: '',
            Description: '',
        }));
    };

    const handleSubmit = () => {
        handleClick()
        saveUserData(formData.WorkList);
    };
    return (
        <div className="min-h-screen  flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-8">Work Experience Info</h1>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="Company" className="block text-gray-700 font-bold">Company Name:</label>
                        <input
                            type="text"
                            name="Company"
                            placeholder="Company Name"
                            value={formData.Company}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="Position" className="block text-gray-700 font-bold">Position:</label>
                        <input
                            type="text"
                            name="Position"
                            placeholder="Your Position"
                            value={formData.Position}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="Description" className="block text-gray-700 font-bold">Description:</label>
                        <textarea
                            name="Description"
                            placeholder='Your Description About Your Job '
                            value={formData.Description}
                            onChange={handleChange}
                            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
                        />
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <button onClick={handleClick} className="w-full  rounded-xl py-2 border-2 text-xl font-bold cursor-pointer">EKLE</button>
                    </div>
                </div>
                <div className="mt-6 flex justify-end">
                    <Link
                        to="/Skills"
                        onClick={handleSubmit}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Next
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default Experience