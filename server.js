/*
Tập tin này là điểm vào chính (entry point) của dự án, có nhiệm
vụ nạp ứng dụng app và lắng nghe kết nối tại cổng được chỉ định.
*/

const app = require("./app");
const config = require("./app/config");
/*
require("./app"): Nhập đối tượng ứng dụng Express được định nghĩa ở app.js
require("./app/config"): Nhập file cấu hình để lấy thông tin cổng.
*/

const PORT = config.app.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
/*
app.listen(PORT, ...): Bắt đầu lắng nghe các kết nối
từ client gửi đến cổng PORT (mặc định là cổng 3000).
console.log(...): In thông báo ra màn hình console
khi server khởi động thành công.
*/
