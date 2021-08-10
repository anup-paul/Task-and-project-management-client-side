import React from 'react';

const ClientForm = () => {
    return (
        <div>
            <div className="d-flex justify-content-center my-3" >
                <form className="w-50  border border-primary border-4 p-5 needs-validation" novalidate>
                    <h3 className="text-center mb-4" ><b>Add Client</b></h3>
                    <div className="">
                        <label for="validationCustom01" className="form-label">Name <b style={{ color: "red" }} >*</b></label>
                        <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Client's Name" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="">
                        <label for="validationCustom02" className="form-label">Address</label>
                        <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Client's Address" />
                    </div>
                    <div className="">
                        <label for="validationCustom03" className="form-label">Mobile Number <b style={{ color: "red" }} >*</b></label>
                        <input type="number" className="form-control" id="validationCustom03" placeholder="Enter Client's Mobile Number" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="">
                        <label for="validationCustom04" className="form-label">Email</label>
                        <input type="email" className="form-control" id="validationCustom04" placeholder="Enter Client's email" />
                    </div>


                    <div className="d-flex justify-content-end mt-3">
                        <button className="btn btn-primary" type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ClientForm;