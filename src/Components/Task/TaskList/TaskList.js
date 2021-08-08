import React from 'react';

const TaskList = () => {
    return (
        <div className="d-flex justify-content-center" >
            <div className="row w-75 mt-3" >
                <table className="table mt-3">
                    <thead className="table-primary" >
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Task Name</th>
                            <th scope="col">Assign</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TaskList;