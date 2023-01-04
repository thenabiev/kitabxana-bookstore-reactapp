import React, { useEffect, useState } from 'react';
import { API_URL } from '../API';
import axios from 'axios';
import {BsBookmarkHeart, BsBookmarkHeartFill} from 'react-icons/bs';
import {HiOutlineInformationCircle} from 'react-icons/hi';
import { useAppContext } from '../context/appContext';
import {useNavigate} from 'react-router-dom';

const BookList = () => {
    const [books, setBooks]=useState([]);

    const {favorites, addToFavorites, removeFromFavorites}=useAppContext();

    const navigate=useNavigate();

    const favoriteChecker=(id)=>{
        const boolean=favorites.some(book=>book.id===id);
        return boolean;
    }

    useEffect(()=>{
        axios.get(API_URL)
        .then(res=>setBooks(res.data))
        .catch(err=>console.error(err))
        console.log(books)
    },[API_URL])

  return (
   <div className="container">
     <div className='bookList'>
        {
            books.map(book=>(
                <div key={book.id} className='card text-white'>
                    <div className="imgBox">
                        <img src={book.image_url}  />
                    </div>
                    <h4>
                        {book.title}
                    </h4>
                    <div className="description">
                        <p>{book.Quote1}</p>
                        <p>{book.Quote2}</p>
                        <div className="layer"></div>
                    </div>
                    <div className="btnContainer">
                        {
                            favoriteChecker(book.id) ?(
                                <BsBookmarkHeartFill 
                                onClick={()=>removeFromFavorites(book.id)}
                                size='1.8rem' className='cardIcon'/>
                            ):(
                                <BsBookmarkHeart 
                                onClick={()=>addToFavorites(book)}
                                size='1.8rem' className='cardIcon'/>
                            )
                        }
                        
                        <HiOutlineInformationCircle 
                        onClick={()=>navigate(`/books/${book.id}`)}
                        size='1.8rem' className='cardIcon'/>
                    </div>
                </div>
            ))
        }
      
     </div>
   </div>
  )
}

export default BookList
