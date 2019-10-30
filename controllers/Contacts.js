const Contact = require('../models/Contact');

class ContactsController {
  static create (req, res) {
    const newData = {
      name: req.body.name,
      phone: req.body.phone,
      company: req.body.company,
      active: Boolean(req.body.active) || true
    }

    Contact.create(newData)
      .then((response) => {
        res.status(200).json({
          message: 'new Contact has been created',
          response
        });
      })
      .catch((error) => {
        res.sendStatus(500);
      })
  }

  static getAll (req, res) {
    Contact.find()
      .then((response) => {
        res.status(200).json({
          message: 'Data has been fetched successfully',
          data: response
        });
      })
      .catch((error) => {
        res.sendStatus(500);
      })
  }

  static getById (req, res) {
    const contactId = req.params.id;

    Contact.findById(contactId)
      .then((response) => {
        res.status(200).json({
          message: 'Data has been fetched successfully',
          data: response
        });
      })
      .catch((error) => {
        res.sendStatus(500);
      })
  }

  static update (req, res) {
    const contactId = req.params.id;

    const newData = {
      name: req.body.name,
      phone: req.body.phone,
      company: req.body.company,
      active: Boolean(req.body.active) || true
    }

    Contact.findByIdAndUpdate(contactId, newData)
      .then((response) => {
        res.status(200).json({
          message: `${contactId} has succesfully updated`,
          data: response
        });
      })
      .catch((error) => {
        res.sendStatus(500);
      })
  }

  static delete (req, res) {
    const contactId = req.params.id;

    Contact.findByIdAndDelete(contactId)
      .then((response) => {
        res.status(200).json({
          message: `${contactId} has succesfully Deleted`,
          data: response
        });
      })
      .catch((error) => {
        res.sendStatus(500);
      })
  }
}

module.exports = ContactsController;