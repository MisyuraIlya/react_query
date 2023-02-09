import React from 'react';
import MainRouter from './MainRouter';
import { Link} from 'react-router-dom';

function App() {


  return (
    <div className="App">
        <ul>
          <li><Link to='/'>Home</Link></li>
        </ul>
        <hr />
      <MainRouter/>
    </div>
  );
}

export default App;
