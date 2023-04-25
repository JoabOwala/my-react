import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function BookList(){
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return <article className='book'>
    <Image />
    <Title />
    <Author />
  </article>
}

const Image = () => {
  return <img src="https://m.media-amazon.com/images/I/41xNw77nsCL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" 
  alt="" />
}

const Title = () => <h1>Greenligts</h1>


const Author = () => <h4 style={{color:'#617d98', fontSize: '0.75rem', margin:'0.25rem'}}>Matthew McConaughey</h4>


ReactDOM.render(
  <BookList />,
  document.getElementById('root')
)
