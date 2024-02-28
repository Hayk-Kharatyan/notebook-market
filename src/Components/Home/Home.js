import React from 'react'
import "./Home.css"
import SwiperPromo from './SwiperPromo/SwiperPromo'
import SwiperBrands from './SwiperBrands/SwiperBrands'
import { Storage } from '../../Storage'
import Item from '../ItemRender/Item'
import NoteMouse from '../NoteMouse/NoteMouse'
import Preloader from '../Preloader/Preloader'

export default function Home() {
  return (
    <section className='Home'>
      <Preloader />
      <section className='swipers'>
        <SwiperPromo />
        <SwiperBrands />
      </section>
      <h1 className='note-head'>NoteBooks</h1>
      <section className='notes'>
        <section className='container-note'>
          <div className='items'>
            {
              Storage.map((note) => {
                return (
                  <Item key={note.id} note={note} />
                )
              })
            }
          </div>
        </section>
      </section>
      <NoteMouse />
    </section>
  )
}
