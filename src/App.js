import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import People from './pages/people';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import NotFound from './pages/notFound';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/people' replace={true} />} />
          <Route path='/people' element={<People />} />
          <Route path='/not-found' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
