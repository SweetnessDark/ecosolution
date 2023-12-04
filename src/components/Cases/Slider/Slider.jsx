import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {
  AboutItem,
  DateItem,
  ImgSlider,
  Items,
  QuoteItem,
  SliderItemLink,
  SliderLinkSvg,
  WrapAboutItem,
  WrapQuoteItem,
  WrapSlider,
} from './Slider.styled';

import iconsSvg from '../../../assets/Icons/icons.svg';

const picturesSliderPhoto1 = new URL(
  '../../../images/mask-group.png',
  import.meta.url
);
const picturesSliderPhoto2 = new URL(
  '../../../images/mask-group.png',
  import.meta.url
);
const picturesSliderPhoto3 = new URL(
  '../../../images/mask-group.png',
  import.meta.url
);
const picturesSliderPhoto4 = new URL(
  '../../../images/mask-group.png',
  import.meta.url
);
const picturesSliderPhoto5 = new URL(
  '../../../images/mask-group.png',
  import.meta.url
);

export const CustomSlider = () => {
  return (
    <WrapSlider>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        slidesPerView={2}
        spaceBetween={48}
        freeMode={true}
        loop={true}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Items>
            <ImgSlider src={picturesSliderPhoto1} />
            <WrapAboutItem>
              <AboutItem>
                Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
              </AboutItem>
              <SliderItemLink href="/">
                <SliderLinkSvg>
                  <use href={iconsSvg + '#arrow-right-slider-link'} />
                </SliderLinkSvg>
              </SliderItemLink>
            </WrapAboutItem>
            <WrapQuoteItem>
              <QuoteItem>Wind Power for auto field irrigation</QuoteItem>
              <DateItem>July 2023</DateItem>
            </WrapQuoteItem>
          </Items>
        </SwiperSlide>
        <SwiperSlide>
          <Items>
            <ImgSlider src={picturesSliderPhoto2} />
            <WrapAboutItem>
              <AboutItem>Zhytomyr city Private Enterprise “Bosch”</AboutItem>
              <SliderItemLink href="/">
                <SliderLinkSvg>
                  <use href={iconsSvg + '#arrow-right-slider-link'} />
                </SliderLinkSvg>
              </SliderItemLink>
            </WrapAboutItem>
            <WrapQuoteItem>
              <QuoteItem>Solar Panels for industrial use</QuoteItem>
              <DateItem>November 2023</DateItem>
            </WrapQuoteItem>
          </Items>
        </SwiperSlide>
        <SwiperSlide>
          <Items>
            <ImgSlider src={picturesSliderPhoto3} />
            <WrapAboutItem>
              <AboutItem>
                Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
              </AboutItem>
              <SliderItemLink href="/">
                <SliderLinkSvg>
                  <use href={iconsSvg + '#arrow-right-slider-link'} />
                </SliderLinkSvg>
              </SliderItemLink>
            </WrapAboutItem>
            <WrapQuoteItem>
              <QuoteItem>Wind Power for auto field irrigation</QuoteItem>
              <DateItem>July 2023</DateItem>
            </WrapQuoteItem>
          </Items>
        </SwiperSlide>
        <SwiperSlide>
          <Items>
            <ImgSlider src={picturesSliderPhoto4} />
            <WrapAboutItem>
              <AboutItem>
                Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
              </AboutItem>
              <SliderItemLink href="/">
                <SliderLinkSvg>
                  <use href={iconsSvg + '#arrow-right-slider-link'} />
                </SliderLinkSvg>
              </SliderItemLink>
            </WrapAboutItem>
            <WrapQuoteItem>
              <QuoteItem>Wind Power for auto field irrigation</QuoteItem>
              <DateItem>July 2023</DateItem>
            </WrapQuoteItem>
          </Items>
        </SwiperSlide>
        <SwiperSlide>
          <Items>
            <ImgSlider src={picturesSliderPhoto5} />
            <WrapAboutItem>
              <AboutItem>
                Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
              </AboutItem>
              <SliderItemLink href="/">
                <SliderLinkSvg>
                  <use href={iconsSvg + '#arrow-right-slider-link'} />
                </SliderLinkSvg>
              </SliderItemLink>
            </WrapAboutItem>
            <WrapQuoteItem>
              <QuoteItem>Wind Power for auto field irrigation</QuoteItem>
              <DateItem>July 2023</DateItem>
            </WrapQuoteItem>
          </Items>
        </SwiperSlide>
      </Swiper>
    </WrapSlider>
  );
};
