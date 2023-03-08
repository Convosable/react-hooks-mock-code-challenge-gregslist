import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [itemList, setItemList] = useState([])
  const [renderItems, setRenderItems] = useState([])
  const [search, setSearch] = useState("")


  function handleSubmit(e) {
    e.preventDefault();
      const filterBySearch = itemList.filter((item) => item.description.toLowerCase().includes(search) )
      setRenderItems(filterBySearch)
      console.log(itemList)
    } 

  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
    .then(r => r.json())
    .then(items => {
      setItemList(items)
      setRenderItems(items)
    })
  },[])


  return (
    <div className="app">
      <Header handleSubmit = {handleSubmit}search = {search} setSearch= {setSearch} itemList = {itemList} setItemList = {setItemList} />
      <ListingsContainer renderItems = {renderItems} setRenderItems = {setRenderItems} itemList = {itemList} setItemList = {setItemList}/>
    </div>
  );
}

export default App;


// App
      // Header
              // Search
      // ListingsContainer
              // Listing Card
