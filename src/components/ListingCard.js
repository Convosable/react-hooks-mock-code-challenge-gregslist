import React, {useState} from "react";

function ListingCard({item, deleteItem}) {

  const [isFavorite, setIsFavorite] = useState(false)
  const {id, description, image, location} = item

  function handleFavorite() {
    setIsFavorite(!isFavorite)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(() => deleteItem(item))
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div value = {isFavorite} className="details">
        {isFavorite ? (
          <button onClick = {handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick = {handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick = {handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
