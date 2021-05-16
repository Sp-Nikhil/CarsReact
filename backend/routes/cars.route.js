let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Cars Model
let carsSchema = require('../models/Cars');

// CREATE Cars
router.route('/create-cars').post((req, res, next) => {
  carsSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Cars
router.route('/').get((req, res) => {
  carsSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Car
router.route('/edit-student/:id').get((req, res) => {
  carsSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// UpdateCars
router.route('/update-student/:id').put((req, res, next) => {
  carsSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Student updated successfully !')
    }
  })
})

// Delete Cars
router.route('/delete-student/:id').delete((req, res, next) => {
  carsSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;
