import React from 'react';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ClientList = () => {

    let history = useHistory()

    const handleAddClient = (e) => {
        e.preventDefault();
        history.push("/addClientForm")
        console.log("clicked");
    }

    return (
        <div className="d-flex justify-content-center" >
        <div className="row w-75 mt-3" >
            <div className="d-flex justify-content-end" >
                <button
                    className="btn btn-outline-primary"
                    onClick={(e)=>handleAddClient(e)}
                > <FontAwesomeIcon icon={faPlus} /> Add Client
                     
                </button>
            </div>
            <table className="table mt-3">
                <thead className="table-primary" >
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Client Name</th>
                        <th scope="col">Client Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
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

export default ClientList;