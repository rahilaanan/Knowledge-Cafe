
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,read}) => {
    // console.log(bookmarks)
    return (
        <div>
            <p>Spent Time: {read}</p>
            <p className="text-2xl">Book Marks:{bookmarks.length}</p>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark} key={bookmark.id} read={read}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    read: PropTypes.number
}
export default Bookmarks;