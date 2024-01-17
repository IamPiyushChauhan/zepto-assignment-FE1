import React, { useState } from 'react'
import UserCell from './UserCell'
import InputDropDown from './InputDropDown'


function UserCellGrid({ userList }) {
  const [userData, setUserData] = useState(userList);
  const [inputValue, setInputValue] = useState("")
  const [filteredNames, setFilteredNames] = useState([]);
  const [userInfoCells, setUserInfoCells] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    // Filter names based on the input value
    const filtered = userData.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
    console.log(filtered)
    setFilteredNames(filtered);
  };

  const handleKeyDown = (event) => {


    if (event.key === 'Backspace' && inputValue === "" && userInfoCells.length > 0) {
      const lastIndexOfChips = userInfoCells.length
      handleChipRemove(lastIndexOfChips - 1)
    }
  };

  const handleDropdownSelect = (item) => {
    setUserInfoCells([...userInfoCells, item]);
    setUserData((prev) => prev.filter((data) => data.id !== item.id))
    setInputValue("")
  };

  const handleChipRemove = (chipIndex) => {
    setUserData([...userData, userInfoCells[chipIndex]])
    setUserInfoCells(userInfoCells.filter((item, c) => c !== chipIndex));
  };

  return (
    <div className='grid-container'>
      {userInfoCells.map((userInfo, index) => (
        <UserCell imgUrl={userInfo.imgUrl} name={userInfo.name} email={userInfo.email} handleChipRemove={handleChipRemove} index={index} />
      ))}
      <InputDropDown inputValue={inputValue} handleInputChange={handleInputChange}
        handleKeyDown={handleKeyDown} filteredNames={filteredNames}
        handleDropdownSelect={handleDropdownSelect} />
    </div>
  )
}

export default UserCellGrid;
