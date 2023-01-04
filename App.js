import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import BookList from './components/BookList';
import Favorites from './components/Favorites';
import Details from './components/Details';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <Routes>
            <Route path='/' element={<BookList />}/>
            <Route path='/books/:id' element={<Details />}/>
            <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
        <Footer />
    </div>
  )
}
export default App;
