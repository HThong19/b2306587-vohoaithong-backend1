/*
Trong các ứng dụng Express chuyên nghiệp, việc định nghĩa một lớp
lỗi riêng kế thừa từ lớp Error gốc giúp ta chủ động gán mã trạng
thái HTTP (như 400, 404, 500) và thông báo lỗi tương ứng một cách
có cấu trúc.
*/
class ApiError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

module.exports = ApiError; // Xuất lớp này ra để sử dụng trong app.js và các controller sau này.
/*
constructor(statusCode, message): Hàm khởi tạo nhận vào 2 tham số:
- statusCode: Mã lỗi HTTP (ví dụ: 404 cho Not
Found, 400 cho Bad Request, 500 cho Server Error).
- message: Chuỗi thông báo lỗi gửi về cho client.
*/
