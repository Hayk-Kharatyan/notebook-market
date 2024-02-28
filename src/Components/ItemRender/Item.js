import React, { useContext } from 'react'
import { Context } from '../Context'
import "./Item.css"
export default function Item({ note }) {
  const noteContext = useContext(Context)
  return (
    <div className='item_note'>
      <div className='item_note_img'>
        <img alt='notebook' src={note.img}></img>
      </div>
      <h3>{note.brand} {note.model}</h3>
      <span className='item_info'>
        {note.processor.brand} {note.processor.collection} {note.processor.model}
        /
        {note.ram + ' ' + "gb"}
        /
        {note.storage + ' ' + "SSD"}
        /
        {note.videocart.brand} {note.videocart.line} {note.videocart.model}
      </span>
      <div className='item_offers'>
        <div>
          <b>Price</b> <span>{"$" + note.price}</span>
        </div>
        <div>
          <button onClick={() => {
            noteContext.dispatch({
              type: "notebook-add",
              payload: {
                note,
              }
            })
          }} className='btn-buy'>Buy</button> <button onClick={() => {  
            noteContext.dispatchCompare({
              type: "notebook-compare",
              payload: {
                note,
              }
            })
          }} title='compare' className='btn-compare icon-list'></button>
        </div>
      </div>
    </div>
  )
}
