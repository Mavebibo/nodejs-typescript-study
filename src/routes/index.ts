import express from "express";
import * as userController from "../controllers/users";

const router = express.Router();

router.get("/users", userController.getUsers);
router.get("/users/:userId", userController.getUser);
router.put("/users", userController.updateUser);
router.delete("/users/:userId", userController.deleteUser);
router.post("/users", userController.createUser);

export default router;
