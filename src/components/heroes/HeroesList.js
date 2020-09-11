import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {
   const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
   // const heroes = getHeroesByPublisher(publisher);
   return (
      <div className='card-columns'>
         {heroes.map((h) => (
            <HeroCard key={h.id} {...h} />
         ))}
      </div>
   );
};
