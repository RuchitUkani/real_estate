import express, { Router } from "express";
import { test, updateUser,deleteUser,getUserListings,getUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
const router = new Router();

router.route("/test").get(test)
router.route("/update/:id").post(verifyToken,updateUser)
router.route("/delete/:id").delete(verifyToken,deleteUser)
router.route("/listings/:id").get(verifyToken,getUserListings)
router.route("/:id").get(verifyToken,getUser)

export default router;