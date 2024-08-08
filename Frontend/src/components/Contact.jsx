// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from './Navbar';

// function Contact() {
//     const navigate = useNavigate();

//     return (
//         <>
//             <Navbar />
//             <div className="container mx-auto p-4">
//                 <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
//                     <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Contact Us</h1>
//                     <p className="mb-4 text-gray-800 dark:text-gray-300">
//                         If you have any questions, please contact us at <a href="mailto:contact@eventx.com" className="text-blue-500">contact@eventx.com</a>.
//                     </p>
//                     <form className="space-y-4">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
//                             <input type="text" className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300" />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
//                             <input type="email" className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300" />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
//                             <textarea className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300"></textarea>
//                         </div>
//                         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send Message</button>
//                     </form>
//                     <button onClick={() => navigate(-1)} className="mt-4 text-gray-500 dark:text-gray-300 hover:underline">
//                         Go Back
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Contact;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Contact() {
    const navigate = useNavigate();

    // State to handle form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Replace this URL with your backend or email service API endpoint
            const response = await fetch('https://your-backend-or-email-service.com/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Clear form
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the message.');
        }
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                    <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Contact Us</h1>
                    <p className="mb-4 text-gray-800 dark:text-gray-300">
                        If you have any questions, please contact us at <a href="mailto:contact@eventx.com" className="text-blue-500">contact@eventx.com</a>.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                            Send Message
                        </button>
                    </form>
                    <button onClick={() => navigate(-1)} className="mt-4 text-gray-500 dark:text-gray-300 hover:underline">
                        Go Back
                    </button>
                </div>
            </div>
        </>
    );
}

export default Contact;
