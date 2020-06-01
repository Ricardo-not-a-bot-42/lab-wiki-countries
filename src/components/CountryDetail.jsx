import React from 'react';
import data from './../countries.json';

import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const findCountryDetails = (cca3) => {
  return data.filter((country) => {
    return country.cca3 === cca3;
  });
};

const findCountryBorders = (borders) => {
  return data.filter((country) => {
    return borders.includes(country.cca3);
  });
};

function CountryDetail(props) {
  const selectedCountry = findCountryDetails(props.match.params.cca3);
  const borders = findCountryBorders(selectedCountry[0].borders);
  console.log(borders);
  return (
    <div>
      <h1>{selectedCountry[0].name.official}</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://source.unsplash.com/1600x900/?
              ${selectedCountry[0].capital},city`}
            alt={selectedCountry[0].name.common}
          />
          <Carousel.Caption>
            <h3>Capital: {selectedCountry[0].capital} 1/3</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://source.unsplash.com/1600x900/?
              ${selectedCountry[0].name.common},nature`}
            alt={selectedCountry[0].name.common}
          />
          <Carousel.Caption>
            <h3>{selectedCountry[0].name.common} - Environment 2/3</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://source.unsplash.com/1600x900/?
              ${selectedCountry[0].name.common},culture`}
            alt={selectedCountry[0].name.common}
          />
          <Carousel.Caption>
            <h3>{selectedCountry[0].name.common} - Culture 3/3</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Basic Information
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <h5 className="text-left">
                Official Name: {selectedCountry[0].name.official}
              </h5>
              <h5 className="text-left">
                Capital: {selectedCountry[0].capital}
              </h5>
              <h5 className="text-left">
                Area: {selectedCountry[0].area + ' km²'}
              </h5>
              <h5 className="text-left">Region: {selectedCountry[0].region}</h5>
              <h5 className="text-left">
                Subregion: {selectedCountry[0].subregion}
              </h5>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Languages
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              {Object.values(selectedCountry[0].languages).map((lang) => (
                <h5>{lang}</h5>
              ))}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Borders
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              {borders.map((border) => (
                <h5>{border.name.common}</h5>
              ))}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default CountryDetail;
