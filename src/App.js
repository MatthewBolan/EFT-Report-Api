import React, {useState} from 'react';

import './App.css';

import AllBosses from './components/AllBosses';

import AllDealers from './components/AllDealers';

import AllCurrencies from './components/AllCurrencies';

import AllLocations from './components/AllLocation';

import AllAmmuntionTypes from './components/AllAmmunitionTypes';

import AllReports from './components/AllReports';

import NewReportForm from './components/NewReportForm';

import ReportDetails from './components/ReportDetails';

import EditReportForm from './components/EditReportForm';

import Ammunition762x25 from './components/Ammunition762x25';

import Ammunition9x18 from './components/Ammunition9x18';

import Ammunition9x19 from './components/Ammunition9x19';

import Ammunition9x21 from './components/Ammunition9x21';

import Ammunition46x30 from './components/Ammunition46x30';

import Ammunition57x28 from './components/Ammunition57x28';

import Ammunition545x39 from './components/Ammunition545x39';

import Ammunition556x45 from './components/Ammunition556x45';

import Ammunition762x39 from './components/Ammunition762x39';

import Ammunition762x51 from './components/Ammunition762x51';

import Ammunition762x54 from './components/Ammunition762x54';

import Ammunition9x39 from './components/Ammunition9x39';

import Ammunition366 from './components/Ammunition366';

import Ammunition127x55 from './components/Ammunition127x55';

import Ammunition127x108 from './components/Ammunition127x108';

import Ammunition12x70 from './components/Ammunition12x70';

import Ammunition20x70 from './components/Ammunition20x70';


import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';



function App() {

  const [formSubmitted, setFormSubmitted] = useState(false)
  
  return (

    <div className="App">
      <header className="App-header">


      <BrowserRouter>

      <h1 className="my-5">EFT Report API</h1>

          <Switch>



            
          <Route exact path = "/" >

                <AllReports formSubmitted = {formSubmitted} />

              <Link to="/create/report" className="btn btn-secondary my-3" > Add Report </Link>

          </Route >



          <Route exact path = "/create/report">

            <Link to="/" className="btn btn-primary my-3" > DashBoard </Link>

              <NewReportForm formSubmitted = {formSubmitted} setFormSubmitted = {setFormSubmitted} />

          </Route>



          <Route exact path = "/report/:id">

              <Link to="/" className="btn btn-primary my-3" > DashBoard </Link>

              <ReportDetails/>

          </Route>



              <Route exact path = "/edit/:id">

                  <Link to="/" className="btn btn-warning my-3" > Cancel </Link>

                  <EditReportForm/>

              </Route>



            <Route exact path = "/bosses">

              <Link to="/" className="btn btn-primary my-3" > DashBoard </Link>

                <AllBosses/>

            </Route>



            <Route exact path = "/dealers">

              <Link to="/" className="btn btn-primary my-3" > DashBoard </Link>

                <AllDealers/>

            </Route>



            <Route exact path = "/currencies">

              <Link to="/" className="btn btn-primary my-3" > DashBoard </Link>

                <AllCurrencies/>

            </Route>



            <Route exact path = "/locations">

              <Link to="/" className="btn btn-primary my-3" > DashBoard </Link>

                <AllLocations/>

            </Route>


            <Route exact path = "/ammunitiontypes">

              <Link to="/" className="btn btn-primary my-3" > DashBoard </Link>

                <AllAmmuntionTypes/>

            </Route>



            
            <Route exact path = "/ammunition762x25">

                <Ammunition762x25/>

            </Route>


            <Route exact path = "/ammunition9x18">

            <Ammunition9x18/>

            </Route>



            <Route exact path = "/ammunition9x19">

            <Ammunition9x19/>

            </Route>



            <Route exact path = "/ammunition9x21">

            <Ammunition9x21/>

            </Route>



            <Route exact path = "/ammunition46x30">

            <Ammunition46x30/>

            </Route>



            <Route exact path = "/ammunition57x28">

            <Ammunition57x28/>

            </Route>



            <Route exact path = "/ammunition545x39">

            <Ammunition545x39/>

            </Route>



            <Route exact path = "/ammunition556x45">

            <Ammunition556x45/>

            </Route>



            <Route exact path = "/ammunition762x39">

            <Ammunition762x39/>

            </Route>



            <Route exact path = "/ammunition762x51">

            <Ammunition762x51/>

            </Route>



            <Route exact path = "/ammunition762x54">

            <Ammunition762x54/>

            </Route>



            <Route exact path = "/ammunition9x39">

            <Ammunition9x39/>

            </Route>



            <Route exact path = "/ammunition366">

            <Ammunition366/>

            </Route>



            <Route exact path = "/ammunition127x55">

            <Ammunition127x55/>

            </Route>



            <Route exact path = "/ammunition127x108">

            <Ammunition127x108/>

            </Route>



            <Route exact path = "/ammunition12x70">

            <Ammunition12x70/>

            </Route>



            <Route exact path = "/ammunition20x70">

            <Ammunition20x70/>

            </Route>






          </Switch>



      </BrowserRouter>

      </header>
    </div>

  );
}

export default App;
