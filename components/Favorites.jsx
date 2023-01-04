import React from 'react';
import { BsBookmarkHeart, BsBookmarkHeartFill } from 'react-icons/bs';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { useAppContext } from '../context/appContext';
import {useNavigate} from 'react-router-dom'


const Favorites = () => {


  const {favorites, addToFavorites, removeFromFavorites}=useAppContext();

  const favoriteChecker=(id)=>{
      const boolean=favorites.some(book=>book.id===id);
      return boolean;
  }

  const navigate=useNavigate();


  return (
    <div className="container">
     <div className='favorites'>
        {
          favorites.length>0 ?  (favorites.map(book=>(
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
            ))) : (<div className="empty">
                  <h2 className='text-white'>
                    You don't have any favorite books yet : /
                  </h2>
                </div>)
        }
      
     </div>
   </div>
  )
}

export default Favorites
