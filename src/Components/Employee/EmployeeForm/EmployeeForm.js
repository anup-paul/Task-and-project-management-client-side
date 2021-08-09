import React from 'react';

const EmployeeForm = () => {
    return (
       <div>
           <div className="d-flex justify-content-center my-3" >
                <form className="w-50  border border-primary border-4 p-5 needs-validation" novalidate>
                    <div className="">
                        <label for="validationCustom01" className="form-label">Employee Name <b style={{color:"red"}} >*</b></label>
                        <input type="text" className="form-control" id="validationCustom01" placeholder="Enter employee Name" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    
                    <div className="">
                        <label for="validationCustom02" className="form-label">Employee Designation <b style={{color:"red"}} >*</b></label>
                        <input type="text" className="form-control" id="validationCustom02" placeholder="Enter employee Designation" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>

                    <div className="">
                        <label for="validationCustom03" className="form-label">Employee ID <b style={{color:"red"}} >*</b></label>
                        <input type="text" className="form-control" id="validationCustom03" placeholder="Enter employee ID" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>

                    <div className="">
                        <label for="validationCustom04" className="form-label">Employee Phone number</label><b style={{color:"red"}} >*</b>
                        <input type="number" className="form-control" id="validationCustom04" placeholder="Enter employee Phone number" />
                    </div>
                    <div className="">
                        <label for="validationCustom05" className="form-label">Employee email</label><b style={{color:"red"}} >*</b>
                        <input type="email" className="form-control" id="validationCustom05" placeholder="Enter employee email" />
                    </div>

                    <div className="d-flex justify-content-end mt-3">
                        <button className="btn btn-primary" type="submit">Save</button>
                    </div>
                </form>
            </div>
       </div> 
    );
};

export default EmployeeForm;