import React from 'react';

const SearchBar = () => {
    return (
        <div className='searchBarCont'>
            <div className='searchCenterCont'>
                <div className='instaLogo'>
                    <img src="https://img.icons8.com/material-outlined/96/000000/instagram-new.png"/>
                </div>
                <div className='instaWordCont'>
                    <h1 className='instaWord'>Instagram</h1>
                </div>
                <div className='instaSearch'>
                    <form>
                        <input type='text' placeholder='Search' />
                    </form>
                </div>
                <div className='instaIcons'>
                    <img src="https://img.icons8.com/material-two-tone/48/000000/compass--v1.png"/>
                    <img src="https://img.icons8.com/ios/50/000000/like.png"/>
                    <img src="https://img.icons8.com/pastel-glyph/64/000000/person-male.png"/>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;