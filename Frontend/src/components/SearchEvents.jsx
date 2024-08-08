// src/components/SearchEvents.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchEvents = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        const fetchedResults = await fetch(`/api/events?search=${query}`).then(res => res.json());
        setResults(fetchedResults);
        setLoading(false);
    };

    return (
        <div className="relative">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="grow outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                placeholder="Search For Events"
            />
            <button onClick={handleSearch} disabled={loading}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70 text-gray-900 dark:text-gray-100"
                >
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            {results.length > 0 && (
                <ul className="absolute bg-white dark:bg-gray-800 mt-2 w-full border rounded-md">
                    {results.map((event) => (
                        <li key={event._id} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600">
                            <Link to={`/event-details/${event._id}`} className="text-gray-900 dark:text-gray-100">
                                {event.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchEvents;
