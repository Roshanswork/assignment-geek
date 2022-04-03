import React from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import "./DataTable.css";
import DeleteBtn from "./DeleteBtn";

export default function DataTable({ data }) {
  const [pageNumber, setPageNumber] = useState(0);
  

 

  const usersPerPage = 10;
  const usersVisited = pageNumber * usersPerPage;

  const displayUsers = data
    .slice(usersVisited, usersVisited + usersPerPage)
    .map((item) => (
      <div className="grid-container" key={item.id}>
        <div>
          <input type="checkbox" />
        </div>
        <div>{item.name}</div>
        <div>{item.email}</div>
        <div>{item.role}</div>
        <div>
     
          <DeleteBtn id={item.id} userData={data} />
        </div>
      </div>
    ));

  const pageCount = Math.ceil(data.length / usersPerPage);

  const handleChangePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="tableCont">
        <div className="grid-container headings">
          <div>
            <input type="checkbox" />
          </div>
          <div className="headings">Name</div>
          <div className="headings">Email</div>
          <div className="headings">Role</div>
          <div className="headings">Action</div>
        </div>
        {displayUsers}
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handleChangePage}
        containerClassName={"paginationBtns"}
        previousLinkClassName={"priviousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"disabledBtn"}
        activeClassName={"activeBtn"}
      />
    </>
  );
}
