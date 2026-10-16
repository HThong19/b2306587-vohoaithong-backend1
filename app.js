/*
Tập tin này đóng vai trò khởi tạo ứng dụng Express,
thiết lập các middleware toàn cục và các route cơ sở.
*/

const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.route");
const ApiError = require("./app/api-error");

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

// handle 404 response
app.use((req, res, next) => {
  /*
  Code ở đây sẽ chạy khi không có route được định nghĩa nào
  khớp với yêu cầu. Gọi next() để chuyển sang middleware xử lý lỗi
  */
  return next(new ApiError(404, "Resource not found"));
});

// define error-handling middleware last, after other app.use() and routes calls
app.use((err, req, res, next) => {
  /*
  Middleware xử lý lỗi tập trung.Trong các đoạn code xử lý ở các
  route, gọi next(error) sẽ chuyển về middleware xử lý lỗi này
  */
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

module.exports = app;
/*
Xuất đối tượng app để tách biệt cấu hình ứng
dụng với phần lắng nghe cổng khởi động server.
*/
