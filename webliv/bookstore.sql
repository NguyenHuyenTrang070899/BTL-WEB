-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 19, 2019 lúc 06:19 PM
-- Phiên bản máy phục vụ: 10.1.38-MariaDB
-- Phiên bản PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `bookstore`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` char(15) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` tinyint(4) DEFAULT '1',
  `level` tinyint(4) DEFAULT '1',
  `avatar` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`id`, `name`, `address`, `email`, `password`, `phone`, `status`, `level`, `avatar`, `created_at`, `updated_at`) VALUES
(3, 'Huyền Trang', '211 Hàm Nghi', 'trang12345.vn@gmail.com', '25d55ad283aa400af464c76d713c07ad', '0328360161', 1, 2, NULL, '2019-12-19 14:06:50', '2019-12-19 14:06:50');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `slug` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `images` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `banner` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `home` tinyint(4) DEFAULT '0',
  `status` tinyint(4) DEFAULT '1',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `name`, `slug`, `images`, `banner`, `home`, `status`, `created_at`, `updated_at`) VALUES
(1, ' Sách bán chạy', 'sach-ban-chay', NULL, NULL, 1, 1, '2019-12-19 14:18:28', '2019-12-19 14:18:28'),
(2, ' Sách thiếu nhi', 'sach-thieu-nhi', NULL, NULL, 1, 1, '2019-12-19 14:22:43', '2019-12-19 14:22:43'),
(3, ' Tiểu thuyết', 'tieu-thuyet', NULL, NULL, 1, 1, '2019-12-19 14:31:38', '2019-12-19 14:31:38'),
(4, ' Sách kinh tế', 'sach-kinh-te', NULL, NULL, 1, 1, '2019-12-19 14:31:53', '2019-12-19 14:31:53'),
(5, ' Truyện tranh', 'truyen-tranh', NULL, NULL, 1, 1, '2019-12-19 14:32:11', '2019-12-19 14:32:11'),
(6, ' Giáo án', 'giao-an', NULL, NULL, 1, 1, '2019-12-19 14:32:41', '2019-12-19 14:32:41');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `feedback`
--

CREATE TABLE `feedback` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `feedback`
--

INSERT INTO `feedback` (`id`, `name`, `email`, `content`) VALUES
(1, 'Trang', '1123123@gmail.com', 'tốt				\r\n            				'),
(2, 'TT', 'res@gmail.com', 'bán hàng chất lượng quá             				');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `transaction_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `qty` tinyint(4) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `transaction_id`, `product_id`, `qty`, `price`, `created_at`, `updated_at`) VALUES
(11, 6, 32, 1, 855000, '2019-12-19 08:56:15', '2019-12-19 08:56:15');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `slug` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `sale` tinyint(4) DEFAULT '0',
  `thunbar` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `number` int(11) NOT NULL DEFAULT '0',
  `head` int(11) DEFAULT '0',
  `view` int(11) DEFAULT '0',
  `hot` tinyint(4) DEFAULT '0',
  `pay` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `name`, `slug`, `price`, `sale`, `thunbar`, `category_id`, `content`, `number`, `head`, `view`, `hot`, `pay`, `created_at`, `updated_at`) VALUES
(32, 'Hackers Ielts', 'Hackers Ielts', 900000, 5, 'ielts.jpg', 1, 'How to hack???', 2, 0, 0, 0, 1, '2019-12-19 15:58:41', '2019-11-12 10:23:33'),
(33, 'Làm bạn với bầu trời', 'Làm bạn với bầu trời', 600000, 20, 'bau-troi.jpg', 2, 'Một câu chuyện giản dị, chứa đầy bất ngờ cho tới trang cuối cùng. Và đẹp lộng lẫy, vì lòng vị tha và tình yêu thương, khiến mắt rưng rưng vì một nỗi mừng vui hân hoan. Cuốn sách như một đốm lửa thắp lên lòng khát khao sống tốt trên đời.', 3, 0, 0, 0, 0, '2019-12-19 16:01:26', NULL),
(34, 'Carl Và Hành Trình Kì Diệu', 'Carl Và Hành Trình Kì Diệu', 999999, 10, 'carl.jpg', 1, 'Làm thế nào mà một sinh vật nhỏ bé lại có thể làm nên điều khác biệt to lớn? Hãy hỏi chú giun đất mà xem!\r\n\r\nCarl là một chú giun đất. Ngày nào Carl cũng đào bới, biến đất cứng thành tơi xốp. Nhưng cho đến khi chú chuột đồng hỏi: “Cậu làm thế để làm gì?”', 2, 0, 0, 0, 0, '2019-12-19 15:57:09', NULL),
(36, 'BTS - Hành trình trinh phục', 'BTS - Hành trình trinh phục', 666666, 10, 'bts.jpg', 1, 'Cuốn sách bán chạy nhất 2019', 1, 0, 0, 0, 0, '2019-12-19 15:51:33', NULL),
(38, 'Thăng Long Buổi Đầu Dựng Nước', 'Thăng Long Buổi Đầu Dựng Nước', 500000, 50, 'thang-long.jpg', 5, 'rên tay các em là những cuốn truyện tranh lịch sử, kết quả từ cuộc thi Biên soạn Truyện tranh lịch sử theo sách giáo khoa Lịch sử hiện hành do Nhà xuất bản Giáo dục Việt Nam phối hợp với Hội nhà văn Việt Nam và Hội Khoa học Lịch sử Việt Nam tổ chức.', 2, 0, 0, 0, 0, '2019-12-19 15:48:41', '2019-11-12 10:21:30'),
(39, 'Chí Phèo', 'Chí Phèo', 666666, 10, 'chi-pheo.jpg', 3, 'Chí Phèo – Với những tình tiết hấp hẫn Nam Cao đã đưa người đọc tái hiện bức tranh chân thực nông thôn Việt Nam trước 1945, nghèo đói, xơ xác trên con đường phá sản, bần cùng, hết sức thê thảm, người nông dân bị đẩy vào con đường tha hóa, lưu manh hóa.', 2, 0, 0, 0, 1, '2019-12-19 15:46:51', '2019-11-11 08:23:52'),
(40, 'Mắt biếc', 'Mắt biếc', 350000, 5, 'matbiec.jpg', 1, 'Mắt biếc là một tác phẩm được nhiều người bình chọn là hay nhất của nhà văn Nguyễn Nhật Ánh. Sách Mắt biếc đã được dựng thành phim điện ảnh, đạo diễn bởi đạo diễn nổi tiếng với rất nhiều phim ăn khách là Victor Vũ, sản xuất và phân phối bởi Galaxy Cinema ', 10, 0, 0, 0, 0, '2019-12-19 15:45:06', NULL),
(41, 'Dịch Vụ Khách Hàng Thương Vụ 1 Vốn 4 Lời', 'Dịch Vụ Khách Hàng Thương Vụ 1 Vốn 4 Lời', 1000000, 3, '1-von.jpg', 4, 'Bất cứ doanh nhân thành công nào cũng đều nằm lòng mấu chốt thành công trong kinh doanh chính là những nhân viên tiền tuyến. Bởi khi khách hàng nghĩ về công ty của bạn, hình ảnh đầu tiên lướt qua tâm trí của họ là gương mặt của những nhân viên mà họ gặp g', 2, 0, 0, 0, 0, '2019-12-19 15:43:08', NULL),
(42, 'Cười Ra Vàng', 'Cười Ra Vàng', 50000, 1, 'cuoi-ra-vang.jpg', 5, 'Trong câu chuyện dân gian Cười Ra Vàng, người anh độc ác đuổi em trai đi khỏi quê nhà. Ra vùng đất hoang, em bắt con mèo cày ruộng, khiến cho đá thiêng bật cười ra vàng. Thấy em trở nên giàu có, người anh tham lam cũng lân la tới xin…', 2, 0, 0, 0, 0, '2019-12-19 15:40:40', '2019-11-12 10:47:47'),
(43, 'Nghiên Cứu Định Lượng Trong Kế Toán', 'Nghiên Cứu Định Lượng Trong Kế Toán', 200000, 10, 'nghien-cuu.jpg', 6, 'PGS.TS. Đinh Phi Hổ, PGS.TS. Võ Văn Nhị và PGS.TS. Trần Phước, các tác giả cuốn sách này, là những người có kinh nghiệm lâu năm trong giảng dạy và nghiên cứu những vấn đề kinh tế, kế toán và kiểm toán. Các tác giả đã có nhiều sách, bài báo được công bố tr', 7, 0, 0, 0, 0, '2019-12-19 15:35:12', '2019-11-13 14:46:53'),
(44, ' Giống hệt như anh cả', ' Giống hệt như anh cả', 300000, 10, 'huou.jpg', 5, 'Trong cuộc chơi trốn tìm, đến lượt hươu con tìm anh cả.\r\n\r\n“Các bạn có nhìn thấy anh mình không? Anh ấy cao, nhanh và dũng cảm lắm kìa.”\r\n\r\nNhưng ai cũng bảo hươu con cũng nhanh, cao và dũng cảm giống y như anh cả. Hươu con chả tin đâu, làm sao mà cậu sán', 4, 0, 0, 0, 0, '2019-12-19 15:39:36', '2019-11-13 14:48:53'),
(45, 'Tắt đèn', 'Tắt đèn', 100000, 2, 'tat-den.jpg', 3, 'Tắt Đèn là một tác phẩm quen thuộc với các bạn đọc Việt Nam, và được xem là một trong những thiên \"kinh điển\" của nền văn chương thế kỉ XX. Bằng ngòi bút hiện thực đặc sắc, Ngô Tất Tố đã xây dựng nên câu chuyện về gia đình Chị Dậu, đại diện cho tầng lớp b', 5, 0, 0, 0, 0, '2019-12-19 15:28:54', '2019-11-13 14:51:43'),
(46, ' Hỏi đáp cùng em', ' Hỏi đáp cùng em', 159000, 6, 'dong-vat.jpg', 2, 'Thế giới động vật quanh ta còn ẩn chứa biết bao điều kỳ thú và bí ẩn. Hơn 200 câu hỏi đáp trong cuốn sách này sẽ giải đáp tất tần tật thắc mắc của các bạn nhỏ về vô số loài động vật, dù là những con vật vô cùng thân quen với cuộc sống con người hay những ', 13, 0, 0, 0, 0, '2019-12-19 15:21:30', '2019-11-13 14:57:18');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `transaction`
--

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `users_id` int(11) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `status` tinyint(4) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `transaction`
--

INSERT INTO `transaction` (`id`, `amount`, `users_id`, `note`, `status`, `created_at`, `updated_at`) VALUES
(1, 123123, 1, 'Free ship', 1, '2019-11-11 04:16:43', '2019-11-11 06:52:31'),
(2, 154232, 2, 'ok', 1, '2019-11-11 04:31:05', '2019-11-11 08:09:52'),
(3, 18523985, 1, 'noooo', 1, '2019-11-11 08:00:43', '2019-11-11 08:14:08'),
(4, 3398999, 1, 'test', 1, '2019-11-11 08:18:04', '2019-11-11 08:19:09'),
(5, 659999, 2, 'yeah', 1, '2019-11-11 08:23:06', '2019-11-11 08:23:52'),
(6, 897750, 6, '', 1, '2019-12-19 08:56:15', '2019-12-19 14:19:42');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` char(15) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `avatar` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` tinyint(4) DEFAULT '1',
  `token` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `phone`, `address`, `avatar`, `status`, `token`, `created_at`, `updated_at`) VALUES
(1, 'Phạm Văn Thành', 'udanchi3105@gmail.com', '6b5a94a55646a8bcd3588923ac495338', '0942495160', '123123', NULL, 1, NULL, NULL, NULL),
(2, 'Nguyễn Anh Tuấn', 'tuan160498@gmail.com', '3367717821fb9efa37bd114d26cc413a', '093242341', 'HN', NULL, 1, NULL, NULL, NULL),
(5, 'Trang', 'trang12345.vn@gmail.com', '6c8e7923f116a85dd3ed7fafd7353b5a', '0328360161', '211 Hàm Nghi', NULL, 1, NULL, '2019-12-19 07:37:15', '2019-12-19 07:37:15'),
(6, 'Trang', 'trangtrang35@gmail.com', 'b7d7a241d3928d357aaf9af1b69a79c4', '234567890', '211 Hàm Nghi', NULL, 1, NULL, '2019-12-19 08:55:23', '2019-12-19 08:55:23');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transaction_id` (`transaction_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_id` (`users_id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT cho bảng `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`transaction_id`) REFERENCES `transaction` (`id`);

--
-- Các ràng buộc cho bảng `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
