/*
Tập tin này đóng vai trò khởi tạo ứng dụng Express,
thiết lập các middleware toàn cục và các route cơ sở.
*/

const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.route");
/*
require("express") & require("cors"): Nạp thư
viện framework express và middleware cors đã cài
*/

const app = express(); // Khởi tạo một đối tượng ứng dụng Express.

app.use(cors());
/*
app.use(cors());: Kích hoạt cơ chế CORS (Cross-Origin Resource Sharing),
cho phép các ứng dụng Frontend chạy ở domain/cổng khác (như Vue.js chạy
ở cổng 5173 hay 8080) có thể gửi request đến Backend này.
*/
app.use(express.json());
/*
Middleware có sẵn của Express, tự động phân tích dữ liệu dạng JSON gửi
lên trong phần body của request thành đối tượng JavaScript (req.body).
*/
app.use("/api/contacts", contactsRouter);
/*
app.use("/api/contacts", contactsRouter);: Mọi yêu cầu có đường dẫn bắt
đầu bằng /api/contacts sẽ được chuyển tiếp cho contact.route.js xử lý.
*/

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

module.exports = app;
/*
Xuất đối tượng app để tách biệt cấu hình ứng
dụng với phần lắng nghe cổng khởi động server.
*/
