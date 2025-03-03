import { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        gender: "",
        subjects: { english: false, maths: false, physics: false },
        resume: null,
        url: "",
        selectedOption: "",
        about: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
        
        if (!formData.contact) newErrors.contact = "Contact is required";
        else if (!/^\d{10,}$/.test(formData.contact)) newErrors.contact = "Enter a valid 10-digit number";
        
        if (!formData.resume) newErrors.resume = "Resume is required";
        
        if (!formData.url) newErrors.url = "URL is required";
        else if (!/^https?:\/\/[^\s$.?#].[^\s]*$/.test(formData.url)) newErrors.url = "Invalid URL format";
        
        if (!formData.selectedOption) newErrors.selectedOption = "Please select an option";
        if (!formData.about.trim()) newErrors.about = "Tell us about yourself";

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        
        if (type === "file") {
            setFormData({ ...formData, [name]: files[0] });
        } else if (type === "checkbox") {
            setFormData({
                ...formData,
                subjects: { ...formData.subjects, [name]: checked },
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log(formData);
        alert("Form submitted successfully!");
    };

    const handleReset = () => {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            gender: "",
            subjects: { english: false, maths: false, physics: false },
            resume: null,
            url: "",
            selectedOption: "",
            about: "",
        });
        setErrors({});
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold text-green-700 mb-4 text-center">Form Validation in React</h1>
            <form onSubmit={handleSubmit}>
                {[
                    { label: "First Name*", name: "firstName", type: "text" },
                    { label: "Last Name*", name: "lastName", type: "text" },
                    { label: "Email*", name: "email", type: "email" },
                    { label: "Contact*", name: "contact", type: "number" },
                    { label: "Enter URL*", name: "url", type: "url" },
                ].map(({ label, name, type }) => (
                    <div key={name} className="mb-3">
                        <label className="block font-semibold text-start">{label}</label>
                        <input
                            type={type}
                            name={name}
                            className="w-full p-2 border border-gray-300 rounded"
                            value={formData[name]}
                            onChange={handleChange}
                        />
                        {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
                    </div>
                ))}

                <label className="block font-semibold text-start">Gender*</label>
                <div className="mb-3 flex gap-3">
                    {["male", "female", "other"].map((gen) => (
                        <label key={gen}>
                            <input
                                type="radio"
                                name="gender"
                                value={gen}
                                checked={formData.gender === gen}
                                onChange={handleChange}
                            /> {gen.charAt(0).toUpperCase() + gen.slice(1)}
                        </label>
                    ))}
                </div>

                <label className="block font-semibold text-start">Best Subject</label>
                <div className="mb-3 flex gap-3">
                    {Object.keys(formData.subjects).map((sub) => (
                        <label key={sub}>
                            <input
                                type="checkbox"
                                name={sub}
                                checked={formData.subjects[sub]}
                                onChange={handleChange}
                            /> {sub.charAt(0).toUpperCase() + sub.slice(1)}
                        </label>
                    ))}
                </div>

                <label className="block font-semibold text-start">Upload Resume*</label>
                <input
                    type="file"
                    name="resume"
                    className="w-full p-2 border border-gray-300 rounded mb-3"
                    onChange={handleChange}
                />
                {errors.resume && <p className="text-red-500 text-sm">{errors.resume}</p>}

                <label className="block font-semibold text-start">Select your choice</label>
                <select
                    name="selectedOption"
                    className="w-full p-2 border border-gray-300 rounded mb-3"
                    value={formData.selectedOption}
                    onChange={handleChange}
                >
                    <option value="" disabled>Select your option</option>
                    <optgroup label="Beginners">
                        <option value="1">HTML</option>
                        <option value="2">CSS</option>
                        <option value="3">JavaScript</option>
                    </optgroup>
                    <optgroup label="Advanced">
                        <option value="4">React</option>
                        <option value="5">Node</option>
                        <option value="6">Express</option>
                        <option value="7">MongoDB</option>
                    </optgroup>
                </select>
                {errors.selectedOption && <p className="text-red-500 text-sm">{errors.selectedOption}</p>}

                <label className="block font-semibold text-start">About</label>
                <textarea
                    name="about"
                    className="w-full p-2 border border-gray-300 rounded mb-3"
                    onChange={handleChange}
                    value={formData.about}
                    placeholder="Tell us about yourself"
                ></textarea>
                {errors.about && <p className="text-red-500 text-sm">{errors.about}</p>}

                <div className="flex justify-between">
                    <button
                        type="reset"
                        className="px-4 py-2 bg-gray-500 text-white rounded"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-600 text-white rounded"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;
