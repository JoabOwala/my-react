import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function BookList(){
  return (
  <section className='booklist'>
    <Book />
  </section>
  )
}

const Book = () =>{
  const title = 'Greenligts'
  const author = 'Matthew McConaughey'
  return (
    <article className='book'>
      <img src="https://m.media-amazon.com/images/I/41xNw77nsCL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" 
        alt="" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}

ReactDOM.render(
  <BookList />,
  document.getElementById('root')
)
