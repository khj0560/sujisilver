import React, {useState} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";

const SlideWrapper = styled.div`
  margin: 20px 0;
`
SwiperCore.use([Navigation, Thumbs]);
const Slide = ({images}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <React.Fragment>
      <SlideWrapper id="subPageSlide">
        <Swiper
          id="main"
          thumbs={{ swiper: thumbsSwiper }}
          tag="section"
          wrapperTag="ul"
          navigation
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
        >
          {images.map((image,index)=>(
            <SwiperSlide key={`slide-${index}`} tag="li">
              <img
                src={image} 
                style={{ listStyle: 'none' }}
                alt={`Slide ${index}`}>
              </img>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          id="thumbs"
          spaceBetween={5}
          slidesPerView={6}
          watchSlidesVisibility={true}
          watchSlidesProgress={true}
          onSwiper={setThumbsSwiper}
        >
          {images.map((image,index)=>(
            <SwiperSlide key={`slide-${index}`} tag="li" style={{ listStyle: 'none' }}>
              <img
                src={image} 
                alt={`Thumbnail ${index}`}>
              </img>
            </SwiperSlide>
          ))}
        </Swiper>
      </SlideWrapper>
    </React.Fragment>
    )
}
Slide.propTypes= {
  images: PropTypes.array.isRequired
}
export default Slide;