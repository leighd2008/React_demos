import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Landing from './Landing';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import Header from './Header';
// import './App.css';

const App = () => (
  <div>
    <Router>
      <AuthProvider>
        <Header />
        <Switch>
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <Route path="/" component={Landing} />
        </Switch>
      </AuthProvider>
    </Router>
  </div>
);

export default App;
