import express from 'express';
import repositoryContacts from '../../../repository/contacts/contacts.js';
import validator from './validation.js';
import contactsController from '../../../controllers/contacts/index';

const router = express.Router();

router.get('/', contactsController.getContacts)

router.get('/:id', contactsController.getContactById)

router.post('/', validator.addContactValidator, contactsController.addContact)

router.delete('/:id', validator.deleteContactValidator, contactsController.deleteContact)

router.put('/:id', validator.updateContactValidator, contactsController.updateContact)

router.patch('/:id/favorite', validator.updateFavoriteContactValidator, contactsController.updateFavoriteContact)

export default router;