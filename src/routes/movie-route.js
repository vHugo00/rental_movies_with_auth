import { Router } from "express";
import {
  store,
  index,
  show,
  update,
  destroy,
  findRecomendation
} from "../controllers/movie-controller.js";

import check_token from "../middleware/check_token.js";
import check_role from "../middleware/check_role.js";
import valid_age from "../middleware/valid_age.js";

const router = Router();

router.post("/", check_token, check_role(["ADM", "REC"], valid_age), store);
router.get("/", check_token, check_role(["REC", "ADM", "TOSA"]), index);
router.get("/:id", check_token, check_role(["REC", "ADM", "TOSA"]), show);
router.put("/:id", check_token, check_role(["ADM", "REC"]), update);
router.delete("/:id", check_token, check_role(["ADM", "REC"]), destroy);
router.get("/recomendation/:age", check_token, check_role(["ADM", "REC"]), findRecomendation);

export default router;