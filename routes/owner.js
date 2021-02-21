const express = require('express');
const router = express.Router();
const car = require('../models/owner_model');

router.get('/:id?',
    function(request, response) {
        if (request.params.id) {
            car.getById(request.params.id, function(err, dbResult) {
                if (err) {
                    response.json(err);
                } else {
                    response.json(dbResult);
                }
            });
        } else {
            car.getAllCars(function(err, dbResult) {
                if (err) {
                    response.json(err);
                } else {
                    response.json(dbResult);
                }
            });
        }
    });


router.post('/',
    function(request, response) {
        car.add(request.body, function(err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                console.log(dbResult);
                response.json(dbResult.insertId);
            }
        });
    });


router.delete('/:id',
    function(request, response) {
        car.delete(request.params.id, function(err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        });
    });


router.put('/:id',
    function(request, response) {
        car.update(request.params.id, request.body, function(err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        });
    });

module.exports = router;