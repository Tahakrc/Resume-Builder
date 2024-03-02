import { useContext, useState } from 'react';
import { UserContext } from '../context/context';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const SocialMedia = () => {
    const { saveUserData } = useContext(UserContext);
    const [formData, setFormData] = useState({
        socialMediaList: [],
        socialMedia: '',
        socialMediaURL: '',
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
            socialMediaList: [
                ...formData.socialMediaList,
                {
                    SocialMedia: formData.socialMedia,
                    SocialMediaURL: formData.socialMediaURL,
                }
            ],
            socialMedia: '',
            socialMediaURL: '',
        }));
    };

    const handleSubmit = () => {
        handleClick()
        saveUserData(formData.socialMediaList);
    };

    return (
        <div className="min-h-screen  flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-8">Social Media Info</h1>
                <div className="space-y-4 flex flex-col">
                    <div>
                        <label htmlFor="SocialMedia" className="block text-gray-700 font-bold">Social Media Name:</label>
                        <input
                            type="text"
                            name="socialMedia"
                            placeholder="Social Media Name"
                            value={formData.socialMedia}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="SocialMediaURL" className="flex flex-col text-gray-700 font-bold">SocialMediaURL: </label>
                        <input
                            type="text"
                            name="socialMediaURL"
                            placeholder="Your SocialMediaURL"
                            value={formData.socialMediaURL}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <button onClick={handleClick} className="w-full  rounded-xl py-2 border-2 text-xl font-bold cursor-pointer">EKLE</button>
                    </div>
                    <div className="mt-6 flex justify-end">
                        <Link
                            to={'/Languages'}
                            onClick={handleSubmit}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Next
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;
