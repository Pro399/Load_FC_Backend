const asyncHandler = require('express-async-handler')
const colors = require('colors')
const { NewData21, NewData57, NewData97, NewData117, NewData53, NewData106 } = require('../csvReader')

const getLoadData = asyncHandler(async (req, res) => {

    console.log('Endpoint hit!!'.blue.italic.underline);

    if (req.params.id == 21) {
        let newData21 = await NewData21.find()
        res.status(200).send(newData21)
    }
    else if (req.params.id == 57) {
        let newData57 = await NewData57.find()
        res.status(200).send(newData57)
    }
    else if (req.params.id == 97) {
        let newData97 = await NewData97.find()
        res.status(200).send(newData97)
    }
    else if (req.params.id == 117) {
        let newData117 = await NewData117.find()
        res.status(200).send(newData117)
    }
    else if (req.params.id == 53) {
        let newData53 = await NewData53.find()
        res.status(200).send(newData53)
    }
    else if (req.params.id == 106) {
        let newData106 = await NewData106.find()
        res.status(200).send(newData106)
    }

    // res.status(200).send('GET test')
})

const setLoadData = asyncHandler(async (req, res) => {
    console.log(req.body.text);
    res.status(200).send('POST test')
})

module.exports = {
    getLoadData,
    setLoadData,

}
