import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { eventDetailsData } from './EventDetails'; // Ensure correct path

const BookingPage = () => {
    const { eventId } = useParams();
    const navigate = useNavigate();
    const event = eventDetailsData[eventId];

    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        phone: '',
        paymentMode: '',
        paymentDetails: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission and payment processing here
        alert('Booking confirmed!'); // Replace this with actual booking logic
    };

    const handleGoBack = () => {
        navigate(-1); // Go back to the previous page
    };

    if (!event) {
        return <div>Event not found</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Booking for {event.name}</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={userDetails.name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={userDetails.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={userDetails.phone}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300">Mode of Payment</label>
                        <select
                            name="paymentMode"
                            value={userDetails.paymentMode}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            required
                        >
                            <option value="">Select Payment Method</option>
                            <option value="card">Credit/Debit Card</option>
                            <option value="upi">UPI</option>
                            <option value="paypal">PayPal</option>
                            <option value="netbanking">Net Banking</option>
                        </select>
                    </div>
                    {userDetails.paymentMode && (
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300">
                                {userDetails.paymentMode === 'card'
                                    ? 'Card Details'
                                    : userDetails.paymentMode === 'upi'
                                    ? 'UPI Number'
                                    : userDetails.paymentMode === 'paypal'
                                    ? 'PayPal Email'
                                    : 'Net Banking Details'}
                            </label>
                            <input
                                type="text"
                                name="paymentDetails"
                                value={userDetails.paymentDetails}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                required
                                placeholder={
                                    userDetails.paymentMode === 'card'
                                        ? 'Card Number'
                                        : userDetails.paymentMode === 'upi'
                                        ? 'Enter UPI Number'
                                        : userDetails.paymentMode === 'paypal'
                                        ? 'Enter PayPal Email'
                                        : 'Enter Net Banking Details'
                                }
                            />
                        </div>
                    )}
                    <button
                        type="submit"
                        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 duration-200"
                    >
                        Confirm Booking
                    </button>
                </form>
                <div className="mt-4">
                    <button
                        onClick={handleGoBack}
                        className="px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-600 duration-200"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
