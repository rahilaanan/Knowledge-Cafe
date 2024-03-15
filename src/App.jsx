
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] =useState([]);
  const [read, setRead] =useState(0);

  const handleBookmark = blog =>{
   const newBookmarks =[...bookmarks,blog];
   setBookmarks(newBookmarks);
  }
  const handleRead = time =>{
    const newReading = read + time;
    setRead(newReading)
  }

  return (
    <>
      
      <Header></Header>
     <main className='flex justify-between items-center mx-14 p-5'>
     <Blogs handleBookmark={handleBookmark} handleRead={handleRead}></Blogs>
    
     <Bookmarks bookmarks={bookmarks} read={read} ></Bookmarks>
     </main>
     
    </>
  )
}

export default App
