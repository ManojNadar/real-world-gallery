import React, { useState } from "react";
import Modal from "./Modal";

const StructurePage = ({ items }) => {
  const [modal, setModal] = useState(false);

  const [tempData, setTempData] = useState([]);

  const getData = (image, name) => {
    let tempData = [image, name];
    setTempData((item) => [1, ...tempData]);
    return setModal(true);
  };
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row ">
              {items.map((e) => {
                const { id, name, image, description, link } = e;

                return (
                  <>
                    <div
                      className="col-12 col-md-6 col-lg-6 col-sl-4 my-5 single-item"
                      key={id}
                    >
                      <div className="row">
                        <div className="col-12 col-md-12 col-lg-4 ">
                          <img
                            src={image}
                            alt={name}
                            className="img-fluid img"
                            onClick={() => {
                              getData(image, name);
                            }}
                          />
                        </div>

                        {/* List Items */}

                        <div className="col-12 col-md-12 col-lg-8">
                          <div className="pt-4 pb-3">
                            <h1>{name}</h1>
                            <p>{description}</p>
                          </div>
                          <a href={link} target="_blank">
                            <button>Read More</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {modal ? (
        <Modal
          image={tempData[1]}
          name={tempData[2]}
          hide={() => {
            setModal(false);
          }}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default StructurePage;
