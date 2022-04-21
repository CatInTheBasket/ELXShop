const express = require('express');
const router = express.Router();
const Controller = require('../controller/controller.js');

//router.get('/', Controller.formProduct);

router.get('/products', Controller.productsAll);

router.get('/products/add', Controller.formProduct);

router.post('/products/add', Controller.sendDataProduct);

router.get('/products/:id', Controller.productDetail);

router.get('/products/:id/edit', Controller.showEditProduct);

router.get('/products/:id/buy', Controller.checkProduct);

router.post('/products/:id/buy', Controller.doCheckoutProduct);

router.post('/products/:id/edit', Controller.doEditProduct);

router.get('/products/:id/delete', Controller.deleteProduct);

router.get('/users', Controller.usersAll);

router.get('/users/add', Controller.formUserAdmin);

router.post('/users/add', Controller.formUserAdmin);

router.get('/users/:id', Controller.userDetail);

router.get('/users/:id/edit', Controller.formProduct);

router.post('/users/:id/edit', Controller.formProduct);

router.get('/users/:id/delete', Controller.formProduct);

router.get('/transactions/:id/', Controller.formProduct);

router.get('/transactions', Controller.doneTransaction);

module.exports = router