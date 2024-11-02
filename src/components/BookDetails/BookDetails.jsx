import { useLoaderData, useParams } from "react-router-dom";
import { setToAddStoreReadList } from "../LocalDb/LocalDb";


const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id)
    const {bookId: currentid, image}=book;
    const handleMarksRead=(id)=>{
        // understand what to store or save??  =>bookId
        //where to store => database
        //array,list,collection
        // check : if the book already Read or not{if no=> add mark as read}
        setToAddStoreReadList(id)
    }
    return (
        <div>
            <img className="w-[500px] h-[600px]" src={image} alt="" />
            <div className="flex gap-6">

            <button onClick={()=>handleMarksRead(bookId)} className="btn btn-accent btn-outline"> mark as Read </button>
                <button className="btn btn-accent">WishList</button>
            </div>
        </div>
    );
};

export default BookDetails;