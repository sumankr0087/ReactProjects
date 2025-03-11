import React, { useState, useEffect } from 'react';

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(0);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes} mins ${seconds} secs`;
    };

    const startTimer = () => {
        if (!isRunning) {
            setIsRunning(true);
            const id = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
            setIntervalId(id);
        }
    };

    const stopTimer = () => {
        if (isRunning) {
            clearInterval(intervalId);
            setIsRunning(false);
            setIntervalId(0);
        }
    };

    const resetTimer = () => {
        clearInterval(intervalId);
        setIsRunning(false);
        setTime(0);
        setIntervalId(0);
    };

    useEffect(() => {
        return () => clearInterval(intervalId);
    }, [intervalId]);

    return (
        <div className="bg-gray-800 text-white p-6 rounded shadow-lg text-center">
            <h1 className="text-3xl font-bold mb-4">Stopwatch</h1>
            <span className="text-2xl font-mono bg-gray-700 py-2 px-4 rounded-lg">{formatTime(time)}</span>
            <div className="mt-6 flex space-x-4">
                <button
                    onClick={startTimer}
                    disabled={isRunning}
                    className={`px-4 py-2 rounded-lg text-white font-semibold transition duration-200 ${isRunning ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
                >
                    Start
                </button>
                <button
                    onClick={stopTimer}
                    disabled={!isRunning}
                    className={`px-4 py-2 rounded-lg text-white font-semibold transition duration-200 ${!isRunning ? 'bg-gray-500 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'}`}
                >
                    Stop
                </button>
                <button
                    onClick={resetTimer}
                    className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition duration-200"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Stopwatch;
