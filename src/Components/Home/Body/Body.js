import React from 'react';
import { useHistory } from 'react-router-dom';

const Body = () => {

    let history = useHistory()

    const handleProject = (e) => {
        e.preventDefault();
        history.push("/projects")
        console.log("clicked");
    }

    return (
        <div className="d-flex justify-content-center" >

            <div className="row w-75 mt-5" >
                <div className="col-md-4" >
                    <div className="card border m-2 border-info">

                        <button className="btn" onClick={(e) => handleProject(e)} >
                            <div className="card-body">
                                <h4 className="text-center p-3 text-info" >Projects</h4>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="col-md-4" >
                    <div className="card border m-2 border-warning ">
                        <button className="btn">
                            <div className="card-body">
                                <h4 className="text-center p-3 text-warning" >Project Task</h4>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="col-md-4" >
                    <div className="card border m-2 border-secondary ">
                        <button className="btn">
                            <div className="card-body">
                                <h4 className="text-center p-3 text-secondary" >Permanent Task</h4>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="col-md-4" >
                    <div className="card border m-2 border-danger ">
                        <button className="btn">
                            <div className="card-body">
                                <h4 className="text-center p-3 text-danger" >Temporary Task</h4>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="col-md-4" >
                    <div className="card border m-2 border-success">
                        <button className="btn">
                            <div className="card-body">
                                <h4 className="text-center p-3 text-success" >Clients</h4>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="col-md-4" >
                    <div className="card border m-2 border-primary">
                        <button className="btn">
                            <div className="card-body">
                                <h4 className="text-center p-3 text-primary" >Employee</h4>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;