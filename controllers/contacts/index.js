import repositoryContacts from '../../repository/contacts/contacts';
import { StatusCodes } from 'http-status-codes';

const getContacts = async (req, res, next) => { 
  console.log(req.query)
  res.status(StatusCodes.OK)
		.json({status: StatusCodes.OK, type: 'success', data: await repositoryContacts.listContact(req.query)})
}
  
const getContactById =  async (req, res, next) => {
  const contact = await repositoryContacts.getContactById(req.params.id);
  res.status(StatusCodes.OK)
		.json({status: StatusCodes.OK, type: 'success', data: [contact]})
}
  
const addContact = async (req, res, next) => {
	const newContact = await repositoryContacts.addContact(req.body);
	res.status(StatusCodes.CREATED)
		.json({status: StatusCodes.OK, type: 'success', data: newContact});
}
  
const deleteContact = async (req, res, next) => {
	const deletedContact = await repositoryContacts.deleteContact(req.params.id);
	res.status(StatusCodes.OK)
		.json({status: StatusCodes.OK, type: 'success', data: deletedContact});
}
  
const updateContact = async (req, res, next) => {
	const updatedContact = await repositoryContacts.updateContact(req.params.id, req.body);
	updatedContact ? 
	res.status(StatusCodes.OK).json({status: StatusCodes.OK, type: 'success', data: updatedContact}) :
	res.status(StatusCodes.NOT_FOUND).json({status: StatusCodes.NOT_FOUND, type: 'error', message: 'Not found'});
}
  
const updateFavoriteContact = async (req, res, next) => {
	const updatedContact = await repositoryContacts.updateContact(req.params.id, req.body);
	updatedContact ?
	res.status(StatusCodes.OK).json({status: StatusCodes.OK, type: 'success', data: updatedContact}) :
	res.status(StatusCodes.NOT_FOUND).json({message: 'Not found'});
}

export default {
	getContacts, getContactById, addContact, deleteContact, updateContact, updateFavoriteContact
}