import React from 'react'

export default function Popup(props) {
  return (
    <div className="popup">
      <div className="popup__content">
        <div className="popup__close">x</div>
        <pre>{JSON.stringify(props)}</pre>
      </div>
    </div>
  )
}