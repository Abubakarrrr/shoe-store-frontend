import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProductDetailsCarousel = ({ images }) => {
    return (
        <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]'>
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className='productCarousel'
            >
                
                {images?.map((img) => {
                    return (
                        <img key={img.id} src={img.attributes.url} alt={img.attributes.name}></img>
                    )
                }
                )}
                {/* <img src='/p1.png'></img>
                    <img src='/p2.png'></img>
                    <img src='/p3.png'></img>
                    <img src='/p4.png'></img>
                    <img src='/p5.png'></img>
                    <img src='/p6.png'></img>
                    <img src='/p7.png'></img> */}

            </Carousel>
        </div>
    )
}

export default ProductDetailsCarousel