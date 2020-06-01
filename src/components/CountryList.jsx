import React from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

function CountryList(props) {
  return (
    <div>
      <ListGroup className="overflow-auto" style={{ maxHeight: '100vh' }}>
        {props.countries.map((country) => {
          return (
            <ListGroup.Item key={Math.random() * 40}>
              <Link to={`/country/${country.cca3}`}>
                {country.name.official}
              </Link>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default CountryList;
