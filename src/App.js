import React from 'react';
import { AuctionBody } from './components/auctions/Body';
import { NavComp } from './components/authentication/NavComp';
import { AuthProvider } from './context/AuthContext';
import Footer from './components/auctions/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export const App = () => {
  return (
    <Router>
    <AuthProvider>
      <NavComp />
      <AuctionBody />
      <Footer />
    </AuthProvider>
    <Switch>
      <Route>

      </Route>
      <Route>
        
      </Route>
    </Switch>
    </Router>
  );
};
