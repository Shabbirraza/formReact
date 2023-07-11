import React from 'react'
import styles from './Navigation.module.css'

function Navigation() {
//  console.log(styles)
  return (
    
    <div className={`${styles.navbar}`}>
      <div className={`${styles.logoDiv}`}>
        
          <img src="/public/images/logo.png" alt="" />
        
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </div>
  )
}

export default Navigation