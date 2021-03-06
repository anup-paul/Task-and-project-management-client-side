import React from 'react';


const TaskForm = () => {
    return (
        <div>
            <div className="d-flex justify-content-center my-3" >
                <form className="w-50  border border-primary border-4 p-5 needs-validation" novalidate>
                    <h3 className="text-center mb-4" ><b>Add Project Task</b></h3>
                    <div>
                        <label for="validationCustom01" className="form-label">Project</label>
                        <select className="form-select" id="validationCustom01" aria-label="Default select example">
                            <option selected> select project</option>
                            <option value="1">project One</option>
                            <option value="2">project Two</option>
                            <option value="3">project Three</option>
                        </select>
                    </div>
                    <div className="">
                        <label for="validationCustom02" className="form-label">Start date and Time</label>
                        <input type="date" className="form-control" id="validationCustom02" placeholder="Start date and time" />
                    </div>
                    <div className="">
                        <label for="validationCustom03" className="form-label">Project Task</label>
                        <textarea rows="4" type="text" className="form-control" id="validationCustom03" placeholder="Project Task" />
                    </div>
                    <div className="">
                        <label for="validationCustom04" className="form-label">Assign</label>
                        <select className="form-select" id="validationCustom04" aria-label="Default select example">
                            <option selected> select Team</option>
                            <option value="1">Employee One</option>
                            <option value="2">Employee Two</option>
                            <option value="3">Employee Three</option>
                        </select>

                    </div>
                    <div className="">
                        <label for="validationCustom05" className="form-label">End date and Time</label>
                        <input type="date" className="form-control" id="validationCustom05" placeholder="Start date and time" />
                    </div>
                    <div className="">
                        <label for="validationCustom06" className="form-label">Attach File</label>
                        <input type="file" className="form-control" id="validationCustom06" placeholder="Enter Project Description" />
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                        <button className="btn btn-primary" type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskForm;