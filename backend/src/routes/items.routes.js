const { Router } = require("express");
const itemCtrl = require('../controllers/items.controllers')

const router = Router()

router.get('/', itemCtrl.getItems)
router.get('/:id', itemCtrl.getItem)
router.post('/', itemCtrl.createItem)
router.put('/:id', itemCtrl.updateItem)
router.delete('/:id', itemCtrl.deleteItem)

module.exports = router