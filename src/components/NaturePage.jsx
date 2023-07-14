import React, { useState } from "react";
import List from "./List";
import StructurePage from "./StructurePage";
import NatureList from "./NatureList";

const AllNatureList = [
  ...new Set(
    List.map((e) => {
      return e.category;
    })
  ),
  "all",
];

const NaturePage = () => {
  const [items, setItems] = useState(List);
  const [AllNatureVal, setAllNatureVal] = useState(AllNatureList);

  const filterItem = (categoryItem) => {
    if (categoryItem === "all") {
      setItems(List);
      return;
    }
    const updateItems = List.filter((e) => {
      return e.category === categoryItem;
    });

    setItems(updateItems);
  };
  return (
    <>
      <div className="heading">
        <h1>Welcome to Real Nature World</h1>
      </div>

      <hr />

      <NatureList filterItem={filterItem} AllNatureVal={AllNatureVal} />

      <StructurePage items={items} />
    </>
  );
};

export default NaturePage;
