const express = require('express')
const router = express.Router()


const Sample = require('../models/sampleModel')


router.post('/check', async (req, res) => {
    const sample = new Sample(req.body)

    try {
        await sample.save()
        res.status(201).send(sample)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/', async (req, res) => {
    try {
        const sample = await Sample.find({})
        res.send(sample)
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router