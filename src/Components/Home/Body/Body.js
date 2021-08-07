import React from 'react';
import { useHistory } from 'react-router-dom';

const Body = () => {

    let history = useHistory()

    const handleProject = (e) => {
        e.preventDefault();
        history.push("/project")
        console.log("clicked");
    }

    return (
        <div className="d-flex justify-content-center" >

            <div className="row w-75 mt-5" >
                <div className="col-md-4" >
                    <div className="card border  border-info">
                        <button className="btn" onClick={(e)=>handleProject(e)} >
                            <div className="card-body">
                                <h3 className="text-center p-3 text-info" >Projects</h3>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="col-md-4" >
                    <div className="card border border-warning ">
                        <div className="card-body">
                            <h3 className="text-center p-3 text-warning" >Project Category</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" >
                    <div className="card border border-danger">
                        <div className="card-body">
                            <h3 className="text-center p-3 text-danger" >Clients</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;