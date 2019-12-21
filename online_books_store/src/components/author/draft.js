import React, {Component} from 'react';
import "./bootstrap.min.css"
import "./author.css"

class Draft extends Component {
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
                                    <a className="nav-link" href="#">Trang chính</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">Thống kê</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="tacgia.html">Danh sách lịch sử </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="">UP bản thảo</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-sm-9 mx-auto">
                        <div className="ms-container">
                            <div className="col-sm-8 mx-auto mt-5 mb-5">
                                <h2 className="mx-auto">UP bản thảo</h2>
                                <form action="">
                                    <div className="form-group">
                                        <label>tên:</label>
                                        <input type="text" className="form-control" placeholder=" tên tác phẩm"
                                               name="yourname"/>
                                    </div>
                                    <div className="form-group">
                                        <label>danh mục:</label>
                                        <input type="text" className="form-control" placeholder="danh mục của tác phẩm"
                                               name=""/>
                                    </div>
                                    <div className="form-group">
                                        <label>hình ảnh</label>
                                        <input type="" className="form-control" name=""/>
                                    </div>
                                    <div className="form-group">
                                        <label> số lượng</label>
                                        <input type="number" className="form-control" placeholder="số lượng yêu cầu"
                                               name=""/>
                                    </div>
                                    <div className="form-group">
                                        <label>giá cả</label>
                                        <input type="number" className="form-control" placeholder="giá cả" name=""/>
                                    </div>
                                    <div className="form-group">
                                        <label>bản thảo</label>
                                        <input type="text" className="form-control" placeholder="bản thảo" name=""/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Draft;