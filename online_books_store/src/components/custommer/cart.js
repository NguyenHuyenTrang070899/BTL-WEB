import React, {Component} from 'react';
import "./bootstrap.min.css";
import "./home.css";

class Cart extends Component {
    render() {
        return (
            <div>
                <div className="ms-container" id="trangchu1">
                    <div className="row justify-content-sm-center w-100 h-100">

                        <div className="row justify-content-sm-center w-100 h-100 d-flex">


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
                                            <a className="nav-link" href="/#thanhtoan">Thanh toán</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/#/giohang">Giỏ hàng</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="/#/phanhoi">Phản hồi</a>
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
                                <div className="ml-2">
                                    <a className="" href="dangnhap.html"> Đăng nhập /</a>
                                </div>
                                <div className="ml-2">
                                    <a className="" href="dangnhap.html"> Tác giả</a>
                                </div>

                            </div>


                        </div>
                        <div className="ms-container">

                            <div className="col-sm-10 mx-auto">
                                <div className="ms-container d-flex ">
                                    <h1>Giỏ hàng</h1>

                                </div>
                                <div className="container">

                                    <table className="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên</th>
                                            <th>Danh mục</th>

                                            <th>giá cả</th>
                                            <th>số lượng</th>
                                            <th>thành tiền</th>
                                            <th>THao tác</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>hoi đấp cungd em</td>
                                            <td>thiếu nhi</td>

                                            <td>100000</td>
                                            <td>10</td>
                                            <td>10000000</td>
                                            <td>
                                                <div className="btn btn-danger"> xóa</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>hoi đấp cungd em</td>
                                            <td>thiếu nhi</td>

                                            <td>100000</td>
                                            <td>10</td>
                                            <td>10000000</td>
                                            <td>
                                                <div className="btn btn-danger"> xóa</div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>1</td>
                                            <td>hoi đấp cungd em</td>
                                            <td>thiếu nhi</td>

                                            <td>100000</td>
                                            <td>10</td>
                                            <td>10000000</td>
                                            <td>
                                                <div className="btn btn-danger"> xóa</div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>1</td>
                                            <td>hoi đấp cungd em</td>
                                            <td>thiếu nhi</td>

                                            <td>100000</td>
                                            <td>10</td>
                                            <td>10000000</td>
                                            <td>
                                                <div className="btn btn-danger"> xóa</div>
                                            </td>
                                        </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="ms-container my-2">
                            <div className="row justify-content-sm-center">
                                <h2 className="text-center mx-auto text-white  pt-5">Tư vấn hỗ trợ</h2>
                                <div className="col-sm-2 mx-auto ">
                                    <div className="col-sm-3 mx-auto"></div>
                                </div>
                                <div className=" d-flex col-lg-9 mx-auto py-5">
                                    <div className=" d-flex flex-column col-lg-3 mx-auto pt-3 ">
                                        <img className="mx-auto" src="anh/9.png"/>
                                        <div className="text-center"><p>Hoàng Thị Dung</p></div>
                                        <div className="text-center text-danger sdt1"><p>01233216050</p></div>
                                        <div className="col-lg3 mx-auto my-0 ">
                                            <img src="anh/icon14.png"/>
                                            <img src="anh/icon15.png"/>
                                        </div>


                                    </div>
                                    <div className=" d-flex flex-column col-lg-3 mx-auto pt-3 ">
                                        <img className="mx-auto" src="anh/9.png"/>
                                        <div className="text-center"><p>Ngô Bá Thiệu</p></div>
                                        <div className="text-center text-danger sdt1"><p>01233216050</p></div>
                                        <div className="col-lg3 mx-auto my-0 ">
                                            <img src="anh/icon14.png"/>
                                            <img src="anh/icon15.png"/>
                                        </div>


                                    </div>
                                    <div className=" d-flex flex-column col-lg-3 mx-auto pt-3 ">
                                        <img className="mx-auto" src="anh/9.png"/>
                                        <div className="text-center"><p>Trần Văn Tuấn</p></div>
                                        <div className="text-center text-danger sdt1"><p>01233216050</p></div>
                                        <div className="col-lg3 mx-auto my-0 ">
                                            <img src="anh/icon14.png"/>
                                            <img src="anh/icon15.png"/>
                                        </div>


                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="ms-container" id="lienhe">
                            <div className="row justify-content-center">
                                <div className="col-lg-9  canle1 mx-auto">
                                    <h4>Liên hệ ngay hôm nay</h4>
                                    <p>Giải đáp vấn đề và đưa ra đề xuất thích hợp nhất dành cho bạn</p>
                                    <div className="col-lg-12">
                                        <div className="col-lg-3">
                                            <div className="col-sm-3">
                                                <img src="anh/icon_phone.png"/>
                                            </div>
                                            <div className="col-lg-12">
                                                <div><h6>Hỗ trợ 24/7</h6></div>
                                                <div className="sdt "><p>01233216050</p></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="col-lg-3">
                                                <img src="anh/icon_phone.png"/>
                                            </div>
                                            <div className="col-lg-12">
                                                <div><h6>Giải đáp thắc mắc</h6></div>
                                                <div className="sdt"><p>012216050</p></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="col-lg-3">
                                                <img src="anh/icon_phone.png"/>
                                            </div>
                                            <div className="col-lg-12">
                                                <div><h6>Hỗ trợ kinh doanh</h6></div>
                                                <div className="sdt"><p>012316050</p></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="col-lg-3">
                                                <img src="anh/icon_email.png"/>

                                            </div>
                                            <div className="col-lg-12">
                                                <div><h6>Email của chúng tôi</h6></div>
                                                <div className="text-center sdt"><p>nguoigiucua@gmail.com</p></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="bg-dark py-4">
                            <div className="container pt-3 text-white">
                                <div className="mb-1">Công ty trách nhiệm hữu hạn NGƯỜI GIỮ CỮA</div>
                                <div className="mb-1"> Điện thoại: 0365946422</div>
                                <div className="mb-3"> Địa chỉ: 144 xuân thủy, Cầu Giấy, Hà Nội, Việt Nam</div>
                                <h2 className=" text-white">Chi nhánh</h2>
                                <div className="row text-white">
                                    <div className="col-lg-3 pb-2">
                                        <i className="fa fa-map-marker pr-1 "></i>Cơ sở 1, trụ sở chính: Tầng 6, toà C,
                                        22 Thành Công, Hà
                                        Nội
                                    </div>
                                    <div className="col-lg-3 pb-2">
                                        <i className="fa fa-map-marker pr-1 "></i>
                                        Cơ sở 2: Tầng 2, 29T1 Hoàng Đạo Thuý, Hà Nội
                                    </div>
                                    <div className="col-lg-3 pb-2">
                                        <i className="fa fa-map-marker pr-1 "></i>
                                        Cơ sở 3: Tầng 6, 107 Nguyễn Phong Sắc, Hà Nội
                                    </div>
                                    <div className="col-lg-3 pb-2">
                                        <i className="fa fa-map-marker pr-1 "></i>
                                        Cơ sở 4: Tầng 5, 71 Nguyễn Chí Thanh, Hà Nội
                                    </div>
                                    <div className="col-lg-3 pb-2">
                                        <i className="fa fa-map-marker pr-1 "></i>
                                        Cơ sở 5: 144, Xuân Thủy, Cầu Giấy, Hà Nội
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;