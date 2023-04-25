import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//setup vars

const firstBook = {
  img: 'https://m.media-amazon.com/images/I/41xNw77nsCL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
  title: 'Greenligts',
  author: 'Matthew McConaughey'
}

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/51eDMGwZVvL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
  title: 'I Will Teach You to Be Rich',
  author: 'Ramit Sethi'
}

function BookList(){
  return (
  <section className='booklist'>
    <Book 
    img={firstBook.img}
    title={firstBook.title}
    author={firstBook.author}
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing
         elit. Aperiam exercitationem harum eveniet ducimus ex! 
         Recusandae possimus temporibus necessitatibus, suscipit 
         tenetur cupiditate praesentium rerum sit veritatis minus. Odit cumque dicta molestias.
         </p>
    </Book>
    <Book 
    img={secondBook.img}
    title={secondBook.title}
    author={secondBook.author}
    ><p>Lorem ipsum dolor sit, amet consectetur 
      adipisicing elit. Debitis perspiciatis fugiat 
      expedita ex ut eius dignissimos perferendis esse repellendus mollitia.
      </p></Book>
  </section>
  )
}

const Book = ({img, title, author, children}) =>{
  // const {img, title, author} = props
  return (
    <article className='book'>
      <img src={img} alt=''/>
      <h1>{title}</h1>
      {children}
      <h4>{author}</h4>
    </article>
  )
}

ReactDOM.render(
  <BookList />,
  document.getElementById('root')
)
