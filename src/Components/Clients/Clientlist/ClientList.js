import React from 'react';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ClientList = () => {

    let history = useHistory()

    const handleAddClient = (e) => {
        e.preventDefault();
        history.push("/addClient")
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
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                        <td>Thornton</td>
                    </tr>
                    
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ClientList;