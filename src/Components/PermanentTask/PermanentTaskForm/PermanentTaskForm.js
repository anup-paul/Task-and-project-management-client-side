import React from 'react';

const PermanentTaskForm = () => {
    return (
        <>
            <div>
                <div className="d-flex justify-content-center my-3" >
                    <form className="w-50  border border-primary border-4 p-5 needs-validation" novalidate>
                        <h3 className="text-center mb-4" ><b>Add Permanent Task</b></h3>
                        <div className="">
                            <label for="validationCustom01" className="form-label">Permanent Task <b style={{ color: "red" }} >*</b></label>
                            <textarea rows="4" type="text" className="form-control" id="validationCustom01" placeholder="Enter Permanent Task" required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div>
                            <label for="validationCustom02" className="form-label">Select Employee</label>
                            <select className="form-select " id="validationCustom02" aria-label="Default select example">
                                <option selected>Select Employee</option>
                                <option value="1">Employee One</option>
                                <option value="2">Employee Two</option>
                                <option value="3">Employee Three</option>
                            </select>
                        </div>
                        <div className="d-flex justify-content-end mt-3">
                            <button className="btn btn-primary" type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default PermanentTaskForm;