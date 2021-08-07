import React from 'react';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ProjectList = () => {

    let history = useHistory()

    const handleAddProject = (e) => {
        e.preventDefault();
        history.push("/addProjectForm")
        console.log("clicked");
    }

    return (
        <div className="d-flex justify-content-center" >
            <div className="row w-75 mt-3" >
                <div className="d-flex justify-content-end" >
                    <button
                        className="btn btn-outline-primary"
                        onClick={(e)=>handleAddProject(e)}
                    > <FontAwesomeIcon icon={faPlus} /> Add project
                         
                    </button>
                </div>
                <table className="table mt-3">
                    <thead className="table-primary" >
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Project Name</th>
                            <th scope="col">Assign to</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td><FontAwesomeIcon icon={faEdit} style={{color:"blue"}} /></td>
                            <td><FontAwesomeIcon icon={faTrashAlt} style={{color:"red"}} /></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@mdo</td>
                            <td><FontAwesomeIcon icon={faEdit} style={{color:"blue"}} /></td>
                            <td><FontAwesomeIcon icon={faTrashAlt} style={{color:"red"}} /></td>
                        </tr>
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProjectList;