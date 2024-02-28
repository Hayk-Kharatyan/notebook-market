import React, { useContext } from 'react'
import "./CartItem.css"
import { Context } from '../Context'
export default function CartItem({ note }) {
    let noteContext = useContext(Context)
    return (
        <div key={note.id} className='carts'>
            <img width="150px" height="130px" alt='phone' className='cart-phone' src={note.img}></img>
            <p className='info-note'>{note.name} {note.processor.brand} {note.processor.collection} {note.processor.model} {note.videocart.brand}  {note.videocart.line} {note.videocart.model}</p>
           
            <div>
                <button className='phone-counter' onClick={() => {
                    if (note.counter !== 1) {
                        note.counter -= 1
                        noteContext.setTotal(noteContext.Total -= note.price)
                        noteContext.setCounter(noteContext.Counter -= 1)
                    }

                }}>-</button>
                <span className='counter-number'>{note.counter}</span>
                <button className='phone-counter' onClick={() => {
                    if (note.counter !== 10) {
                        note.counter += 1
                        noteContext.setTotal(noteContext.Total += note.price)
                        noteContext.setCounter(noteContext.Counter += 1)
                    }

                }}>+</button>
            </div>
            <p className='amount-note'>{"$" + note.price * note.counter}</p>
            <span className='Xbtn' onClick={() => {
                noteContext.dispatch({
                    type: "notebook-del",
                    payload: {
                        note
                    }
                })
            }}>Remove from cart</span>
        </div>
    )
}
