import React from "react";
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import { fetch } from './slices/postSlice';
import Nav from './components/Navigation';
import Routes from './router';

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetch())
  },[dispatch])

  return (
    <CssBaseline>
      <BrowserRouter>
        <div>
          <Nav title='Portfolio'/>
          <Routes />
        </div>
      </BrowserRouter>
    </CssBaseline>
  );
}
