const express = require("express");
const router = express.Router();
const workerController = require("../controllers/workerController");

router.get("/workers", workerController.getWorkers);
router.post("/workers/add", workerController.createWorker);
router.put("/workers/:workerId", workerController.updateWorker)
module.exports = router;
