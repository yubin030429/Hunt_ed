import * as React from 'react';
import { Route, Routes } from 'react-router';
import MainView from './views/MainView';
import SelectView from './views/SelectView';


const App = (): JSX.Element => {

  return (
        <Routes>
          <Route path='/' Component={MainView}/>
          <Route path='/Select' Component={SelectView} />
        </Routes>
  )
}

export default App;