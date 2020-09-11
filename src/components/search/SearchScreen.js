import React, { useMemo } from 'react';

import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { queryString } from '../../helpers/queryString';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';
// import { heroes } from '../../data/heroes';

export const SearchScreen = ({ history }) => {
   const location = useLocation();
   const { q = '' } = queryString(location.search);
   const [{ searchText }, handleInputChange] = useForm({ searchText: q });
   const filteredHeroes = useMemo(() => getHeroesByName(searchText), [q]);

   const handleSearch = (e) => {
      e.preventDefault();

      history.push(`?q=${searchText.toLowerCase()}`);
   };
   return (
      <div className='container'>
         <h1>Search Screen</h1>
         <hr />
         <div className='row'>
            <div className='col-5'>
               <h4>Search Form</h4>
               <hr />
               <form onSubmit={handleSearch}>
                  <input
                     type='text'
                     placeholder='Search your hero...'
                     className='form-control'
                     name='searchText'
                     onChange={handleInputChange}
                     value={searchText}
                  />
                  <button
                     className='btn m-1 btn-block btn-outline-primary'
                     type='submit'
                  >
                     Search
                  </button>
               </form>
            </div>
            <div className='col-7'>
               <h4>Results</h4>
               <hr />

               {filteredHeroes.map((hero) => (
                  <HeroCard key={hero.id} {...hero} />
               ))}
            </div>
         </div>
      </div>
   );
};
