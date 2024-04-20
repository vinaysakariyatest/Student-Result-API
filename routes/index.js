var express = require('express');
var router = express.Router();
var student=require('../controller/sudentcontroller')

router.post('/addresult',student.add_result)
router.post('/updateresult/:id',student.update_result)
router.get('/deleteresult/:id',student.delete_result)

module.exports = router;
