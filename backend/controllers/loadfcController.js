const asyncHandler = require('express-async-handler')
const colors = require('colors')
const { NewData57_21, NewData57_57, NewData57_53, NewData118_97, NewData118_117, NewData118_106, NewData14_9, NewData14_12, NewData30_21, NewData30_30 } = require('../csvReader')

const getLoadData = asyncHandler(async (req, res) => {

    console.log('Endpoint hit!!'.red.italic.underline);

    if (req.params.sys == 14) {
        if (req.params.id == 9) {
            let newData14_9 = await NewData14_9.find()
            res.status(200).send(newData14_9)
        }
        else if (req.params.id == 12) {
            let newData14_12 = await NewData14_12.find()
            res.status(200).send(newData14_12)
        }
    }
    else if (req.params.sys == 30) {
        if (req.params.id == 21) {
            let newData30_21 = await NewData30_21.find()
            res.status(200).send(newData30_21)
        }
        else if (req.params.id == 30) {
            let newData30_30 = await NewData30_30.find()
            res.status(200).send(newData30_30)
        }
    }
    else if (req.params.sys == 57) {
        if (req.params.id == 21) {
            let newData57_21 = await NewData57_21.find()
            res.status(200).send(newData57_21)
        }
        else if (req.params.id == 57) {
            let newData57_57 = await NewData57_57.find()
            res.status(200).send(newData57_57)
        }
        else if (req.params.id == 53) {
            let newData57_53 = await NewData57_53.find()
            res.status(200).send(newData57_53)
        }
    }
    else if (req.params.sys == 118) {
        if (req.params.id == 97) {
            let newData118_97 = await NewData118_97.find()
            res.status(200).send(newData118_97)
        }
        else if (req.params.id == 117) {
            let newData118_117 = await NewData118_117.find()
            res.status(200).send(newData118_117)
        }
        else if (req.params.id == 106) {
            let newData118_106 = await NewData118_106.find()
            res.status(200).send(newData118_106)
        }
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
