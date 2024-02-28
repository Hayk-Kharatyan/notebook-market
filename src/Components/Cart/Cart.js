import React, { useContext } from 'react'
import "./Cart.css"
import { Context } from '../Context'
import Preloader from '../Preloader/Preloader'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

export default function Cart() {
    let noteContext = useContext(Context)
    let notes = noteContext.state
    let amount = noteContext.Total
    return (
        <section className='Cart'>
            <Preloader />
            {

                notes.length === 0 ?
                    <>
                        <h2 className='cart-h2'>Cart is empty</h2>
                        <Link className='none' to="/"><h2 className='link-h2'>Go back to home</h2></Link>
                    </>
                    : <h1 className='cart-h1'>Cart</h1>

            }
            <div className='con'>
                <div className='notebook-buy'>
                    {
                        notes.map((note) => {
                            console.log(note);
                            return (
                                <CartItem key={note.id} note={note} />
                            )
                        })
                    }
                </div>
                {
                    notes.length !== 0 &&
                    <div className='amount'>
                        <p>The whole amount <br/> <span className='money'>$ {amount}</span></p>
                    </div>
                }

            </div>

        </section>
    )
}
