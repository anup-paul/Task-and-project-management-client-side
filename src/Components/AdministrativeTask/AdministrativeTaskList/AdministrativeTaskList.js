import React from 'react';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const AdministrativeTaskList = () => {

    let history = useHistory()

    const handleAddAdministrativeTask = (e) => {
        e.preventDefault();
        history.push("/addAdministrativeTask");
        console.log("clicked");
    }

    return (
        <>
            <div>
                <h2 className="text-center my-4" >Administrative Task List</h2>
            </div>
            <div className="d-flex justify-content-center" >
                <div className="row w-75 mt-3" >
                    <div className="d-flex justify-content-between" >
                        <form className="d-flex">
                            <input className="form-control w-75 me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                        <button
                            className="btn btn-outline-primary"
                            onClick={(e) => handleAddAdministrativeTask(e)}
                        > <FontAwesomeIcon icon={faPlus} /> Add AddAdministrative Task
                        </button>
                    </div>
                    <table className="table mt-3">
                        <thead className="table-primary" >
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Administrative Task Name</th>
                                <th scope="col">Assign Member</th>
                                <th className="text-center" scope="col">Status</th>
                                <th className="text-center" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Action Type</option>
                                        <option value="1">pending</option>
                                        <option value="1">progress</option>
                                        <option value="1">complete</option>
                                    </select>
                                </td>
                                <td>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Action Type</option>
                                        <option value="1">Edit</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Action Type</option>
                                        <option value="1">pending</option>
                                        <option value="1">progress</option>
                                        <option value="1">complete</option>
                                    </select>
                                </td>
                                <td>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Action Type</option>
                                        <option value="1">Edit</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AdministrativeTaskList;