import React from "react";
import './Content.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/bundle';
import 'swiper/css/autoplay';

import feature1 from '../image/feature-img-1.png';
import feature2 from '../image/feature-img-2.png';
import feature3 from '../image/feature-img-3.png';
import product1 from '../image/product-1.png';
import product2 from '../image/product-2.png';
import product3 from '../image/product-3.png';
import product4 from '../image/product-4.png';
import product5 from '../image/product-5.png';
import product6 from '../image/product-6.png';
import product7 from '../image/product-7.png';
import product8 from '../image/product-8.png';
import cat1 from '../image/cat-1.png';
import cat2 from '../image/cat-2.png';
import cat3 from '../image/cat-3.png';
import cat4 from '../image/cat-4.png';
import pic1 from '../image/pic-1.png';
import pic2 from '../image/pic-2.png';
import pic3 from '../image/pic-3.png';
import pic4 from '../image/pic-4.png';
import blog1 from '../image/blog-1.jpg';
import blog2 from '../image/blog-2.jpg';
import blog3 from '../image/blog-3.jpg';

class Content extends React.Component{

    state = {
        feature: [ 
            {img: feature1, title: 'Tươi Sạch và Hữu Cơ'}, 
            {img: feature2, title: 'Giao Hàng Miễn Phí'},
            {img: feature3, title: 'Thanh Toán Dễ Dàng'} 
        ],
        category: [
            {img: cat1, title: 'Rau củ'}, 
            {img: cat2, title: 'Trái cây'},
            {img: cat3, title: 'Sản phẩm từ sữa'},
            {img: cat4, title: 'Thịt'} 
        ],
        reviewer: [ {img: pic1}, {img: pic2}, {img: pic3}, {img: pic4}],
        product_1: [
            {img: product5, title: 'Khoai tây'},
            {img: product6, title: 'Bơ'},
            {img: product7, title: 'Cà rốt'},
            {img: product8, title: 'Chanh xanh'}
        ],
        product_2: [
            {img: product1, title: 'Cam'},
            {img: product2, title: 'Hành tây'},
            {img: product3, title: 'Thịt bò'},
            {img: product4, title: 'Bắp cải'}
        ],
        blog: [ {img: blog1}, {img: blog2}, {img: blog3}]
    }

    render(){

        let {feature, blog, category, reviewer, product_1, product_2} = this.state;

        return(
            <>
                <section className = "home">
                    <div className = "content">
                        <h3> Các sản phẩm <span> hữu cơ </span> và tươi sạch </h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum veniam facere tempore nisi. </p>
                        <a href = "#" className = "btn"> Mua Ngay </a>
                    </div>
                </section>

                <section className = "features">
                    <h1 className = "heading"> <span> dịch vụ </span> cửa hàng </h1>
                    <div className = "box-container">
                        {
                            feature.map((item_feature, index) => {
                                return(
                                    <div className = "box">
                                        <img src = {item_feature.img} alt = ""/>
                                        <h3> {item_feature.title} </h3>
                                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum! </p>
                                        <a href = "#" className = "btn"> Tìm Hiểu Thêm </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>

                <section className = "products">
                    <h1 className = "heading"> <span> Sản phẩm </span> cửa hàng </h1>
                    <Swiper
                        autoplay = {{
                            delay: 7500,
                            disableOnInteraction: false
                        }}
                        breakpoints = {{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1020: {
                                slidesPerView: 3,
                            }
                        }}
                        centeredSlides = {true}
                        loop = {true}
                        spaceBetween = {20}
                    >
                        <div className = "swiper product-slider">
                            <div className = "swiper-wrapper">
                                {
                                    product_1.map((item_product_1, index) => {
                                        return(
                                            <SwiperSlide className="box-swiper2">
                                                <img src = {item_product_1.img} alt = ""/>
                                                <h3> {item_product_1.title} </h3>
                                                <div className = "price"> 20.000 VNĐ - 50.000 VNĐ </div>
                                                <div className = "stars">
                                                    <i className = "fa fa-star"/>
                                                    <i className = "fa fa-star"/>
                                                    <i className = "fa fa-star"/>
                                                    <i className = "fa fa-star"/>
                                                    <i className = "fa fa-star-half-alt"/>
                                                </div>
                                                <a href = "#" className = "btn"> Thêm vào giỏ </a>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </div> 
                        </div>
                    </Swiper>
                    
                    <Swiper
                        autoplay = {{
                            delay: 7500,
                            disableOnInteraction: false
                        }}
                        breakpoints = {{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1020: {
                                slidesPerView: 3,
                            }
                        }}
                        centeredSlides = {true}
                        loop = {true}
                        spaceBetween = {20}
                    >
                        <div class = "swiper product-slider">
                            <div class = "swiper-wrapper">
                                {
                                    product_2.map((item_product_2, index) => {
                                        return(
                                            <SwiperSlide className = "box-swiper2">
                                                <img src = {item_product_2.img} alt = ""/>
                                                <h3> {item_product_2.title} </h3>
                                                <div className = "price"> 20.000 VNĐ - 50.000 VNĐ </div>
                                                <div className = "stars">
                                                    <i className = "fa fa-star"/>
                                                    <i className = "fa fa-star"/>
                                                    <i className = "fa fa-star"/>
                                                    <i className = "fa fa-star"/>
                                                    <i className = "fa fa-star-half-alt"/>
                                                </div>
                                                <a href = "#" className = "btn"> Thêm vào giỏ </a>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </div> 
                        </div>
                    </Swiper>
                </section>

                <section className = "categories">
                    <h1 className = "heading"> <span> Danh Mục </span> cửa hàng </h1>
                    <div className = "box-container">
                        {
                            category.map((item_category, index) => {
                                return(
                                    <div className = "box">
                                        <img src = {item_category.img} alt = ""/>
                                        <h3> {item_category.title} </h3>
                                        <p> Giảm đến 45% </p>
                                        <a href = "#" className = "btn"> Xem ngay </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>

                <section className = "review">
                    <h1 className = "heading"> <span> Đánh Giá </span> khách hàng </h1>
                    <Swiper
                        autoplay = {{
                            delay: 7500,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1020: {
                                slidesPerView: 3,
                            }
                        }}
                        centeredSlides = {true}
                        loop = {true}
                        spaceBetween = {20}
                    >
                        <div className = "review-slider">
                            {
                                reviewer.map((item_reviewer, index) => {
                                    return(
                                        <SwiperSlide className = "box-swiper2">
                                            <img src = {item_reviewer.img} alt = ""/>
                                            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur. </p>
                                            <h3> john deo </h3>
                                            <div className = "stars">
                                                <i className = "fa fa-star"/>
                                                <i className = "fa fa-star"/>
                                                <i className = "fa fa-star"/>
                                                <i className = "fa fa-star"/>
                                                <i className = "fa fa-star-half-alt"/>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </div>
                    </Swiper>
                </section>

                <section className = "blogs">
                    <h1 className = "heading"> <span> Tin Tức </span> cửa hàng </h1>
                    <div className = "box-container">
                        {
                            blog.map((item_blog, index) => {
                                return(
                                    <div className = "box">
                                        <img src = {item_blog.img} alt = ""/>
                                        <div className = "content">
                                            <div className = "icons">
                                                <a href = "#"> <i className = "fa fa-user"/> đăng bởi ABC </a>
                                                <a href = "#"> <i className = "fa fa-calendar"/> 1 tháng 5 năm 2021 </a>
                                            </div> 
                                            <h3> Trái cây & rau củ tươi </h3>
                                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, expedita. </p>
                                            <a href = "#" className = "btn"> Đọc thêm </a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </>
        );
    }
}

export default Content; 