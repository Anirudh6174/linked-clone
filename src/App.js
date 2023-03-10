import React from "react";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Header />

      {/* App Body */}
      <div className="app_body">
        <Sidebar />

        {/* Feed */}

        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
