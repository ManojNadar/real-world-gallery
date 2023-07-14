import React from "react";

const NatureList = ({ filterItem, AllNatureVal }) => {
  return (
    <>
      <div className="topics-list">
        <div className="d-flex justify-content-around ">
          {AllNatureVal.map((elem, index) => {
            return (
              <button
                className="list-button"
                key={index}
                onClick={() => {
                  filterItem(elem);
                }}
              >
                {elem}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NatureList;
