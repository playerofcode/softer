import Navbar from './components/Navbar'
import {Switch,Route } from "react-router-dom";
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Error from './components/Error'  

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/contact' component={Contact} />
    <Route exact path='/about' component={About} />
    <Route  component={Error} />
    </Switch>
    </>
  );
}

export default App;
