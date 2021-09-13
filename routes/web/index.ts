import { Router } from "express";
const router = Router();

router.get("/", (req, res, next) => {
  res.send("Holla Molla");
});

export { router as web };
