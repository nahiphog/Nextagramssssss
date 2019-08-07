import React from 'react'

function MyButton(props) {
  return (
    <button
      style={{
        background: 'red',
        color: 'brown'
      }}
    >
      { props.children }
    </button>
  )
}

export default MyButton
