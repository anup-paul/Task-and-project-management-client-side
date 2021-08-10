import React from 'react';

const ProjectCategoryForm = () => {
    return (
        <div>
            <div className="d-flex justify-content-center my-3" >
                <form className="w-50  border border-primary border-4 p-5 needs-validation" novalidate>
                <h3 className="text-center mb-4" ><b>Add Project Category</b></h3>
                    <div className="">
                        <label for="validationCustom01" className="form-label">Project Category <b style={{color:"red"}} >*</b></label>
                        <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Project Category" required />
                        <div className="valid-feedback">
                            Looks good!
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

export default ProjectCategoryForm;