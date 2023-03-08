import React from "react";
import Search from "./Search";

function Header({itemList, setItemList, search, setSearch, handleSubmit}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSubmit = {handleSubmit} search = {search} setSearch= {setSearch} itemList = {itemList} setItemList = {setItemList}/>
    </header>
  );
}

export default Header;
