import React from "react";
import "./App.css";
import CelebrityList from "./CelebrityList";

function App() {
  return (
    <div className="App">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl">Celebrity List</h1>
      </header>
      <main>
        <CelebrityList />
      </main>
    </div>
  );
}

export default App;
