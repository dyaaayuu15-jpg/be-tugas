const router = require("express").Router();
const pasien = require("../controllers/pasienController");
const auth = require("../middlewares/middlewareAuth");

router.post("/", auth, pasien.create);
router.get("/", auth, pasien.list);
router.put("/:id", auth, pasien.update);
router.delete("/:id", auth, pasien.delete);

module.exports = router;
