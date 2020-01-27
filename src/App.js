import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components/navbar/navbar.component";
import Upload from "./components/upload/upload.component";
import Table from "./components/table/table.component";
import ReactTable from "./components/reactTable/react-table.component";
import MaterialTable from "./components/reactTable/table-material-ui.component";
import Search from "./components/reactTable/react-search.component";

function App() {
  return (
    <Router>
        <Navbar />
        <br/>
        <Route path="/" exact component={Upload} />
        <Route path="/table" exact component={Table} />
        <Route path="/demotable" exact component={ReactTable} />
        <Route path="/materialtable" exact component={MaterialTable} />
        <Route path="/searchjs" exact component={Search} />
    </Router>
  );
}

export default App;
