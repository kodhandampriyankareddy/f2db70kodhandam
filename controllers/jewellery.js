var jewellery = require('../models/jewellery');

// List of all jewellery
exports.jewellery_list = function (req, res) {
    res.send('NOT IMPLEMENTED: jewellery list');
};

// List of all jewellery 
exports.jewellery_list = async function (req, res) {
    try {
        thejewelleries = await jewellery.find();
        res.send(thejewelleries);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific jewellery. 
exports.jewellery_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: jewellery detail: ' + req.params.id);
};

// for a specific jewellery. 
exports.jewellery_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await jewellery.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// List of all jewellery 
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
exports.jewellery_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: jewellery create POST');
};

// List of all jewellery 
exports.jewellery_create_post = async function (req, res) {
    try {
        thejewelleries = await jewellery.find();
        res.send(thejewelleries);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle jewellery delete form on DELETE. 
exports.jewellery_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: jewellery delete DELETE ' + req.params.id);
};

// List of all jewellery 
exports.jewellery_delete = async function (req, res) {
    try {
        thejewelleries = await jewellery.find();
        res.send(thejewelleries);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle jewellery update form on PUT. 
// exports.jewellery_update_put = function (req, res) {
//     res.send('NOT IMPLEMENTED: jewellery update PUT' + req.params.id);
// };

// List of all jewellery 
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
exports.jewellery_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await jewellery.findById(req.params.id)
        // Do updates of properties 

        if (req.body.jewellery_name)toUpdate.jewellery_name = req.body.jewellery_name;
        if (req.body.jewellery_size) toUpdate.jewellery_size = req.body.jewellery_size;
        if (req.body.jewellery_type) toUpdate.jewellery_type = req.body.jewellery_type;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};


// VIEWS 
// Handle a show all view 
exports.jewellery_view_all_Page = async function (req, res) {
    try {
        thejewelleries = await jewellery.find();
        res.render('jewelleries', {
            title: 'jewellery Search Results',
            results: thejewelleries
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle jewellery create on POST. 
exports.jewellery_create_post = async function (req, res) {
    console.log(req.body)
    let document = new jewellery();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"jewellery_type":"goat", "cost":12, "size":"large"} 
    document.jewellery_name = req.body.jewellery_name;
    document.jewellery_size = req.body.jewellery_size;
    document.jewellery_type = req.body.jewellery_type;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};