import React from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({itemList, setItemList, renderItems, setRenderItems}) {

  console.log(renderItems)

  function deleteItem(listing) {
    const deleteItem = itemList.filter(item => item.id !== listing.id)
    setItemList(deleteItem)
  }

  

  return (
    <main>
      <ul className="cards">
        {renderItems.map((item) => 
        <ListingCard item = {item} key = {item.id} deleteItem = {deleteItem} />
        )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
