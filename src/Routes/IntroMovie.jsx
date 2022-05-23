/* IntroMovie.jsx */

/* Import */
import styled from "styled-components";
import IntroCard from "../Components/IntroCard.jsx";
import { FlexColumnDiv } from "../Components/GlobalStyled/CommonStyled.jsx";
import HeaderNavi from "../Components/HeaderNavi.jsx";
import { bookName, dayRelease, bookImgs } from "../api/BookApi.jsx";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "../Components/swiper.css"

// 숫자열, 문자열 관리
const slidesPerView = 1
const spaceBetween = 30;

const IntroMovie = () => {
    const numList = [0,1,2,3,4,5,6];
            
    const Cards = numList.map((value, index)=>(<IntroCard key={index} img={bookImgs[index]} name={bookName[index]} date={dayRelease[index]}></IntroCard>))
    return (
      <>
        {/* Header Menu : fixed Component */}
        <HeaderNavi />
        <Wrap>
           <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {Cards.map((value)=>(<SwiperSlide>{value}</SwiperSlide>))}
          </Swiper>     
        </Wrap>
        </>
    )
}

// 
export default IntroMovie;

// styled components
const Wrap = styled(FlexColumnDiv)`
  min-width: 1300px;
  width: 90%;
  margin: 60px auto;
`;
