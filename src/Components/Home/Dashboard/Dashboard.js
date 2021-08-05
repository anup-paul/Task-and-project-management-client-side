import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light navbar-dark bg-primary">
                <div class="container-fluid">

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/Home" class="nav-link active" aria-current="page" href="#"><b>Home</b></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/project" class="nav-link active" aria-current="page" href="#"><b>Projects</b></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/projectCategory" class="nav-link active" aria-current="page" href="#"><b>ProjectCategory</b></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/team" class="nav-link active" aria-current="page" href="#"><b>Team</b></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/task" class="nav-link active" aria-current="page" href="#"><b>Task</b></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/employee" class="nav-link active" aria-current="page" href="#"><b>Employee</b></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/client" class="nav-link active" aria-current="page" href="#"><b>Client</b></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Dashboard;