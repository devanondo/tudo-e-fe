import { Container } from '@mui/material';
import React from 'react';
import { Navigation } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import Slider from '../../utils/Slider/Slider';
import Services from '../Home/Services';
import Footer from '../Layout/Header/Footer';
import Header from '../Layout/Header/Header';
import SubHeader from '../Layout/SubHeader/SubHeader';
import Testimonial from '../Testimonial/Testimonial';
import './About.scss';

const happyCustomer = [
    {
        img: 'https://new.axilthemes.com/demo/template/etrade/assets/images/about/shape-01.png',
        title: '40,000+ Happy Customer',
        des: 'Empower your sales teams with industry tailored solutions that support.',
    },
    {
        img: 'https://new.axilthemes.com/demo/template/etrade/assets/images/about/shape-02.png',
        title: '16 Years of Experiences ',
        des: 'Empower your sales teams with industry tailored solutions that support.    ',
    },
    {
        img: 'https://new.axilthemes.com/demo/template/etrade/assets/images/about/shape-03.png',
        title: '12 Awards Won ',
        des: 'Empower your sales teams with industry tailored solutions that support.',
    },
];

const team = [
    {
        img: 'https://new.axilthemes.com/demo/template/etrade/assets/images/team/team-01.png',
        name: 'John Anderson',
        designation: 'Founder',
    },
    {
        img: 'https://new.axilthemes.com/demo/template/etrade/assets/images/team/team-02.png',
        name: 'John Anderson',
        designation: 'Founder',
    },
    {
        img: 'https://new.axilthemes.com/demo/template/etrade/assets/images/team/team-03.png',
        name: 'John Anderson',
        designation: 'Founder',
    },
    {
        img: 'https://new.axilthemes.com/demo/template/etrade/assets/images/team/team-04.png',
        name: 'John Anderson',
        designation: 'Founder',
    },
    {
        img: 'https://new.axilthemes.com/demo/template/etrade/assets/images/team/team-01.png',
        name: 'John Anderson',
        designation: 'Founder',
    },
];

const breakSlide = {
    640: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    720: {
        slidesPerView: 2,
        spaceBetween: 40,
    },

    1024: {
        slidesPerView: 3,
        spaceBetween: 40,
    },

    1400: {
        slidesPerView: 4,
        spaceBetween: 40,
    },
};

export default function About() {
    return (
        <div>
            <Header />
            <SubHeader page={'About Page'} subPage={'About Us'} />
            <Container>
                <div className="about">
                    <div className="flex">
                        <div className="img_wrapper">
                            <img
                                src="https://new.axilthemes.com/demo/template/etrade/assets/images/about/about-01.png"
                                alt=""
                            />
                        </div>
                        <div className="content">
                            <div className="sub_title">About Store</div>
                            <div className="title">
                                Online shopping includes both buying things online.
                            </div>
                            <p>
                                Salesforce B2C Commerce can help you create unified, intelligent
                                digital commerce experiences — both online and in the store. Empower
                                your sales teams with industry tailored solutions that support
                                manufacturers as they go digital, and adapt to changing markets &
                                customers faster by creating new business. Salesforce B2B Commerce
                                offers buyers the seamless, self-service experience of online
                                shopping with all the B2B
                            </p>
                        </div>
                    </div>

                    <div className="grid">
                        {happyCustomer.map((item, idex) => (
                            <div className="card">
                                <img src={item.img} alt="" />

                                <div className="card_title">{item.title}</div>
                                <p>{item.des}</p>
                            </div>
                        ))}
                    </div>

                    <div className="slider">
                        <Slider
                            loop={true}
                            space={40}
                            navigation={true}
                            clickable={true}
                            module={[Navigation]}
                            breakPoint={breakSlide}
                            classNameAdditional={''}
                        >
                            {team.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="team_card">
                                        <div className="img_wrapper">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="designation">{item.designation}</div>
                                        <div className="name">{item.name}</div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Slider>
                    </div>

                    <div className="flex">
                        <div className="img_wrapper">
                            <img
                                src="https://new.axilthemes.com/demo/template/etrade/assets/images/about/about-02.png"
                                alt=""
                            />
                        </div>
                        <div className="content">
                            <div className="sub_title">Features #01</div>
                            <div className="title">Solutions that work together</div>
                            <p>
                                Publish your eCommerce site quickly with our easy-to-use store
                                builder— no coding required. Migrate your items from your point of
                                sale system or turn your Instagram feed into a shopping site and
                                start selling fast. Square Online works for all kinds of
                                businesses—retail, restaurants, services.
                            </p>
                            <button className="greenButton">Get In Touch</button>
                        </div>
                    </div>
                    <div className="flex flex_reverse">
                        <div className="img_wrapper">
                            <img
                                src="https://new.axilthemes.com/demo/template/etrade/assets/images/about/about-03.png"
                                alt=""
                            />
                        </div>
                        <div className="content">
                            <div className="sub_title">Features #01</div>
                            <div className="title">Solutions that work together</div>
                            <p>
                                Publish your eCommerce site quickly with our easy-to-use store
                                builder— no coding required. Migrate your items from your point of
                                sale system or turn your Instagram feed into a shopping site and
                                start selling fast. Square Online works for all kinds of
                                businesses—retail, restaurants, services.
                            </p>

                            <button className="greenButton">Get In Touch</button>
                        </div>
                    </div>
                </div>
            </Container>
            <Services />
            <Testimonial />
            <Footer />
        </div>
    );
}
