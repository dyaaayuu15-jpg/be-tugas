const router = require("express").Router();
const antre = require("../controllers/antrianController");
const auth = require("../middlewares/middlewareAuth");

router.post("/", auth, antre.buatAntrian);
router.get("/", auth, antre.list);
router.put("/:id", auth, antre.updateStatus);

module.exports = router;
