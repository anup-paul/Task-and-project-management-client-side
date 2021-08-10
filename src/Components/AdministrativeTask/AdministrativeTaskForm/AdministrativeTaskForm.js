import React from 'react';

const AdministrativeTaskForm = () => {
    return (
        <div>
            <div className="d-flex justify-content-center my-3" >
                <form className="w-50  border border-primary border-4 p-5 needs-validation" novalidate>
                    <h3 className="text-center mb-4" ><b>Add Administrative Task</b></h3>
                    <div>
                        <label for="validationCustom01" className="form-label">Administrative work</label>
                        <select className="form-select" id="validationCustom01" aria-label="Default select example">
                            <option selected> select Administrative work</option>
                            <option value="1">Administrative work One</option>
                            <option value="2">Administrative work Two</option>
                            <option value="3">Administrative work Three</option>
                        </select>
                    </div>
                    <div className="">
                        <label for="validationCustom02" className="form-label">Start date and Time</label>
                        <input type="text" className="form-control" id="validationCustom02" placeholder="This date and time will set auto" />
                    </div>
                    <div className="">
                        <label for="validationCustom03" className="form-label">Administrative Task</label>
                        <textarea rows="4" type="text" className="form-control" id="validationCustom03" placeholder="Administrative Task" />
                    </div>

                    <div className="">
                        <label for="validationCustom05" className="form-label">End date and Time</label>
                        <input type="date" className="form-control" id="validationCustom05" placeholder="Start date and time" />
                    </div>

                    <div className="d-flex justify-content-end mt-3">
                        <button className="btn btn-primary" type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdministrativeTaskForm;