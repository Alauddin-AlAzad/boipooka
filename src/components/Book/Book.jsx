import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const {review,image,author,bookName,bookId,tags} = book
    return (
      
            <Link to={`/books/${bookId}`}>
            <div className=" w-[374px] bg-base-100 rounded-xl border-2 shadow-xlc flex flex-col justify-center items-center">
                <figure>
                    <img className='w-[326px] h-[230px] rounded-xl pt-4'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                   {
                    tags.map((tag,idx)=> <button key={idx} className='btn text-[#23BE0A]'>{tag}</button>)
                   }
                 
                    </h2>
                    <p className='text-2xl font-bold'>{bookName}</p>
                    <p>{author}</p>
                    <div className="divider"></div>
                    <div className="card-actions justify-end">
                 
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
            </Link>
        
    );
};

export default Book;