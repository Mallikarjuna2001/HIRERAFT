import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TableFormat = ({ data, columns }) => {
  const [tableData, setTableData] = useState(data);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [searchText, setSearchText] = useState('');
  const [hiddenColumns, setHiddenColumns] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;


  const getVisibleColumns = () => {
    return columns.filter(column => !hiddenColumns.includes(column.key));
  };

  const handleSorting = key => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
    const sortedData = [...tableData].sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];
    

    if (key === 'name' || key === 'city' || key === 'gender') {
        return direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      } else {
        return direction === 'asc' ? aValue - bValue : bValue - aValue;
      }
    });
    setTableData(sortedData);
  };

  const handleSearching = (key, value) => {
    setSearchText(value);
    const filteredData = data.filter(
      item => String(item[key]).toLowerCase().includes(value.toLowerCase())
    );
    setTableData(filteredData);
  };

  const handleColumnToggling = key => {
    setHiddenColumns(prevHiddenColumns => {
      if (prevHiddenColumns.includes(key)) {
        return prevHiddenColumns.filter(column => column !== key);
      } else {
        return [...prevHiddenColumns, key];
      }
    });
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleData = tableData.slice(startIndex, endIndex);

  return (
    <div className='container mt-5'>
      <table className='table table-dark table-hover' >
        <thead className="table-dark">
          <tr>
            {getVisibleColumns().map(column => (
              <th key={column.key} onClick={() => handleSorting(column.key)}>
                {column.label}

              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visibleData.map((row, index) => (
            <tr key={index}>
              {getVisibleColumns().map(column => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className='input-group-prepend' >
      <label style={{margin:'35px', fontSize:'25px'}}>Search by ID : </label> 
        <input
          type="Number" placeholder='PLEASE ENTER ID'
          value={searchText}
          onChange={e => handleSearching(getVisibleColumns()[0].key, e.target.value)}
        />
      </div>
      <div style={{margin:'35px', fontSize:'20px'}} className="input-group-text">
        <label  className='form-check'> Columns: </label>
        {columns.map(column => (
          <label key={column.key}>
            <input  style={{marginLeft:'35px', marginRight:'8px'}} className='form-check-input mt-0'
              type="checkbox"
              checked={!hiddenColumns.includes(column.key)}
              onChange={() => handleColumnToggling(column.key)}
            />
            {column.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default TableFormat;