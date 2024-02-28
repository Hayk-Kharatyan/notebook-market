import React, { useContext } from 'react'
import "./CompareCounter.css"
import { Context } from '../Context'
import { Link } from 'react-router-dom'
export default function CompareCounter() {
    let noteContext = useContext(Context)
    let counter = noteContext.compCounter
    return (
        <>
            {
                counter > 0 &&
                <Link to="/compare">
                <div className='CompareCounter'>
                    Product comparison : 
                    <span> {counter}</span>
                </div>
                </Link>
            }

        </>
    )
}
