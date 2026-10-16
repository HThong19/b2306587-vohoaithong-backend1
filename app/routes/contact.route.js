/*
Router có nhiệm vụ phân luồng: ánh xạ giữa URL path, phương thức
HTTP (GET, POST, PUT, DELETE) với hàm xử lý tương ứng trong controller.
*/

const express = require("express");
const contacts = require("../controllers/contact.controller"); // Nhập toàn bộ các hàm xử lý đã định nghĩa ở controller.

const router = express.Router(); // Tạo một đối tượng router độc lập của Express.

router
  .route("/")
  .get(contacts.findAll)
  .post(contacts.create)
  .delete(contacts.deleteAll);
/*
router.route("/"): Gom nhóm các phương thức có cùng đường dẫn gốc của router (/):
- .get(contacts.findAll): Nếu là phương thức GET thì middleware contacts.findAll sẽ xử lý
- post(contacts.create): Nếu là phương thức POST thì middleware contacts.create sẽ xử lý
- delete(contacts.deleteAll): Nếu là phương thức DELETE thì middleware contacts.deleteAll sẽ xử lý
*/

router.route("/favorite").get(contacts.findAllFavorite);

router
  .route("/:id") // Khai báo tham số động (:id)
  .get(contacts.findOne)
  .put(contacts.update)
  .delete(contacts.delete);

module.exports = router;
