import React from 'react';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectCategoryList = () => {

    let history = useHistory()

    const handleAddProjectCategory = (e) => {
        e.preventDefault();
        history.push("/addProjectCategoryForm")
        console.log("clicked");
    }

    return (
        <div className="d-flex justify-content-center" >
            <div className="row w-50 mt-3" >
                <div className="d-flex justify-content-end" >
                    <button
                        className="btn btn-outline-primary"
                        onClick={(e)=>handleAddProjectCategory(e)}
                    > <FontAwesomeIcon icon={faPlus} /> Add project Category
                         
                    </button>
                </div>
                <table className="table mt-3">
                    <thead className="table-primary" >
                        <tr>
                            <th scope="col"></th>
                            <th   scope="col">Project Category Name</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td><FontAwesomeIcon icon={faEdit} style={{color:"blue"}} /></td>
                            <td><FontAwesomeIcon icon={faTrashAlt} style={{color:"red"}} /></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td><FontAwesomeIcon icon={faEdit} style={{color:"blue"}} /></td>
                            <td><FontAwesomeIcon icon={faTrashAlt} style={{color:"red"}} /></td>
                        </tr>
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProjectCategoryList;