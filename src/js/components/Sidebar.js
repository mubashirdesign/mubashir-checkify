import React from 'react';
import Search from './Search';
import CityResults from './CityResults';

const Sidebar = () => {
    return (<div className="app__sidebar">
      <Search />
      <CityResults />
    </div>)
}

export default Sidebar;