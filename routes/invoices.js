const express = require('express');

const router = express.Router();

let Invoice = require('../models/Invoice');

// Get all invoices
router.route("/").get((req, res, next) => {
  Invoice.find(
    {},
    null,
    {},
    (err, invoice) => {
      if (err) {
        return next(err);
      }
      res.status(200).send(invoice);
    }
  );
});

router.route("/:id").get((req, res, next) => {
  Invoice.findById(req.params.id, 
    (err, invoice) => {
    if (err) {
      return next(err);
    }
    res.json(invoice);
  });
});

router.post('/add', (req, res) => {
  let invoice = new Invoice(req.body);
  invoice.save()
    .then(project => {
        res.status(200).json({'invoice': 'invoice added successfully'});
    })
    .catch(err => {
        res.status(400).send('adding new invoice failed');
    });
});

router.post('/edit/:id', (req, res) => {
  console.log(req.body);
  Invoice.findByIdAndUpdate(req.params.id,
    { 
      title: req.body.title,
      genre: req.body.genre,
      description: req.body.description,
      price: req.body.price,
    },
    function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(result);
      }
    });
});

module.exports = router;