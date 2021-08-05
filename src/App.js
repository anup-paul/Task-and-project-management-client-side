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
            <ProjectForm></ProjectForm>
          </Route>
          <Route path="/projectCategory">
            <ProjectCategoryForm></ProjectCategoryForm>
          </Route>
          <Route path="/client" >
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
