import React from 'react';
import { BrowserRouter as Router, Route, useHistory, Switch} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import Results from './result'

class App extends React.Component {
  // Initialize the state here in the parent component so it can be shared with child components (Home/Results)
  constructor(props) {
    super(props);

     this.state = {
      zodiac1: "",
      zodiac2: "" 
     }

     this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value1, value2) {
    this.setState({zodiac1: value1});
    this.setState({zodiac2: value2});
  }

  render() {
    return(
    <Router>  
      <Switch>
        <Route exact path='/' exact component={routeProps => <Home {...routeProps} handleChange={this.handleChange} />}>
          </Route> 

        <Route path='/result' exact component={() => <Results zodiac1={this.state.zodiac1} zodiac2={this.state.zodiac2}/>}/>  
     </Switch>


      </Router>

      );
      // return <Home value={value} onChange={handleChange} />;
    }
  }
export default App;