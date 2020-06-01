import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';

import dataJSON from './countries.json';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const data = dataJSON;
  return (
    <div className="App">
      <BrowserRouter>
        <Row>
          <Col>
            <CountryList countries={data} />
          </Col>
          <Col>
            <Switch>
              <Route
                path="/country/:cca3"
                exact
                render={(props) => <CountryDetail {...props} />}
              />
            </Switch>
          </Col>
        </Row>
      </BrowserRouter>
    </div>
  );
}

export default App;
