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
import EmployeeList from './Components/Employee/Employeelist/EmployeeList';
import TeamList from './Components/Team/TeamList/TeamList';
import TaskList from './Components/Task/TaskList/TaskList';


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
          <Route path="/addEmployee" >
            <EmployeeForm></EmployeeForm>
          </Route>
          <Route path="/employees" >
            <EmployeeList></EmployeeList>
          </Route>
          <Route path="/addTeam" >
            <TeamForm></TeamForm>
          </Route>
          <Route path="/teamList" >
            <TeamList></TeamList>
          </Route>
          <Route path="/projects" >
            <ProjectList></ProjectList>
          </Route>
          <Route path="/addProject">
            <ProjectForm></ProjectForm>
          </Route>
          <Route path="/projectCategoryList">
            <ProjectCategoryList></ProjectCategoryList>
          </Route>
          <Route path="/addProjectCategory" >
            <ProjectCategoryForm></ProjectCategoryForm>
          </Route>
          <Route path="/addTask" >
            <TaskForm></TaskForm>
          </Route>
          <Route path="/taskList">
            <TaskList></TaskList>
          </Route>
          <Route path="/clients" >
            <ClientList></ClientList>
          </Route>
          <Route path="/addClient" >
            <ClientForm></ClientForm>
          </Route>
          
          
          
        </Switch>
      </Router>
    </>

  );
}

export default App;
