import bannerImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 h-[554px] rounded-xl lg:mt-12 mt-8 lg:mb-20 mb-12">
        <div className="hero-content flex-col lg:flex-row lg:justify-around justify-center">
          
          <div className='border-2 w-[50%]'>
            <h1 className="text-5xl font-bold  mb-10">Books to freshen up your bookshelf</h1>
            <button className="btn bg-[#23BE0A] text-white">View The List</button>
          </div>
          <img
            src={bannerImage}
            className="max-w-sm rounded-lg shadow-2xl lg:w-[40%]" />
        </div>
      </div>
    );
};

export default Banner;