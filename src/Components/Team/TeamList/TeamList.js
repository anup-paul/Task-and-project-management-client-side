import React from 'react';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const TeamList = () => {

    let history = useHistory()

    const handleMakeTeam = (e) => {
        e.preventDefault();
        history.push("/makeTeam")
        console.log("clicked");
    }

    return (
        <>
            <div>
                <h2 className="text-center my-4" ><b>Team List</b></h2>
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
                            onClick={(e) => handleMakeTeam(e)}
                        > <FontAwesomeIcon icon={faPlus} /> Make Team
                        </button>
                    </div>
                    <table className="table mt-3">
                        <thead className="table-primary" >
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Team Name</th>
                                <th scope="col">Team Members</th>
                                <th className="text-center" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark </td>
                                <td>Otto (Role)</td>
                                
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
                                <td>Thornton (Role)</td>
                                
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

export default TeamList;