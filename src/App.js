import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Navbar from './Components/Navbar/Navbar';
import Schedule from './Components/Schedule/Schedule';

function App() {
  return (
    <Grid container fullWidth className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/schedule" component={Schedule} />
        </Switch>
      </Router>
    </Grid>
  );
}

export default App;
