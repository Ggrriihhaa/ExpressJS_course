import { Router } from "express";
import { getAll } from "../controllers/servers.js";

const router = Router()

// router.get('/api/server', (req, res) => {
// res.json({test: 42})
// })

router.get('/api/server', getAll)

export default router