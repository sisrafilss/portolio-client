import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Skills from '../Skills/Skills';
import TopProjects from '../TopProjects/TopProjects';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Skills />
            <TopProjects />
            <Footer />
        </div>
    );
};

export default Home;