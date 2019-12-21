import React, {Component} from 'react';
import "./bootstrap.min.css";
import "./home.css";
import "./feedback.css"

class Feedback extends Component {
    render() {
        return (
            <div>
                <div className="ms-container" id="dangnhap">
                    <div className="row justify-content-sm-center w-100 h-100">

                        <div className="row">
                            <div className="col-sm-7 ml-sm-5">
                                <div className="col-sm-10 ml-sm-5 ">
                                    <ul className="nav h-100">
                                        <li className="nav-item h-100">
                                            <a className="nav-link " href="/#/trangchu">Trang chủ</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/#/huongdan">Hướng dẫn</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/#/thanhtoan">Thanh toán</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/#/giohang">Giỏ hàng</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="/#/phanhoi">phản hồi</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col_sm-2 ml-sm-5 ">
                                <form action="">
                                    <div className="input-group ">

                                        <input type="text" className="form-control" placeholder="Tìm kiếm sách"/>
                                            <div className="input-group-prepend">
                                                <button className="input-group-text">@</button>
                                            </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-sm-2 mr-sm-0 ml-sm-5 d-flex">

                                <div className="1">
                                    <a className="" href="dangki.html">Đăng kí /</a>
                                </div>
                                <div className="1">
                                    <a className="" href=""> Đăng nhập</a>
                                </div>

                            </div>
                        </div>


                    </div>
                    <div className="ms-container">
                        <div className="col-sm-8 mx-auto h-50">
                            <h1>Thông báo</h1>
                            <span>chức năng này chưa ra mắt .nếu có khiếu nại hay phản hồi gì thì bạn hay gửi nó qua gmail hoặc thông qua hotline của chúng tôi để giải quyết </span>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default Feedback;