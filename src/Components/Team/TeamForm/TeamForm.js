import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const TeamForm = () => {
    return (
        <div>
            <div className="d-flex justify-content-center my-3" >
                <form className="w-50  border border-primary border-4 p-5 needs-validation" novalidate>
                    <div className="">
                        <label for="validationCustom01" className="form-label">Team Name <b style={{ color: "red" }} >*</b></label>
                        <input type="text" className="form-control" id="validationCustom01" placeholder="Enter team Name" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="d-flex justify-content-between" >
                        <div>
                            <label for="validationCustom02" className="form-label">Select team member</label>
                            <select className="form-select " id="validationCustom02" aria-label="Default select example">
                                <option selected> Select team member</option>
                                <option value="1">Employee One</option>
                                <option value="2">Employee Two</option>
                                <option value="3">Employee Three</option>
                            </select>
                        </div>
                        <div className="">
                            <label for="validationCustom01" className="form-label">Employee Roll</label>
                            <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Employee Role" required />

                        </div>
                        <div>
                            <button className="btn" ><FontAwesomeIcon style={{ color: "red" }} icon={faPlus} /></button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                        <button className="btn btn-primary" type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TeamForm;