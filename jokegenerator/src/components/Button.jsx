import React from "react";

const Button = (props) => {
    return (
        <button 
            className="bg-[#70a03a] hover:bg-[#97df53] text-white text-base p-3 px-6 rounded-lg w-64"
            onClick={props.callApi}
        >
            Click to generate a joke.
        </button>
    );
}


export default Button;
