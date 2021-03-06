// libraries
const express = require('express');

const router = express.Router({mergeParams: true});

const db_loc_api = require('../../service/db_location_api')
const db_contains_api = require('../../service/db_contains_api')

router.get('/', async (req, res) => {
    if (req.query.search){
        // query present
        let search = req.query.search;
        search = '%' + search + '%'
        const loc_result = await db_loc_api.getLocationByPattern(search);
        const result = {
            data : loc_result
        }
        return res.send(result);
    }
    const loc_result = await db_loc_api.getAllLocation();
    const result  = {
        data : loc_result
    }
    res.send(result);
})

router.get('/:id', async (req, res) => {
    const query_result = await db_loc_api.getLocationById(req.params.id);
    console.log(query_result.length)
    let result
    if (query_result.length > 0) {
        result = {
            data: query_result[0]
        }
    }else {
        result = {
            data: null
        }
    }


    res.send(result);
})

router.get('/:id/route', async (req, res) => {
    const query_result = await db_contains_api.getAllRoutesByLocation(req.params.id);

    const result = {
        data: query_result
    }
    res.send(result);
})

router.get('/:id/destination', async (req, res) => {
    const query_result = await db_contains_api.getAllDestinationByLocation(req.params.id);
    const result = {
        data: query_result
    }
    res.send(result);
})
module.exports = router;