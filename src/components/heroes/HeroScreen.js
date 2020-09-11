import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {
   const { heroeId } = useParams();
   const hero = getHeroById(heroeId);
   if (!hero) {
      return <Redirect to='/' />;
   }

   const { superhero, publisher, alter_ego, first_appearance } = hero;

   const handleReturn = () => {
      if (history.length <= 2) {
         history.push('/');
      } else {
         history.goBack();
      }
   };

   return (
      <div className='row mt-5'>
         <div className='col-4'>
            <img
               src={`../assets/heroes/${heroeId}.jpg`}
               alt={superhero}
               className='img-thumbnail'
            />
         </div>
         <div className='col-8'>
            <h3>{superhero}</h3>
            <ul className='list-group list-group-flush'>
               <li className='list-group-item'>
                  <strong>Alter ego: </strong>
                  {alter_ego}
               </li>
               <li className='list-group-item'>
                  <strong>Publisher: </strong>
                  {publisher}
               </li>
               <li className='list-group-item'>
                  <strong>First Appearance: </strong>
                  {first_appearance}
               </li>
            </ul>
            <button className='btn btn-primary' onClick={handleReturn}>
               Return
            </button>
         </div>
      </div>
   );
};
