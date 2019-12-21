import React, {Component} from 'react';
import "./bootstrap.min.css"
import "./author.css"

class Author extends Component {
    render() {
        return (
            <div>
                <div className="ms-container">
                    <div className="col-sm-12 bg-info mx-auto d-flex">
                        <h1 className="ml-sm-5 ">trang tác giả</h1>
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
                <div className="ms-container d-flex">
                    <div className="col-sm-2 bg-secondary">
                        <nav className="navbar ">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/#/tacgia">Trang chính</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">Thống kê</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Danh sách lịch sử </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/#/banthao">UP bản thảo</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-sm-9 mx-auto">
                        <div className="ms-container d-flex">
                            <h1>Danh sách sách đã up</h1>

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

export default Author;