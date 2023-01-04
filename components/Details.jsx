import React from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { BOOK_DETAILS_URL } from '../API';
import {AiFillStar} from 'react-icons/ai'

const Details = () => {

  const {id}=useParams();
  const [book, setBook]=useState({});
  useEffect(()=>{
    axios.get(`${BOOK_DETAILS_URL}/${id}`)
    .then(res=>setBook(res.data))
    .catch(err=>console.log(err))
  },[id])



  return (
    <div className='details container text-white'>
      <div className="detailLeft">
        <div className="imgBox">
          <img src={book.image_url} />
          <br /><br/>
          <div className="rating">
            Author : <strong>{book.authors}</strong>
            <br />
            Rating : <strong>{book.rating}</strong>
            <br />
            Format : {book.format}
            <br />
            Pages : {book.num_pages}
          </div>
        </div>
      </div>
      <div className="detailRight">
        <h3>{book.title} </h3>
        <small>{book.edition}</small>
        <br />

        <p>Genres : {book.genres}</p>
        <br />
        <i>{book.Quote1}</i>
        <br /><br/>
        <p>{book.description}</p>

      </div>
    </div>
  )
}

export default Details
