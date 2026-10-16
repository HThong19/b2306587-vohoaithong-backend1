exports.create = (req, res) => {
  res.send({ message: "create handler" });
};

exports.findAll = (req, res) => {
  res.send({ message: "findAll handler" });
};

exports.findOne = (req, res) => {
  res.send({ message: "findOne handler" });
};

exports.update = (req, res) => {
  res.send({ message: "update handler" });
};

exports.delete = (req, res) => {
  res.send({ message: "delete handler" });
};

exports.deleteAll = (req, res) => {
  res.send({ message: "deleteAll handler" });
};

exports.findAllFavorite = (req, res) => {
  res.send({ message: "findAllFavorite handler" });
};
/*
exports.<tên_hàm>: Xuất từng hàm ra ngoài module để các file khác (cụ thể là file route) có thể gọi.
(req, res) => { ... }: Cấu trúc hàm middleware chuẩn của Express gồm 2 đối số chính:
- req (Request): Đại diện cho yêu cầu gửi từ client (chứa headers, query, params, body...).
- res (Response): Đại diện cho phản hồi từ server gửi về client.
- res.send({ message: "..." }): Phương thức gửi phản hồi về cho client dưới dạng chuỗi JSON.
*/
