import React from 'react';

const PostContainer = (props) => {
    return (
        <div>
            <div className='userName'>
                <img src={} /> // thumbNailImg
                <h2>{}</h2> // user's name
            </div>
            <div className='post-img'>
                <img src={} /> // main post image
            </div>
            <div className='comment-sec'>
                // Add comment component here
            </div>
            <div className='add-comment'>
                <form>
                    <input placeholder='Add a comment...' />
                    <img/> // 3 dots img
                </form>
            </div>
        </div>
    );
};

export default PostContainer