import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Search from './components/search';

function App() {
  const [previousCities, setPreviousCities] = useState([]);
  const [search, setSearch] = useState('');

  const addNewCity = (city) => {
    if (!city){
      return;
    }
    //check to see if the city is a duplicate
    //if not add it to the list of cities
    //save it to local storage
    city = city.toUpperCase();
    const existing = previousCities.find(x => x === city);
    if (!existing){
      const newPreviousCities = previousCities;
      newPreviousCities.push(city);
      localStorage.setItem('cities', JSON.stringify(newPreviousCities));
      setPreviousCities(newPreviousCities);
    }
  }

  useEffect(() => {
    //check local storage for existing cities
    //if we have them, put them into previousCities
    const existingCities = localStorage.getItem('cities');
    if (existingCities){
      let cities = [];
      try {
        cities = JSON.parse(existingCities)
      } catch(e) {
        console.log(e);
      }
      setPreviousCities(cities)
    }
  },[]);

  return (
    <div className="App">
      <Container fluid>
        <Row className='mt-4'>
          <Col sm={3}>
            <Row>
              <Search sendSearch={setSearch} />
            </Row>
            <Row>

            </Row>
          </Col>
          <Col sm={9}>
            <Row>

            </Row>
            <Row>

            </Row>
          </Col>
        </Row>


      </Container>
    </div>
  );
}

export default App;
