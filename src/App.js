import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components/navbar/navbar.component";
import Upload from "./components/upload/upload.component";
import Table from "./components/table/table.component";

function App() {
  return (
    <Router>
        <Navbar />
        <br/>
        <Route path="/" exact component={Upload} />
        <Route path="/table" exact component={Table} />
    </Router>
  );
}

export default App;
