import React from "react";
import './Footer.scss';

import {NavLink} from "react-router-dom";
import {toast} from 'react-toastify';

import payment from '../image/payment.png';

class Footer extends React.Component{

    state = {
        email: '',
        check_mail: false
    }

    EnterMail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    CheckMail = () => {
        if(!this.state.email){
            toast.error("Ô nhập email chưa được nhập")
            return;
        }
        this.setState({
            check_mail: true
        })
    }

    render(){
        return(
            <section className = "footer">
                <div className = "box-container">

                    <div className = "box">
                        <h3> Thực Phẩm Xanh &nbsp; <i className = "fa fa-shopping-basket"/> </h3>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, saepe. </p>
                        <div className = "share">
                            <a href="#" className="fab fa-facebook-f"/>
                            <a href="#" className="fab fa-twitter"/>
                            <a href="#" className="fab fa-instagram"/>
                            <a href="#" className="fab fa-linkedin"/>
                        </div>
                    </div>

                    <div className = "box">
                        <h3> Thông tin liên hệ </h3>
                        <a href = "#" className="links"> <i className = "fa fa-phone"/> +123-456-7890 </a>
                        <a href = "#" className="links"> <i className = "fa fa-phone"/> +2111-222-3333 </a>
                        <a href = "#" className="links"> <i className = "fa fa-envelope"/> thucphamxanh@gmail.com </a>
                        <a href = "#" className="links"> <i className = "fa fa-map-marker-alt"/> 42 Ngô Đức Kế, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh </a>
                    </div>

                    <div class = "box">
                        <h3> Truy cập nhanh </h3>
                        <NavLink to = "/" className = "links"> <i className = "fa fa-arrow-right"/> Home </NavLink>
                        <NavLink to = "/music_app" className = "links"> <i className = "fa fa-arrow-right"/> Music App </NavLink>
                        <NavLink to = "/todo_list" className = "links"> <i className = "fa fa-arrow-right"/> Todo List </NavLink>
                    </div>

                    <div class="box">
                        <h3> Thông báo </h3>
                        <p> Đăng kí để nhận các khuyến mãi </p>
                        { 
                            this.state.check_mail === true 
                            ? 
                            <div className = "confirm"> Email đang được xác nhận </div> 
                            :
                            <input type = "email" placeholder = "Email của bạn..." className = "email"
                                onChange = {(event) => this.EnterMail(event)}/>
                        }
                        <input type = "submit" value = "Đăng kí" className = "btn"
                            onClick = {() => this.CheckMail()}/>
                        <img src = {payment} className = "payment-img" alt=""/>
                    </div>

                </div>
                <div className = "credit"> Trang web thuộc <span> Thực Phẩm Xanh </span> </div>
            </section>
        );
    }
}

export default Footer;