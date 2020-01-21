import React, { Component } from 'react';
import './table.component.css';


class TableContent extends Component {

  constructor(props) {
    super(props);
  }

  dataRows() {
    let shippingData = this.props.shippingJsonData;
    let dataRowsList = shippingData.map((shippingList, index) => {
      return (
        <tr key={index}>
          <td className="column1" key={index}> {shippingList.shipmentDate} </td>
        </tr>
      )
    })
    return (
      { dataRowsList }
    )
  }

  render() {
    return (
      <tbody>
        {this.dataRows()}
      </tbody>
    )
  }

}

export default TableContent;