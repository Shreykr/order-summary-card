import React from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <React.Fragment>
      <div className='bg-custom_purple-light bg-contain bg-no-repeat bg-mobile-pattern sm:bg-desktop-pattern h-screen w-screen '></div>
      <Card />
    </React.Fragment>
  );
}

export default App;
