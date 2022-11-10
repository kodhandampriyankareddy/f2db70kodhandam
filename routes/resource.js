
var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var jewellery_controller = require('../controllers/jewellery'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/jewelleries', jewellery_controller.jewellery_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/jewelleries/:id', jewellery_controller.jewellery_delete); 
 
// PUT request to update Costume. 
router.put('/jewelleries/:id', jewellery_controller.jewellery_update_put); 
 
// GET request for one Costume. 
router.get('/jewelleries/:id', jewellery_controller.jewellery_detail); 
 
// GET request for list of all Costume items. 
router.get('/jewelleries', jewellery_controller.jewellery_list); 
 
module.exports = router; 