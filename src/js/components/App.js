import React from "react";

//sidebar component renders both Search and CityResults
import Sidebar from './Sidebar';
import Restaurants from './Restaurants';

const App = () => {
  return (

    <div className="app">    
        <Sidebar />
        <Restaurants />
    </div>
  );
};

export default App;
