import React, { Fragment, useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { Routes, Route, Link } from 'react-router-dom';
import Movies from './Movies'
import Premiers from './TvShows'
import Favorites from './Favorite'
import Pricing from './Pricing'

import '../Styles/NavBar.css'

export const Container = React.createContext()


function NavBar() {

  const [toggle, setToggle] = useState(true)
  const [inputValue, setInputValue] = useState('')

  return (
    <Container.Provider value={{toggle,inputValue}}>
    <Fragment>
       <nav className={toggle? '' : 'navBarColor'} >
          <div className='nav-options'>
            <h1 id={toggle? '' : 'heading'} >react application</h1>
            <Link to='/'   >
            <span id={toggle? 'Movies' : 'MoviesLight'} >Movies</span>
            </Link>
            <Link to='/Premiers'>
            <span id={toggle? 'Movies' : 'MoviesLight'}  >Premiers</span>
            </Link>
            <Link to='/Favorites'>
            <span id={toggle? 'Movies' : 'MoviesLight'}  >Favorites</span>
            </Link>
            <Link to='/Pricing'>
            <span id={toggle? 'Movies' : 'MoviesLight'}  >Pricing</span>
            </Link>
          </div>
          <div className='input-group' >
          <input className='search__input' type="text" placeholder='Поиск...' value={inputValue} onChange={(e) => setInputValue(e.target.value) } />
          <BsSearch fontSize={21} color='green' id='search' />
          <div id='Color-switcher' onClick={() => setToggle(!toggle)}>
            <div id={toggle ? 'Color-switcher-mover'  : 'Color-switcher-moved'}> </div>
          </div>
          </div>
        </nav> 
        <Routes>
          <Route path='' element={<Movies />} />
          <Route path='Premiers' element={<Premiers />} />
          <Route path='Favorites' element={<Favorites />} />
          <Route path='Pricing' element={<Pricing />} />
        </Routes>
    </Fragment>
    </Container.Provider>
  )
}

export default NavBar