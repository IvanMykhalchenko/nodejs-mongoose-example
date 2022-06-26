import Contact from '../../models/contact';
import contactsFilter from './contacts-filter';

const listContact = async (query) => {
  return await contactsFilter(query);
} 

const getContactById = async (contactId) => {
  return await Contact.findById(contactId);
}

const addContact = async (body) => {
  return await Contact.create(body);
}

const deleteContact = async (contactId) => {
  return await Contact.findByIdAndRemove(contactId);
}

const updateContact = async (id, body) => {
  return await Contact.findByIdAndUpdate(id, body, {new: true});
}

export default { 
  listContact,
  getContactById,
  addContact,
  deleteContact,
  updateContact 
}