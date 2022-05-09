import React from 'react';
import './Home.css'
import BlogSection from '../Blogsection/BlogSection';
import Carousel from '../Carousel/Carousel';
import Popular from '../Popular/Popular';

const Home = () => {
    return (
       <div>
        {/* <Carousel></Carousel> */}
        
        <BlogSection></BlogSection>
        {/* <Popular></Popular> */}

       </div>
    );
};

export default Home;