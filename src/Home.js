import React from 'react'
import Product from "./Product";
import './Home.css';

function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/row/sadlp/AVD-8688_SADLP_Intl_TheTick_SeriesLaunch_ROW_Image_Right_FT.jpg" alt=""/>
        
        {/*Product id , title, price, rating, image */}
        <div className="home_row">
        <Product 
            id="12321341"
            title="The Psychology of Money"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/51jRBz6Ug3L.jpg"
            />
        <Product 
            id="12321341"
            title="The Psychology of Money"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/51jRBz6Ug3L.jpg"
            />
        
       
        </div>
        <div className="home_row">
        <Product 
            id="12321341"
            title="The Psychology of Money"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/51jRBz6Ug3L.jpg"
            />
        <Product 
            id="12321341"
            title="The Psychology of Money"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/51jRBz6Ug3L.jpg"
            />
        <Product 
            id="12321341"
            title="The Psychology of Money"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/51jRBz6Ug3L.jpg"
            />
       
        </div>
        <div className="home_row">
        <Product 
            id="12321341"
            title="The Psychology of Money"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/51jRBz6Ug3L.jpg"
            />

        </div>

        </div>
    )
}

export default Home
