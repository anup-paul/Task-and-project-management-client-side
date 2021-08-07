import React from 'react';

const ProjectForm = () => {
    return (
        <div>
            <div>
                <div className="dropdown d-flex justify-content-end m-3">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                       Project Category
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">E-Commerce</a></li>
                        <li><a class="dropdown-item" href="#">School Management</a></li>
                        <li><a class="dropdown-item" href="#">Travel Agency</a></li>
                    </ul>
                </div>
            </div>
            <div className="d-flex justify-content-center my-3" >
                <form className="w-50  border border-primary border-4 p-5 needs-validation" novalidate>
                    <div className="">
                        <label for="validationCustom01" className="form-label">Project Name <b style={{color:"red"}} >*</b></label>
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
                        <input type="text" className="form-control" id="validationCustom07" placeholder="Enter Clients"/>
                    </div>
                    <div className="">
                        <label for="validationCustom08" className="form-label">Sell Value</label>
                        <input type="number" className="form-control" id="validationCustom08" placeholder="Enter Sell value" />
                    </div>

                    <div className="">
                        <label for="validationCustom09" className="form-label">Project Description</label>
                        <textarea rows="4" type="text" className="form-control" id="validationCustom09" placeholder="Enter Project Description" />
                    </div>
                    <div className="">
                        <label for="validationCustom010" className="form-label">Project Image</label>
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