import { useContext, useState } from 'react';
import { UserContext } from '../context/context';
import { Link } from 'react-router-dom';
const Education = () => {
    const { saveUserData } = useContext(UserContext);
    const [formData, setFormData] = useState({
        School: '',
        SchoolBranch: '',
        Starting: '',
        Graduation: '',
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
    const currentYear = new Date().getFullYear();
    const years = Array.from(
        { length: currentYear - 1980 + 1 },
        (_, i) => currentYear - i
    );
    return (

        <div className="min-h-screen  flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-8">Education Info</h1>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="school" className="block text-gray-700 font-bold">School Name:</label>
                        <input
                            type="text"
                            name="School"
                            placeholder="School Name"
                            value={formData.School}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="schoolBranch" className="block text-gray-700 font-bold">School Branch:</label>
                        <input
                            type="text"
                            name="SchoolBranch"
                            placeholder="School Branch"
                            value={formData.SchoolBranch}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="StartingYear" className="block text-gray-700 font-bold">Starting Year:</label>
                        <select
                            id="StartingYear"
                            name="Starting"
                            value={formData.Starting}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        >
                            <option value="">Select Year</option>
                            {years.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="graduationYear" className="block text-gray-700 font-bold">Graduation Year:</label>
                        <select
                            id="graduationYear"
                            name="Graduation"
                            value={formData.Graduation}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        >
                            <option value="">Select Year</option>
                            {years.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="mt-6 flex justify-end">
                    <Link
                        to="/Experience"
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

export default Education