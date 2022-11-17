var jewellery = require('../models/jewellery'); 
 
// List of all jewelleries 
exports.jewellery_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: jewellery list'); 
}; 

// List of all jewellerys 
exports.jewellery_list = async function(req, res) { 
    try{ 
        thejewelleries = await jewellery.find(); 
        res.send(thejewelleries); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// // for a specific jewellery. 
exports.jewellery_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Amoazon detail: ' + req.params.id); 
}; 
// for a specific jewellery. 
exports.jewellery_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await jewellery.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
// List of all jewellerys 
// exports.jewellery_detail = async function(req, res) { 
//     try{ 
//         thejewelleries = await jewellery.find(); 
//         res.send(thejewelleries); 
//     } 
//     catch(err){ 
//         res.status(500); 
//         res.send(`{"error": ${err}}`); 
//     }   
// }; 
 
// Handle jewellery create on POST. 
exports.jewellery_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: jewellery create POST'); 
}; 
 
// List of all jewellerys 
exports.jewellery_create_post = async function(req, res) { 
    try{ 
        thejewelleries = await jewellery.find(); 
        res.send(thejewelleries); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle jewellery create on POST. 
exports.jewellery_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new jewellery(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"jewellery_type":"goat", "cost":12, "size":"large"} 
    document.item = req.body.item; 
    document.quantity = req.body.quantity; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 


// Handle jewellery delete form on DELETE. 
exports.jewellery_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: jewellery delete DELETE ' + req.params.id); 
}; 
// Handle jewellery delete on DELETE. 
exports.jewellery_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await jewellery.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
// Handle a show one view with id specified by query
exports.jewellery_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await jewellery.findById( req.query.id)
    res.render('jewellerydetail',
   { title: 'jewellery Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
 // Handle building the view for creating a jewellery. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.jewellery_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('jewellerycreate', { title: 'jewellery Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 

   // Handle building the view for updating a jewellery.
// query provides the id
exports.jewellery_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await jewellery.findById(req.query.id)
    res.render('jewelleryupdate', { title: 'jewellery Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };


 
// List of all jewellerys 
// exports.jewellery_delete = async function(req, res) { 
//     try{ 
//         thejewelleries = await jewellery.find(); 
//         res.send(thejewelleries); 
//     } 
//     catch(err){ 
//         res.status(500); 
//         res.send(`{"error": ${err}}`); 
//     }   
// }; 
 
// Handle a delete one view with id from query 
exports.jewellery_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await jewellery.findById(req.query.id) 
        res.render('jewellerydelete', { title: 'jewellery Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};


// Handle jewellery update form on PUT. 
// exports.jewellery_update_put = function(req, res) { 
//     res.send('NOT IMPLEMENTED: jewellery update PUT' + req.params.id); 
// }; 

// List of all jewellerys 
// exports.jewellery_update_put = async function(req, res) { 
//     try{ 
//         thejewelleries = await jewellery.find(); 
//         res.send(thejewelleries); 
//     } 
//     catch(err){ 
//         res.status(500); 
//         res.send(`{"error": ${err}}`); 
//     }   
// }; 

// Handle jewellery update form on PUT. 
exports.jewellery_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await jewellery.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.item)toUpdate.item = req.body.item; 
        if(req.body.quantity) toUpdate.quantity = req.body.quantity; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
//Handle building the view for updating a jewellery. 


// Handle building the view for creating a jewellery. 
// No body, no in path parameter, no query. 
// Does not need to be async 


// query provides the id 
exports.jewellery_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await jewellery.findById(req.query.id) 
        res.render('jewelleryupdate', { title: 'jewellery Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.jewellery_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await jewellery.findById( req.query.id) 
        res.render('jewellerydetail',  
{ title: 'jewellery Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// VIEWS 
// Handle a show all view 
exports.jewellery_view_all_Page = async function(req, res) { 
    try{ 
        thejewelleries = await jewellery.find(); 
        res.render('jewellerys', { title: 'jewellery Search Results', results: thejewelleries }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 


