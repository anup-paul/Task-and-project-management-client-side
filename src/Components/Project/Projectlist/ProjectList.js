import React from 'react';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const ProjectList = () => {


    let history = useHistory()

    const handleAddProject = (e) => {
        e.preventDefault();
        history.push("/addProject")
        console.log("clicked");
    }

    return (
        <>
            <div>
                <h2 className="text-center my-4"><b>Project List</b></h2>
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
                            onClick={(e) => handleAddProject(e)}
                        > <FontAwesomeIcon icon={faPlus} /> Add Project
                        </button>
                    </div>
                    <table className="table mt-3">
                        <thead className="table-primary" >
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Client Logo</th>
                                <th scope="col">Project Name</th>
                                <th scope="col">Assign Member</th>
                                <th scope="col">Start Date</th>
                                <th scope="col">End Date</th>
                                <th className="text-center" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>logo <br />client name</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Action Type</option>
                                        <option value="1">Edit</option>
                                        <option value="2">Archive</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>logo <br />client name</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Action Type</option>
                                        <option value="1">Edit</option>
                                        <option value="2">Archive</option>
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

export default ProjectList;