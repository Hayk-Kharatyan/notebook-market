import React, { useContext } from 'react'
import "./Compare.css"
import { Context } from '../Context'
import Preloader from '../Preloader/Preloader'
export default function Compare() {
  let noteContext = useContext(Context)
  return (
    <section className='compare'>
      <Preloader/>
      <table>
        <thead className="cart-table-head">
          <tr className="table-head-row">
            <th className='th-del'></th>
            <th className='td_img'>image</th>
            <th>Brand</th>
            <th>Processor Brand</th>
            <th>Processor Model</th>
            <th>Processor Cores</th>
            <th>Processor Threads</th>
            <th>Processor frequency</th>
            <th>VideoCart Brand</th>
            <th>VideoCart Model</th>
            <th>Color</th>
            <th>Ram</th>
            <th className='storage'>Storage</th>
          </tr>
        </thead>
        <tbody>
          {
            noteContext.statecompare.map((st) => {
              console.log(st.processor.icon);
              return (
                <tr key={st.id} className="table-body-row">
                  <td className="product-remove"><button onClick={() => {
                    noteContext.dispatchCompare({
                      type: "notebook-compare-del",
                      payload: {
                        note:st
                      }
                    })
                  }} className='icon-cancel-circle'></button></td>
                  <td className="product-image"><img width="100px" height="70px" src={st.img} alt="img"></img></td>
                  <td className="product-brand">{st.brand}</td>
                  <td className="product-proccessor-model"><span className={st.processor.icon}></span></td>
                  <td className='product-proccessor-line'>{st.processor.collection} {st.processor.model}</td>
                  <td className="product-proccessor-cores">{st.processor.cores}</td>
                  <td className="product-proccessor-threads">{st.processor.threats}</td>
                  <td className="product-proccessor-frequency">{st.processor.frequency}</td>
                  <td className="product-videocart-brand">{st.videocart.brand}</td>
                  <td className="product-videocart-model"><span className={st.videocart.icon}></span>{st.videocart.line} {st.videocart.model} {st.videocart.videoram + "gb"} {st.videocart.videotype}</td>
                  <td className="product-color">{st.color}</td>
                  <td className="product-ram">{st.ram + "gb"}</td>
                  <td className="product-storage">{st.storage + "gb"}</td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </section>
  )
}
