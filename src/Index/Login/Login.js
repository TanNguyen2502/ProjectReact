import React from "react"

class Login extends React.Component{

    render(){

        let {activeLogin} = this.props;

        return(
            <>
                {
                    activeLogin === true ? 
                    <div>
                        <form action="" className="login-form">
                            <h3> Đăng Nhập </h3>
                            <input type="email" placeholder="Email..." className="box"/>
                            <input type="password" placeholder="Mật khẩu..." className="box"/>
                            <p> Quên mật khẩu? <a href="#"> &nbsp; Hãy click đây </a> </p>
                            <p> Chưa có tài khoản? <a href="#"> &nbsp; Tạo ngay </a> </p>
                            <input type="submit" value="Đăng Nhập" className="btn"/>
                        </form>
                    </div>
                    :
                    <></>
                }
            </>
        );
    }
}

export default Login;
