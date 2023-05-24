import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Home, Landing, Detail, Form, Activities} from "./views";
import { Route } from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar/>}
      <Route exact path="/" component={Landing} />
      <Route path="/home" render={()=> <Home />} />
      <Route path="/detail/:id" render={()=> <Detail />} />
      <Route path="/create" render={()=> <Form />} />
      <Route path="/activities" render={()=> <Activities />} />
    </div>
  );
}

export default App;
