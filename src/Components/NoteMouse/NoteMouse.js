import React from 'react'
import "./NoteMouse.css"
export default function NoteMouse() {
  return (
    <figure className='notemouse'>
    <h1>Gaming Notebooks</h1>
    <div className='notemouse_flex'>
      <div className='notebook'></div>
      <div className='mouse'></div>
    </div>
    <div className='logos'>
      <div className='flexlogo'>
        <img alt='msi' width="120px" height="60px" src='./images/brands/msi.png'></img>
        <img alt='hp' width="120px" height="60px" src='./images/brands/hp.png'></img>
        <img alt='asus' width="120px" height="60px" src='./images/brands/asus.png'></img>
        <img alt='lenovo' width="120px" height="60px" src='./images/brands/lenovo.png'></img>
      </div>
    </div>
  </figure>
  )
}
