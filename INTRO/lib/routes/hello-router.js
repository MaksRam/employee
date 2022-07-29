const Router = require("@koa/router");
const router = new Router();

const mainController = require("../controllers/main-controller");

router.get("/joke", mainController.getJoke);
router.get("/Mars", mainController.getHelloMars);
router.get("/", mainController.getHello);
router.get("/hello", mainController.getHelloCustom)
router.get("/eesti", mainController.getEesti)
router.get("/noyou", mainController.getNoYou)
router.get("/add", mainController.getNumber)

module.exports = router;
