var express = require('express');
const jewellery_controlers= require('../controllers/jewellery'); 
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('jewellery', { title: 'Search Results jewellery' });
// });

/* GET costumes */ 
router.get('/', jewellery_controlers.jewellery_view_all_Page ); 

// GET request for one costume. 
router.get('/jewelleries/:id', jewellery_controlers.jewellery_detail); 
module.exports = router;
