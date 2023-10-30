import Router from "express";
const router = new Router();
import modulContorller from "../controller/modul.controller.js";

router.post("/modul", modulContorller.createModule);
router.get("/modul", modulContorller.getModule);
router.get("/modul/:id", modulContorller.getOneModule);
router.put("/modul", modulContorller.putModule);
router.delete("/modul/:id", modulContorller.deleteModule);

module.exports = router;
