import React from 'react';

const ProjectForm = () => {
    return (
        <div>
            <div className="d-flex justify-content-center my-3" >
                <form className="w-50  border border-primary border-4 p-5 needs-validation" novalidate>
                <h3 className="text-center mb-4" ><b>Add Project</b></h3>
                    <div>
                        <label for="validationCustom11" className="form-label">Project Category</label>
                        <select className="form-select" id="validationCustom11" aria-label="Default select example">
                            <option selected> Project Category</option>
                            <option value="1">E-Commerce Project</option>
                            <option value="2">School Management Project</option>
                            <option value="3">Travel Agency Project</option>
                        </select>
                    </div>
                    <div className="">
                        <label for="validationCustom01" className="form-label">Project Name <b style={{ color: "red" }} >*</b></label>
                        <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Project Name" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="">
                        <label for="validationCustom02" className="form-label">Project URL</label>
                        <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Project URL" />
                    </div>
                    <div className="">
                        <label for="validationCustom03" className="form-label">Start date</label>
                        <input type="date" className="form-control" id="validationCustom03" />
                    </div>
                    <div className="">
                        <label for="validationCustom04" className="form-label">End Date</label>
                        <input type="date" className="form-control" id="validationCustom04" />
                    </div>
                    <div>
                        <label for="validationCustom05" className="form-label">Assign to team</label>
                        <select className="form-select" id="validationCustom05" aria-label="Default select example">
                            <option selected> select team</option>
                            <option value="1">Team One</option>
                            <option value="2">Team Two</option>
                            <option value="3">Team Three</option>
                        </select>
                    </div>
                    <div className="">
                        <label for="validationCustom06" className="form-label">Team member</label>
                        <textarea rows="4" type="text" className="form-control" id="validationCustom06" placeholder="Enter Team member" />
                    </div>
                    <div className="">
                        <label for="validationCustom07" className="form-label">Clients</label>
                        <textarea rows="4" type="text" className="form-control" id="validationCustom07" placeholder="Enter Clients" />
                    </div>
                    <div className="">
                        <label for="validationCustom08" className="form-label">Value</label>
                        <input type="number" className="form-control" id="validationCustom08" placeholder="Enter value" />
                    </div>

                    <div className="">
                        <label for="validationCustom09" className="form-label">Project Description</label>
                        <textarea rows="4" type="text" className="form-control" id="validationCustom09" placeholder="Enter Project Description" />
                    </div>
                    <div className="">
                        <label for="validationCustom010" className="form-label">Company Logo</label>
                        <input type="file" className="form-control" id="validationCustom010" placeholder="Enter Project Description" />
                    </div>

                    <div className="d-flex justify-content-end mt-3">
                        <button className="btn btn-primary" type="submit">Add Project</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProjectForm;