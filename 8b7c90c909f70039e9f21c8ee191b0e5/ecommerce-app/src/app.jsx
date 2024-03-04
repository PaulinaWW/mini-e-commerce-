import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import About from './pages/About';
import ItemDetails from './pages/ItemDetails';
import NotFound from './pages/NotFound';
import CreateItem from './pages/CreateItem';
import UpdateItem from './pages/UpdateItem';
import ItemList from './components/ItemList/ItemList';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/" exact component={ItemList} />
        <Route path="/about" component={About} />
        <Route path="/items/:id" component={ItemDetails} />
        <Route path="/create" component={CreateItem} />
        <Route path="/update/:id" component={UpdateItem} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
