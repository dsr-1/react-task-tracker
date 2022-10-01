import React from "react"
import Button from "./Button"
import PropTypes from 'prop-types'


const Header = ({title,onAd,showAdd}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button 
      color={showAdd?'red':'green'} 
      text={showAdd?'Close':'Add'} 
      onClick={onAd}/>
    </header>
  )
}

  Header.defaultProps={
  title:'Task tracker',
  }

  Header.prototype={
    title:PropTypes.string,
  }


export default Header
