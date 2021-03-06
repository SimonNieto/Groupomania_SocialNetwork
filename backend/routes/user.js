const express = require("express")
const router = express.Router()
const userCtrl = require("../controllers/user")
const multer = require("../middleware/multer-config")


router.get("/:id", userCtrl.findOneUser)
router.put("/:id", multer, userCtrl.modifyUser)
// Delete a Customer with Id
router.delete('/:id', userCtrl.deleteUser);
module.exports = router