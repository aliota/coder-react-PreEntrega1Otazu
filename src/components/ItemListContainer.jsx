import React from 'react'
import "./itemListContainer.css"

function ItemListContainer({greeting}) {
  return (
    <>
       <div className='itemList'>{greeting}</div>
    </>   
  )
}

export default ItemListContainer