import React, { useState } from 'react'

function InputDropDown({ inputValue, handleInputChange, handleKeyDown, filteredNames, handleDropdownSelect }) {


  return (
    <div className='input-with-dropdown'>

      <input
        type="text"
        placeholder="Add new users..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />

      {inputValue.length > 0 && (
        <ul className="dropdown-list">
          {filteredNames.map((item, index) => (
            <li key={index} onClick={() => handleDropdownSelect(item)}>

              <img src={item.imgUrl} alt="Icon" style={{ width: '1.5em', height: '1.5em' }} />
              <span>{item.name}</span>
              <span>{item.email}</span>


            </li>
          ))}
        </ul>
      )}

    </div>
  )
}

export default InputDropDown