import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
const Books = () => {
    const [book, setBook] = useState([])
    useEffect(() => {
        fetch('BookData.json')
            .then(res => res.json())
            .then(data => setBook(data))

    }, [])
    return (
        <div>
            <h2 className="text-[40px] font-bold text-center">Books</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 lg:w-full w-[90%] mx-auto gap-6'>
                {
                    book.map(book => <Book book={book} key={book.bookId}></Book>)
                }

            </div>
        </div>
    );
};

export default Books;