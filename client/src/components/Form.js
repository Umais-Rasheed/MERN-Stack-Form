import React, { useState } from 'react';
import './style.css';

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const collectData = async (e) => {
        e.preventDefault();
        try {
            let result = await fetch('http://localhost:4000/', {
                method: 'POST',
                body: JSON.stringify({ name, email, password }),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            result = await result.json(); // Ensure this is a function call
            localStorage.setItem("user", JSON.stringify(result));

            // Clear input fields
            setName("");
            setEmail("");
            setPassword("");

            // Optional: Show a success message
            alert("Data submitted successfully!");
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    }

    return (
        <div className='container'>
            <form onSubmit={collectData}>
                <h2 className='text-center pt-3'>SIGNUP FORM</h2>
                <div className='mb-3 mt-3'>
                    <label className='form-label'>Username</label>
                    <input
                        type='text'
                        className='form-control'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input
                        type='email'
                        className='form-control'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input
                        type='password'
                        className='form-control'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn btn-success'>Submit</button>
            </form>
        </div>
    );
}

export default Form;
