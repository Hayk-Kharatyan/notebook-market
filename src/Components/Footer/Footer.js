import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-container'>
      <div className='shop'>
        <h3>Shop</h3>
        <span>Basket</span>
        <span>How to order?</span>
        <span>Payment</span>
        <span>Shipment</span>
        <span>Installment Terms</span>
        <span>Service Center</span>
        <span>Feedback</span>
        <span>Terms and Conditions</span>
        <span>Payment by Zeppa system</span>
      </div>
      <div className='assortment'>
        <h3>Assortment</h3>
        <span>Notebooks</span>
        <span>Computers</span>
        <span>Phones</span>
        <span>Tablets</span>
        <span>Monitors</span>
        <span>Smart House</span>
        <span>Peripheral devices</span>
        <span>Accessories</span>
        <span>Games</span>
      </div>
      </div>
    </footer>
  )
}
