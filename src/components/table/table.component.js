import React, { Component } from 'react';
import './table.component.css'
import axios from 'axios';

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shippingJsonData: []
         };
    }

    
    componentDidMount() {
        console.log('Mounted')
        axios.get('http://localhost:8080/getList/')
        .then(response => {
          this.setState({
            shippingJsonData: response.data
          });
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    headerRow() {
        const headerTitles = ['SHIPMENT DATE',
            'SHIPPER NAME',
            'CARTONS',
            'DESTINATION',
            'IMPORTER NAME',
            'IMPORTER COUNTRY',
            '20S',
            '40S',
            '45S']

        var headersList = headerTitles.map((title, index) => {
            return <th className="column1" key={index}> {title} </th>
        })
        return (
            <tr className="table100-head">
                {headersList}
            </tr>
        )
    }

    dataRows() {
        let shippingData = this.state.shippingJsonData;
        console.log(shippingData)
        let dataRowsList = shippingData.map((shippingList) => {
          return (
            <tr key={shippingList._id}>
              <td className="column1"> {shippingList.shipmentDate} </td>
              <td className="column3"> {shippingList.shipperName} </td>
              <td className="column1"> {shippingList.qty} </td>
              <td className="column2"> {shippingList.destination} </td>
              <td className="column3"> {shippingList.importerName} </td>
              <td className="column3"> {shippingList.country} </td>
              <td className="column3"> {shippingList['20S']} </td>
              <td className="column3"> {shippingList['40S']} </td>
              <td className="column3"> {shippingList['45S']} </td>
          </tr>
          )
        })
        return (
            <tbody>{ dataRowsList }</tbody>
        )
      }


    render() {
        return (
            <div className="limiter">
                <div className="container-table100">
                    <div className="wrap-table100">
                        <div className="table100">
                            <table id="myTable">
                                <thead> 
                                {this.headerRow()} 
                                </thead>
                                {this.dataRows()}
                                
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;