const config = {
  app: {
    port: process.env.PORT || 3000,
  },
};
/*
config: Đối tượng JavaScript lưu trữ các thiết lập cấu hình của dự án.
process.env.PORT: Lấy giá trị cổng từ biến môi trường hệ thống (nếu sau này đưa lên server/cloud như Heroku, Render).
|| 3000: Toán tử logic OR; nếu không tìm thấy biến môi trường PORT, server sẽ tự động chọn cổng mặc định là 3000.
*/
module.exports = config; // Xuất đối tượng cấu hình này ra để các tập tin khác có thể nạp vào sử dụng (require).
