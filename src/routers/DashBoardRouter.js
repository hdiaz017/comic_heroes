import React from 'react';
import { Navbar } from '../components/ui/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DCScreen } from '../components/dc/DCScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashBoardRouter = () => {
   return (
      <>
         <Navbar />
         <div>
            <Switch>
               <Route exact path='/marvel' component={MarvelScreen} />
               <Route exact path='/dc' component={DCScreen} />
               <Route exact path='/hero/:heroeId' component={HeroScreen} />
               <Route exact path='/search' component={SearchScreen} />
               <Redirect to='/marvel' />
            </Switch>
         </div>
      </>
   );
};
