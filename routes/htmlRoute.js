const path = require("path");
const router = require("express").Router();


//router requests to html pages - KSJ
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html")
  );
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html")
  );
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html")
  );
});

module.exports = router