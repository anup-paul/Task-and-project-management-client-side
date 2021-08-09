import React from 'react';

const AdministrativeWorkForm = () => {
    return (
        <div>
             <div className="d-flex justify-content-center my-3" >
                <form className="w-50  border border-primary border-4 p-5 needs-validation" novalidate>
                    
                    <div className="">
                        <label for="validationCustom01" className="form-label">AdministrativeWork Name <b style={{ color: "red" }} >*</b></label>
                        <input type="text" className="form-control" id="validationCustom01" placeholder="Enter AdministrativeWork Name" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>

                    <div>
                        <label for="validationCustom02" className="form-label">Assign member</label>
                        <select className="form-select" id="validationCustom02" aria-label="Default select example">
                            <option selected> select employee</option>
                            <option value="1">employee One</option>
                            <option value="2">employee Two</option>
                            <option value="3">employee Three</option>
                        </select>
                    </div>
                    
                    <div className="">
                        <label for="validationCustom03" className="form-label">Start date</label>
                        <input type="date" className="form-control" id="validationCustom03" />
                    </div>
                    <div className="">
                        <label for="validationCustom04" className="form-label">End Date</label>
                        <input type="date" className="form-control" id="validationCustom04" />
                    </div>
                    
                    <div className="d-flex justify-content-end mt-3">
                        <button className="btn btn-primary" type="submit">Add Administrative Work</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdministrativeWorkForm;