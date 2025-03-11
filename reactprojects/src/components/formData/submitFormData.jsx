import React, { useState } from 'react';

function SubmitFormData() {
    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');
    const [age, setAge] = useState('');
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData({ username, fullname, age });
        setUsername(''); 
        setFullname('');
        setAge('');
    };

    return (
        <div className="flex flex-col items-center p-6 bg-gray-900 text-white rounded-lg w-96 mx-auto mt-10 shadow-lg">
            <h1 className="text-3xl font-bold mb-4">User Form</h1>
            <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                <label className="mb-1">User Name:</label>
                <input 
                    type='text' 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    className="p-2 border rounded text-black mb-2"
                />
                <label className="mb-1">Full Name:</label>
                <input 
                    type='text' 
                    value={fullname} 
                    onChange={(e) => setFullname(e.target.value)} 
                    className="p-2 border rounded text-black mb-2"
                />
                <label className="mb-1">Age:</label>
                <input 
                    type='number' 
                    value={age} 
                    onChange={(e) => setAge(e.target.value)} 
                    className="p-2 border rounded text-black mb-4"
                />
                <button 
                    type="submit" 
                    className="p-2 bg-blue-500 hover:bg-blue-600 rounded text-white font-bold"
                >
                    Submit
                </button>
            </form>
            {submittedData && (
                <div className="mt-6 w-full bg-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-bold mb-2">Request sent to DB with below request data</h2>
                    <ul className="list-disc pl-5">
                        <li>User Name: {submittedData.username}</li>
                        <li>Full Name: {submittedData.fullname}</li>
                        <li>Age: {submittedData.age}</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SubmitFormData;
