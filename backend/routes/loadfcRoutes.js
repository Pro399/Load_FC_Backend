const express = require('express')
const router = express.Router()
const {getLoadData, setLoadData} = require('../controllers/loadfcController')

router.route('/:sys/:id').get(getLoadData).post(setLoadData)

module.exports = router