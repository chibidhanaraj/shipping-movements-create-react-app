import React, { Component } from 'react';
import axios from 'axios';
import { Column, Table, SortDirection, AutoSizer } from "react-virtualized";
import "react-virtualized/styles.css";
import _ from "lodash";

class ReactTable extends Component {

  constructor(props) {
    super(props);
    const sortBy = null;
    const sortDirection = SortDirection.ASC;
    
    this.state = {
      shippingJsonData: [],
      sortBy,
      sortDirection
    };

    this._sort = this._sort.bind(this)
  }


  componentDidMount() {
    console.log('Mounted')
    axios.get('http://localhost:8080/getList/')
      .then(response => {
        const {sortBy, sortDirection} = this.state;
        const shippingJsonData = response.data
        const sortedList = this._sortList({ sortBy, sortDirection }, shippingJsonData);

        this.setState({
          shippingJsonData,
          sortedList
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    const { sortBy, sortDirection, sortedList } = this.state;

    const rowGetter = ({index}) => sortedList[index];
    
    return (
      <div style={{ height: 500 }}>
        <AutoSizer>
          {({ height, width }) => (
            <Table
              width={width}
              height={height}
              headerHeight={20}
              rowHeight={30}
              sort={this._sort}
              sortBy={sortBy}
              sortDirection={sortDirection}
              rowCount={this.state.shippingJsonData.length}
              rowGetter={rowGetter}
            >
            
              <Column width={200} label="SHIPMENT DATE" dataKey="shipmentDate" />
              <Column width={350} label="SHIPPER NAME" dataKey="shipperName" />
              <Column width={100} label="CARTONS" dataKey="qty" />
              <Column width={160} label="DESTINATION" dataKey="destination" />
              <Column width={350} label="IMPORTER NAME" dataKey="importerName" />
              <Column width={350} label="IMPORTER COUNTRY" dataKey="country" />
              <Column width={100} label="20S" dataKey="20S" />
              <Column width={100} label="40S" dataKey="40S" />
              <Column width={100} label="45S" dataKey="45S" />
            </Table>
          )}
        </AutoSizer>
      </div>
    );
  }
  
  _sort({sortBy, sortDirection}) {
    const sortedList = this._sortList({ sortBy, sortDirection}, this.state.sortedList);

    this.setState({sortBy, sortDirection, sortedList});
  }

  _sortList({ sortBy, sortDirection}, shippingJsonData) {

    let newList = _.sortBy(shippingJsonData, [sortBy]);
    
    if (sortDirection === SortDirection.DESC) {
      newList.reverse();
    }
    return newList;
  }
}

export default ReactTable;