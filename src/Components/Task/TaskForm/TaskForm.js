import React from 'react';


const TaskForm = () => {
    return (
        <div>
            <div className="d-flex justify-content-center my-3" >
                <form className="w-50  border border-primary border-4 p-5 needs-validation" novalidate>
                    <div>
                        <label for="validationCustom05" className="form-label">Add Task</label>
                        <select className="form-select" id="validationCustom05" aria-label="Default select example">
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
                        <label for="validationCustom09" className="form-label">Task</label>
                        <textarea rows="4" type="text" className="form-control" id="validationCustom09" placeholder="Task" />
                    </div>
                    <div className="">
                        <label for="validationCustom04" className="form-label">Assign</label>
                        <input type="email" className="form-control" id="validationCustom02" placeholder="Not assign" />
                    </div>
                    <div className="">
                        <label for="validationCustom02" className="form-label">End date and Time</label>
                        <input type="date" className="form-control" id="validationCustom02" placeholder="Start date and time" />
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