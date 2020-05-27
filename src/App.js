import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom';
import Navbar from './Component/Navbar'
import AnvantoryList from './Component/AnvantoryList';
import AddAnvantory from './Component/AddAnvantory';
import EditAnvantory from './Component/EditAnvantory';
import ViewAventory from './Component/ViewAventory';
function App() {
  return (
    <Provider store={store}>
      <Router >
        <Navbar/>
        <Switch>
          <Route exact path="/" component={AnvantoryList}/>
          <Route exact path="/Anvantory/add" component={AddAnvantory}/>
          <Route exact path="/Anvantory/edit/:id" component={EditAnvantory}/>
          <Route exact path="/Anvantory/view/:id" component={ViewAventory}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
