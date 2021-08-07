import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './Components/Home/Dashboard/Dashboard';
import ProjectForm from './Components/Project/ProjectForm/ProjectForm';
import Body from './Components/Home/Body/Body';
import ClientForm from './Components/Clients/ClientForm/ClientForm';
import TaskForm from './Components/Task/TaskForm/TaskForm.js'
import TeamForm from './Components/Team/TeamForm/TeamForm';
import EmployeeForm from './Components/Employee/EmployeeForm/EmployeeForm';
import ProjectCategoryForm from './Components/ProjectCategory/ProjectCategoryForm/ProjectCategoryForm';
import ProjectList from './Components/Project/Projectlist/ProjectList';
import ProjectCategoryList from './Components/ProjectCategory/ProjectCategorylist/ProjectCategoryList';
import ClientList from './Components/Clients/Clientlist/ClientList';


function App() {
  return (
    <>
      <Router>
        <Dashboard></Dashboard>
        <Switch>
        <Route exact path="/" >
            <Body></Body>
          </Route>
          <Route path="/home" >
            <Body></Body>
          </Route>
          <Route path="/project" >
            <ProjectList></ProjectList>
          </Route>
          <Route path="/addProjectForm">
            <ProjectForm></ProjectForm>
          </Route>
          <Route path="/projectCategory">
            <ProjectCategoryList></ProjectCategoryList>
          </Route>
          <Route path="/addProjectCategoryForm" >
            <ProjectCategoryForm></ProjectCategoryForm>
          </Route>
          <Route path="/client" >
            <ClientList></ClientList>
          </Route>
          <Route path="/addClientForm" >
            <ClientForm></ClientForm>
          </Route>
          <Route path="/task" >
            <TaskForm></TaskForm>
          </Route>
          <Route path="/team" >
            <TeamForm></TeamForm>
          </Route>
          <Route path="/employee" >
            <EmployeeForm></EmployeeForm>
          </Route>
        </Switch>
      </Router>
    </>

  );
}

export default App;
