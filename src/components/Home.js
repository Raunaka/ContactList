import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
    const contacts = useSelector((state) => state);
    const dispatch = useDispatch();

    const deleteContact = (id) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id });
        toast.success('Contact deleted successfully!');
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5 text-end">
                    <Link to="/add" className="btn btn-outline-dark">
                        Add Contact
                    </Link>
                </div>
                {contacts.map((contact) => (
                    <div key={contact.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{contact.name}</h5>
                                <p className="card-text">
                                    <strong>Email:</strong> {contact.email}
                                    <br />
                                    <strong>Number:</strong> {contact.number}
                                </p>
                            </div>
                            <div className="card-footer text-end">
                                <Link
                                    to={`/edit/${contact.id}`}
                                    className="btn btn-primary me-2"
                                >
                                    Edit
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => deleteContact(contact.id)}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
