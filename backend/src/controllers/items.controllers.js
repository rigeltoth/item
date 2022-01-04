const itemCtrl = {}

const Item = require('../models/item.models')

itemCtrl.getItems = async (req, res) => {
    const items = await Item.find()
    res.json(items)
}

itemCtrl.getItem = async (req, res) => {
    const item = await Item.findById(req.params.id)
    res.json(item)
}

itemCtrl.createItem = async (req, res) => {
    const newItem = new Item(req.body)
    await newItem.save()

    res.json({message:'Item created'})
}

itemCtrl.updateItem = async (req, res) => {
    await Item.findByIdAndUpdate(req.params.id, req.body)
    res.json({state:'Item uploaded'})
}

itemCtrl.deleteItem = async(req, res) => {
    await Item.findByIdAndDelete(req.params.id)
    res.json({state:'Item deleted'})
}

module.exports = itemCtrl