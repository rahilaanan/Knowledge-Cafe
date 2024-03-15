
import PropTypes from 'prop-types'; 
const Blog = ({ blog }) => {
    const {title,cover,author, author_img,posted_date,reading_time} = blog;
    return (
        <div>
             <img src={cover} alt={`Cover picture of title ${title}`} />
            <div className='flex justify-between items-center'>
            <div className='flex items-center space-x-4'>
                <img className='w-16 my-7' src={author_img} alt="" />
                <div>
                    <p className='font-bold text-lg'>{author}</p>
                    <p>{posted_date}</p>
                </div>
             </div>
             <p>{reading_time} min read</p>
            </div>
            <h2 className='text-2xl font-bold my-5'>{title}</h2>
           
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired
}
export default Blog;