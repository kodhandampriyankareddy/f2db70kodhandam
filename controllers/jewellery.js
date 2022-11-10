
var jewellery = require('../models/jewellery'); 
 
// List of all Costumes 
exports.jewellery_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: jewellery list'); 
}; 
 
// for a specific Costume. 
exports.jewellery_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: jewellery detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.jewellery_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: jewellery create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.jewellery_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: jewellery delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.jewellery_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: jewellery update PUT' + req.params.id); 
};