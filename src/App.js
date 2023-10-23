import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from 'react-router-dom';
import "./index.css"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import { useDispatch } from "react-redux";

const App = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true); // Add isLoading state

    useEffect(() => {
        const data = [];
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                json.forEach((contact) => {
                    data.push({
                        id: contact.id,
                        name: contact.name,
                        number: contact.phone,
                        email: contact.email
                    });
                });
                dispatch({ type: 'FETCH_CONTACTS', payload: data });
                setIsLoading(false); // Mark data as loaded
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false); // Mark data as loaded even if there's an error
            }
        };

        fetchData();
    }, [dispatch]);

    // Conditional rendering based on isLoading
    if (isLoading) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        );
    }

    return (
        <div className="App">
            <ToastContainer />
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/add" element={<AddContact />} />
                <Route path="/edit/:id" element={<EditContact />} />
            </Routes>
        </div>
    );
}

export default App;
