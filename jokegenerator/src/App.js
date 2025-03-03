import Joke from "./components/Jokes";

function App() {
    return (
        <div className="bg-yellow-500 h-screen flex justify-center items-center">
            <div className="bg-green-700 p-6 text-center w-[40rem] text-white rounded-lg shadow-lg">
                <h1 className="text-lg font-bold mb-4">Joke Generator Using React and Joke API</h1>
                <Joke />
            </div>
        </div>
    );
}

export default App;
