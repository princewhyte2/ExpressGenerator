const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the promos to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the promo: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promos');
    })
    .delete((req, res, next) => {
        res.end('Deleting all promotions');
    });

promoRouter.route('/:promoId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the promotion with Id' + req.params.promoId + ' to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description + ' to ' + req.params.promoId);
    })
    .put((req, res, next) => {
        res.statusCode = 200;
        res.end('PUT operation supported on /promotions ' + req.params.promoId);
    })
    .delete((req, res, next) => {
        res.end('Deleting all promotions with id ' + req.params.promoId);
    });

module.exports = promoRouter;