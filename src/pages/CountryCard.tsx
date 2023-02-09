import React from 'react';
import {useLocation} from 'react-router-dom'
import { useCountry } from '../hooks/useCountry';
import '../App.css';
const CountryCard = () => {
    const location = useLocation();
    const {country, isLoading} = useCountry(location.pathname.split('/')[2])
    return (
        <div className="App">
        <h2>React Query</h2>
  
        {/* {error && <div>{error.message}</div>} */}
        {isLoading ? 
        <div>Loading...</div>
        :
          <div>
            <div style={{border:'1px solid black', cursor:'pointer'}}>
                <h3>{country?.title}</h3>
                <p>{country?.population}</p>
            </div>  
          </div>  
        }
      </div>
    );
};

export default CountryCard;