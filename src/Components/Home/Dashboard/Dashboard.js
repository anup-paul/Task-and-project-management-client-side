import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-primary">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/Home" className="nav-link active" aria-current="page" ><b>Home</b></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle active" data-bs-toggle="dropdown" role="button" aria-expanded="false"><b>Employee</b></Link>
                                <ul className="dropdown-menu btn btn-primary">
                                    <li><Link to="/employees" className="dropdown-item" >Employee List</Link></li>
                                    <li><Link to="/addEmployee" className="dropdown-item" >Add Employee</Link></li>
                                    <li><Link className="dropdown-item" >Suspended Employee</Link></li>
                                    <li><Link className="dropdown-item" >Former Employee</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link to="/teamList" className="dropdown-item" >Team List</Link></li>
                                    <li><Link to="/makeTeam" className="dropdown-item" >Make Team</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle active" data-bs-toggle="dropdown" role="button" aria-expanded="false"><b>Project</b></Link>
                                <ul className="dropdown-menu btn btn-primary">
                                    <li><Link to="/projects" className="dropdown-item" >Project List</Link></li>
                                    <li><Link to="/addProject" className="dropdown-item" >Add Project</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link to="/projectCategoryList" className="dropdown-item" >Project Category list</Link></li>
                                    <li><Link to="/addProjectCategory" className="dropdown-item" >Add Project Category</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" >Archive Project List</Link></li>

                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle active" data-bs-toggle="dropdown" role="button" aria-expanded="false"><b>Administrative Work</b></Link>
                                <ul className="dropdown-menu btn btn-primary">
                                    <li><Link to="/AdministrativeWorks" className="dropdown-item" >Administrative Work List</Link></li>
                                    <li><Link to="/addAdministrativeWork" className="dropdown-item" >Add Administrative Work</Link></li>
                                    <li><Link className="dropdown-item" >Archive Administrative Work List</Link></li>

                                </ul>
                            </li>


                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle active" data-bs-toggle="dropdown" role="button" aria-expanded="false"><b>Task</b></Link>
                                <ul className="dropdown-menu btn btn-primary">

                                    <li><Link to="/taskList" className="dropdown-item" >Project Task List</Link></li>
                                    <li><Link to="/addTask" className="dropdown-item" >Add Project Task</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link to="/AdministrativeTaskList" className="dropdown-item" >Administrative Task List</Link></li>
                                    <li><Link to="/addAdministrativeTask" className="dropdown-item" >Add Administrative Task</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link to="/temporaryTaskList" className="dropdown-item" >Temporary Task List</Link></li>
                                    <li><Link to="/addTemporaryTask" className="dropdown-item" >Add Temporary Task</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link to="/permanentTaskList" className="dropdown-item" >Permanent Task List</Link></li>
                                    <li><Link to="/addPermanentTask" className="dropdown-item" >Add Permanent Task</Link></li>

                                </ul>
                            </li>


                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle active" data-bs-toggle="dropdown" role="button" aria-expanded="false"><b>Client</b></Link>
                                <ul className="dropdown-menu btn btn-primary">
                                    <li><Link to="/clients" className="dropdown-item" >Client List</Link></li>
                                    <li><Link to="/addClient" className="dropdown-item" >Add Client</Link></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Dashboard;