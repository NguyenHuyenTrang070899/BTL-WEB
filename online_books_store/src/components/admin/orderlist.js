import React, {Component} from 'react';
import "./bootstrap.min.css";
import "./admin.css";

class Orderlist extends Component {
    render() {
        return (
            <div>
                <div class="ms-container">
                    <div class="col-sm-12 bg-info mx-auto d-flex   ">
                        <h1 class="ml-sm-5 ">trang admin</h1>
                        <div class="col_sm-2 mr-sm-0 mx-auto">
                            <form action="">
                                <div class="input-group ">

                                    <input type="text" class="form-control" placeholder="Seach for"/>
                                    <div class="input-group-prepend">
                                        <button class="input-group-text">@</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="ms-container d-flex">
                    <div class="col-sm-2 bg-secondary">
                        <nav class="navbar ">
                            <ul class="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/#/thongke">Thống kê</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#/danhsachdonhang">Danh sách đơn hàng </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#/danhsachnhanvien">Danh sách thành viên</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#/danhsachbanthao">Danh sách bản thảo</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="col-sm-9 mx-auto">
                        <div class="ms-container d-flex">
                            <h1>Danh sách Đơn hàng</h1>

                        </div>
                        <div class="container">

                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên</th>
                                    <th>Email</th>
                                    <th>SĐT</th>
                                    <th>Địa chỉ</th>
                                    <th>tổng tiền</th>

                                    <th>trạng thái</th>
                                    <th>thao tác</th>
                                </tr>
                                </thead>
                                <tbody>

                                <tr>
                                    <td>1</td>
                                    <td>Jo</td>
                                    <td>john@example.com</td>
                                    <td>01233216050</td>
                                    <td>cầu giấy</td>
                                    <td>190000</td>
                                    <td>
                                        <div class="btn btn-primary"> đang xử lý</div>
                                    </td>
                                    <td>
                                        <div class="btn btn-danger"> xóa</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Jo</td>
                                    <td>john@example.com</td>
                                    <td>01233216050</td>
                                    <td>cầu giấy</td>
                                    <td>190000</td>
                                    <td>
                                        <div class="btn btn-primary"> đang xử lý</div>
                                    </td>
                                    <td>
                                        <div class="btn btn-danger"> xóa</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Jo</td>
                                    <td>john@example.com</td>
                                    <td>01233216050</td>
                                    <td>cầu giấy</td>
                                    <td>190000</td>
                                    <td>
                                        <div class="btn btn-primary"> đang xử lý</div>
                                    </td>
                                    <td>
                                        <div class="btn btn-danger"> xóa</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Jo</td>
                                    <td>john@example.com</td>
                                    <td>01233216050</td>
                                    <td>cầu giấy</td>
                                    <td>190000</td>
                                    <td>
                                        <div class="btn btn-primary"> đang xử lý</div>
                                    </td>
                                    <td>
                                        <div class="btn btn-danger"> xóa</div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Orderlist;