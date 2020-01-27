import React, { Component } from 'react';
import { AutoSizer, Column, Table } from 'react-virtualized';
import TableCell from '@material-ui/core/TableCell';
import clsx from 'clsx';
import tableStyles from './Table.example.css';

export default class MuiVirtualizedTable extends Component {
    static defaultProps = {
      headerHeight: 48,
      rowHeight: 48,
    };
  
    getRowClassName = ({ index }) => {
    const { classes } = this.props;
        if (index < 0) {
            return tableStyles.headerRow;
          } else {
            return index % 2 === 0 ? classes.evenRow : classes.oddRow;
          }
    };
  
    cellRenderer = ({ cellData, columnIndex }) => {
      const { columns, classes, rowHeight, onRowClick } = this.props;
      return (
        <TableCell
          component="div"
          variant="body"
          style={{ height: rowHeight }}
          align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
        >
          {cellData}
        </TableCell>
      );
    };
  
    headerRenderer = ({ label, columnIndex }) => {
      const { headerHeight, columns, classes } = this.props;
  
      return (
        <TableCell
          component="div"
          className={clsx(classes.tableCell, classes.flexContainer, classes.noClick, classes.tableHeaderCell)}
          variant="head"
          style={{ height: headerHeight, fontSize: '15px' }}
          align={columns[columnIndex].numeric || false ? 'right' : 'left'}
        >
          <span>{label}</span>
        </TableCell>
      );
    };

    className({ index }) {
        return index % 2 === 0 ?  { background: '#ddd' } : { background: '#fff' }
      }
  
    render() {
      const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
      return (
        <AutoSizer >
          {({ height, width }) => (
            <Table
              height={height}
              width={width}
              rowHeight={rowHeight}
              gridStyle={{
                direction: 'inherit',
              }}
              headerHeight={headerHeight}
              className={classes.table}
              rowClassName={this.getRowClassName}
              {...tableProps}
              
            >
              {columns.map(({ dataKey, ...other }, index) => {
                return (
                  <Column
                    key={dataKey}
                    headerRenderer={headerProps =>
                      this.headerRenderer({
                        ...headerProps,
                        columnIndex: index,
                      })
                    }
                    className={classes.flexContainer}
                    cellRenderer={this.cellRenderer}
                    dataKey={dataKey}
                    {...other}
                  />
                );
              })}
            </Table>
          )}
        </AutoSizer>
      );
    }
}