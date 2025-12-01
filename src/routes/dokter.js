const router = require("express").Router();
const dokter = require("../controllers/controllerDokter");
const auth = require("../middlewares/middlewareAuth");

router.post("/", auth, dokter.create);
router.get("/", dokter.list);
router.put("/:id", auth, dokter.update);
router.delete("/:id", auth, dokter.delete);

module.exports = router;
