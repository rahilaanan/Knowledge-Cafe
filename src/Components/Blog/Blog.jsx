
import PropTypes from 'prop-types'; 
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog,handleBookmark }) => {
    const {title,cover,author, author_img,posted_date,reading_time,hashtags} = blog;
    return (
        <div>
             <img className='' src={cover} alt={`Cover picture of title ${title}`} />
            <div className='flex justify-between items-center'>
            <div className='flex items-center space-x-4'>
                <img className='w-16 my-7' src={author_img} alt="" />
                <div>
                    <p className='font-bold text-lg'>{author}</p>
                    <p>{posted_date}</p>
                </div>
             </div>
             <div className='flex space-x-2 text-lg'>
             <p>{reading_time} min read</p>
             <button onClick={()=>handleBookmark(blog)}><CiBookmark></CiBookmark>
</button>
             </div>

            </div>
            <h2 className='text-2xl font-bold my-5'>{title}</h2>
           <div className='flex space-x-4 my-5'>
           <p className='text-gray-400'>#{hashtags[0]}</p>
           <p className='text-gray-400'>#{hashtags[1]}</p>
           </div>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.function
}
export default Blog;