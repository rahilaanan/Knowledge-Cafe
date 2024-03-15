import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {

    const {title} =bookmark;
    return (
        <div>
            <h3 className='text-2xl bg-slate-50 p-4 rounded-lg space-y-3'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.obj
}
export default Bookmark;
