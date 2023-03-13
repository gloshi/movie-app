import React from 'react';
import ReactPaginate from 'react-paginate';
import "./Pagination.css"

const Pagination = ({ onChangePage}) => {
  return (
    <div className='wrapper'>
    <ReactPaginate
    className='root'
      nextLabel=" >"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={50}
      pageCount={13}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  </div>
  )
}

export default Pagination
