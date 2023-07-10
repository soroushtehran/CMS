import React from 'react';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Panel from './Components/Panel/panel';
import Header from './Components/Header/header';
import './App.scss';

function App() {
  const router = useRoutes(routes)

  return (
    <div className="App">
      <Row className='p-0 m-0 w-100'>
        <Col sm={12} md={2} className='p-0 border border-1 border-dark panel-wrapper ' style={{ height: '100vh' }}>
          <Panel />
        </Col>
        <Col sm={12} md={10} className='p-0 border border-1 border-dark main-wrapper'>
          <Header />
          {router}
        </Col>
      </Row>

    </div>
  );
}

export default App;