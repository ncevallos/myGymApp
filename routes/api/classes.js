const router = require("express").Router();
const classController = require("../../controllers/classController");


console.log("Included class routes");
// Matches with "/api/classes"
router.route("/")
  .get(classController.findAll)
  .post(classController.create);

// Matches with "/api/classes"
router.route("/Monday")
  .get(classController.findMonday);

router.route("/Tuesday")
  .get(classController.findTuesday);

router.route("/Wed")
  .get(classController.findWed);

router.route("/Thurs")
  .get(classController.findThurs);

router.route("/Fri")
  .get(classController.findFri);

router.route("/Wkend")
  .get(classController.findWkend);

// Matches with "/api/classes/:id"
router
  .route("/:id")
  .get(classController.findById)
  .put(classController.update)
  .delete(classController.remove);

module.exports = router;
