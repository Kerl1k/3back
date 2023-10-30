import Router from "express";
const router = new Router();
import UserController from "../controller/user.controller.js";

router.post("/user", UserController.createModule);
router.get("/user", UserController.getModule);
router.get("/user/:id", UserController.getOneModule);
router.put("/user", UserController.putModule);
router.delete("/user/:id", UserController.deleteModule);

user.exports = router;
