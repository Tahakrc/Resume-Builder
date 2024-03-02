/* eslint-disable react/jsx-no-duplicate-props */
import { useContext, useState } from 'react';
import { UserContext } from '../context/context';
import { Link } from 'react-router-dom';

const Personal = () => {
    const { saveUserData } = useContext(UserContext);
    const [formData, setFormData] = useState({
        FullName: '',
        email: '',
        phone: '',
        jobTitle: '',
        city: '',
        BirthDay: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = () => {
        saveUserData(formData);
    };
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-8">Personal Information</h1>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="fullName" className="block text-gray-700 font-bold">Full Name:</label>
                        <input
                            type="text"
                            id="fullName"
                            name="FullName"
                            placeholder="Full Name"
                            value={formData.FullName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="BirthDay" className="block text-gray-700 font-bold">Birth Day:</label>
                        <input
                            type="text"
                            id="BirthDay"
                            name="BirthDay"
                            placeholder="Birth Year(GG.AA.YYYY)"
                            value={formData.BirthDay}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-bold">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-gray-700 font-bold">Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="jobTitle" className="block text-gray-700 font-bold">Job Title:</label>
                        <input
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                            placeholder="Job Title"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="city" className="block text-gray-700 font-bold">City:</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>
                <div className="mt-6 flex justify-end">
                    <Link
                        to="/Education"
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

export default Personal