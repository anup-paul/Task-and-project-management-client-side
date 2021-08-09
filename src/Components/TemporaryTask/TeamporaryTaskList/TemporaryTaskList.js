import React from 'react';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const TemporaryTaskList = () => {
    let history = useHistory()

    const handleAddTemporaryTask = (e) => {
        e.preventDefault();
        history.push("/addTemporaryTask")
        console.log("clicked");
    }
    return (
        <>
            <div>
                <h2 className="text-center my-4" ><b>Temporary Task List</b></h2>
            </div>
            <div className="d-flex justify-content-center" >
                <div className="row w-50 mt-3" >
                    <div className="d-flex justify-content-between" >
                        <form className="d-flex">
                            <input className="form-control w-75 me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                        <button
                            className="btn btn-outline-primary"
                            onClick={(e) => handleAddTemporaryTask(e)}
                        > <FontAwesomeIcon icon={faPlus} /> Add Temporary Task

                        </button>
                    </div>
                    <table className="table mt-3">
                        <thead className="table-primary" >
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Project Category Name</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Action Type</option>
                                        <option value="1">Edit</option>
                                        <option value="2">Move to Project Task</option>
                                        <option value="3">Move to Temporary Task</option>
                                        <option value="4">Delete</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Action Type</option>
                                        <option value="1">Edit</option>
                                        <option value="2">Move to Project Task</option>
                                        <option value="3">Move to Temporary Task</option>
                                        <option value="4">Delete</option>
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

export default TemporaryTaskList;