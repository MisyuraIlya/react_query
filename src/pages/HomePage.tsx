import React, { useState } from 'react';
import '../App.css';
import {useQuery} from 'react-query'
import { CountryService, ICountry } from '../services/country.service';
import { useCountries } from '../hooks/useCountries';
import { Link} from 'react-router-dom';
const HomePage = () => {

      // for 2
  // const [countries, setCountries] = useState<ICountry[]>([])

  // 1

  // const {isLoading, data:response, error} = useQuery('country list', () => CountryService.getAll())


  // 2

  // const {isLoading} = useQuery('country list', () => CountryService.getAll(), {
  //   onSuccess: ({data}) => {
  //     setCountries(data)
  //   }, 
  //   onError: (error: any) => {
  //     alert(error.message)
  //   },
  //   select: ({data}) => data.map(country => ({
  //     ...country,
  //     title : country.title + " !"
  //   })) 
  // })

  // 3

  // const {isLoading, data:countries} = useQuery('country list', () => CountryService.getAll(), {
  //   onError: (error: any) => {
  //     alert(error.message)
  //   },
  //   select: ({data}):ICountry[] => data.map(country => ({
  //     ...country,
  //     title : country.title + " !"
  //   })) 
  // })

    const {isLoading, countries,refetch } = useCountries()

    return (
        <div className="App">
        <h2>React Query</h2>
  
        {/* {error && <div>{error.message}</div>} */}
        {isLoading ? 
        <div>Loading...</div>
        :
        countries?.length ?
          <div>
              {countries.map(country => (
                <Link to={`/country/${country.id}`}>
                  <div style={{border:'1px solid black', cursor:'pointer'}}>
                      <h3>{country.title}</h3>
                      <p>{country.population}</p>
                  </div>  
                </Link>
              ))}
          </div>  
        :
          <div>
            <p>Elements not found</p>
          </div>
        
        }

        <button onClick={() =>refetch()}>refetch data</button>
      </div>
    );
};

export default HomePage;