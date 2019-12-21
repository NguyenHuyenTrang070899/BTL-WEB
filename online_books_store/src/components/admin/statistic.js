import React, {Component} from 'react';
import "./bootstrap.min.css";
import "./admin.css";

class Statistic extends Component {
    render() {
        return (
            <div>
                <div className="ms-container">
                    <div className="col-sm-12 bg-info mx-auto d-flex   ">
                        <h1 className="ml-sm-5 ">trang admin</h1>
                        <div className="col_sm-2 mr-sm-0 mx-auto ">
                            <form action="">
                                <div className="input-group ">

                                    <input type="text" className="form-control" placeholder="Seach for"/>
                                    <div className="input-group-prepend">
                                        <button className="input-group-text">@</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="ms-container d-flex h-100">
                    <div className="col-sm-2 bg-secondary ">
                        <nav className="navbar ">
                            <ul className="navbar-nav">
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
                    <div className="col-sm-10 mx-auto">
                        <div className="ms-container d-flex ">
                            <h1>Sản phẩm</h1>
                            <div className="col-sm-2 m-2 my-auto">
                                <div className="btn btn-primary">Thêm mới</div>
                            </div>
                        </div>
                        <div className="container">

                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên</th>
                                    <th>Danh mục</th>
                                    <th>Hình ảnh</th>
                                    <th>giá cả</th>
                                    <th>số lượng</th>
                                    <th>THao tác</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>hoi đấp cungd em</td>
                                    <td>thiếu nhi</td>
                                    <td></td>
                                    <td>100000</td>
                                    <td>10</td>
                                    <td>
                                        <div className="btn btn-danger"> xóa</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>hoi đấp cungd em</td>
                                    <td>thiếu nhi</td>
                                    <td></td>
                                    <td>100000</td>
                                    <td>10</td>
                                    <td>
                                        <div className="btn btn-danger"> xóa</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>hoi đấp cungd em</td>
                                    <td>thiếu nhi</td>
                                    <td></td>
                                    <td>100000</td>
                                    <td>10</td>
                                    <td>
                                        <div className="btn btn-danger"> xóa</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>hoi đấp cungd em</td>
                                    <td>thiếu nhi</td>
                                    <td></td>
                                    <td>100000</td>
                                    <td>10</td>
                                    <td>
                                        <div className="btn btn-danger"> xóa</div>
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

export default Statistic;