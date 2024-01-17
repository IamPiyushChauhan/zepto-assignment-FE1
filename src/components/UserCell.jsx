import React from 'react'

function UserCell({ imgUrl, name, email, handleChipRemove, index }) {

  return (
    <div className="user-cell">
      <img src={imgUrl} alt="Icon" style={{ width: '1.5em', height: '1.5em' }} />

      <div>{name}</div>

      <span
        className="chip-remove"
        onClick={() => handleChipRemove(index)}
      >
        X
      </span>
    </div>
  )
}

export default UserCell