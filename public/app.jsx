import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Sally from './Sally.jsx';
import Work from './clothes/Work.jsx';
import Dress from './clothes/Dress.jsx';
import Pajamas from './clothes/Pajamas.jsx';

export const App = () => {
  const [url, setURL] = useState(window.location.href);

  // useEffect(() => {
  //   setURL(window.location.href);
  // }, [])

  return (
    <Router>
      <h1>Sally the SPA</h1>
      <span>URL: {url}</span>
      <nav>
        <Link to='/work'>
          <button onClick={() => setURL(window.location.href)}>Work</button>
        </Link>
        <Link to='/datenight'>
          <button onClick={() => setURL(window.location.href)}>Date Night</button>
        </Link>
        <Link to='/bedtime'>
          <button onClick={() => setURL(window.location.href)}>Bedtime</button>
        </Link>
      </nav>
      <Sally/>


      <Switch>
        <Route path='/bedtime'>
          <Pajamas />
        </Route>
        <Route path='/work'>
          <Work />
        </Route>
        <Route path='/datenight'>
          <Dress />
        </Route>
      </Switch>
    </Router>
  )
};

export default App;