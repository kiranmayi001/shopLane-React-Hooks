import logo from './logo.svg';
import './App.module.css';
import TopBar from './TopBar/TopBar';

import LandingPage from "./Components/LandingPage/LandingPage"
import DetailPage from './Components/LandingPage/DetailsPage/DetailPage';

import { BrowserRouter, Switch, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopBar />
        <Switch>
          <Route exact path="/"><LandingPage /></Route>
          {/* <LandingPage/> */}

          <Route exact path="/DetailsPage/:Vid"><DetailPage /></Route>
          {/* <DetailPage/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
