import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from '../pages/ContentRowTop';
import Footer from './Footer';
import { Routes, Route } from "react-router-dom";
import MoviesList from './MoviesList';
import GenresInDb from './GenresInDb';
import Page404 from '../pages/Page404';

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <Routes>
                        <Route path="/" element={<ContentRowTop />} />
                        <Route path="/filmes" element={<MoviesList />} />
                        <Route path="/generos" element={<GenresInDb /> } />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;