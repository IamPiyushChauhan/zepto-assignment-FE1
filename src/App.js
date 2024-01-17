import React, { useState } from 'react';
import UserCellGrid from './components/UserCellGrid';
import './App.css';
const userList = [
  { id: 1, imgUrl: "https://www.kasandbox.org/programming-images/avatars/spunky-sam.png", name: 'John', email: 'john@example.com' },
  { id: 2, imgUrl: "https://www.kasandbox.org/programming-images/avatars/spunky-sam-green.png", name: 'Alice', email: 'alice@example.com' },
  { id: 3, imgUrl: "https://www.kasandbox.org/programming-images/avatars/purple-pi.png", name: 'Bob', email: 'bob@example.com' },
  { id: 4, imgUrl: "https://www.kasandbox.org/programming-images/avatars/purple-pi-pink.png", name: 'Charlie', email: 'charlie@example.com' },
  { id: 5, imgUrl: "https://www.kasandbox.org/programming-images/avatars/primosaur-ultimate.png", name: 'David', email: 'david@example.com' },
  { id: 6, imgUrl: "https://www.kasandbox.org/programming-images/avatars/primosaur-tree.png", name: 'Eve', email: 'eve@example.com' },
  { id: 7, imgUrl: "https://www.kasandbox.org/programming-images/avatars/primosaur-sapling.png", name: 'Frank', email: 'frank@example.com' },
  { id: 8, imgUrl: "https://www.kasandbox.org/programming-images/avatars/orange-juice-squid.png", name: 'Grace', email: 'grace@example.com' },
  { id: 9, imgUrl: "https://www.kasandbox.org/programming-images/avatars/old-spice-man.png", name: 'Hank', email: 'hank@example.com' },
  { id: 10, imgUrl: "https://www.kasandbox.org/programming-images/avatars/old-spice-man-blue.png", name: 'Ivy', email: 'ivy@example.com' },
  { id: 11, imgUrl: "https://www.kasandbox.org/programming-images/avatars/duskpin-sapling.png", name: "Marina Augustine", email: "Marina@gmail.com" },
  { id: 12, imgUrl: "https://www.kasandbox.org/programming-images/avatars/mr-pants-green.png", name: "Nike Giannopolus", email: "Nike@gmail.com" },
  { id: 13, imgUrl: "https://www.kasandbox.org/programming-images/avatars/duskpin-seed.png", name: "Naryana Garner", email: "Garner@gmail.com" },
  { id: 14, imgUrl: "https://www.kasandbox.org/programming-images/avatars/mr-pants.png", name: "Ankit Gros", email: "Ankit@gmail.com" }
]


const App = () => {

  return (
    <div className='App'>
      <h2 style={{ color: "blue" }}>Pick Users</h2>
      <div className='main-box'>
        <UserCellGrid userList={userList} />
      </div>
    </div>

  )
};

export default App;
