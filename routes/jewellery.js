var express = require('express');
const jewellery_controlers= require('../controllers/jewellery'); 
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('jewellery', { title: 'Search Results jewellery' });
// });

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

/* GET jewelleries */ 
router.get('/', jewellery_controlers.jewellery_view_all_Page ); 
/* GET detail jewellery page */
router.get('/detail', jewellery_controlers.jewellery_view_one_Page);
/* GET create jewellery page */
router.get('/create',secured, jewellery_controlers.jewellery_create_Page);
/* GET create update page */
router.get('/update',secured, jewellery_controlers.jewellery_update_Page);
/* GET delete jewellery page */ 
router.get('/delete',secured, jewellery_controlers.jewellery_delete_Page); 
 
// GET request for one jewellery. 
router.get('/jewelleries/:id', jewellery_controlers.jewellery_detail); 
module.exports = router;