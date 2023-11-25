import React from 'react'

import logo from '../../assets/images/logo.png'
import './index.css'

export const Header = (): JSX.Element => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="uccle-sport logo" />
      </div>
      <div className="header__title">
        <h2>Royal Uccle Sport</h2>
        <h1>Trainer sheets</h1>
      </div>
    </div>
  )
}
