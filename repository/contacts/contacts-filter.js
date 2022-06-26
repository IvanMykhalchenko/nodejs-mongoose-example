import Contact from '../../models/contact';

const contactsFilter = ({sortBy, sortByDesc, filter, skip, limit}) => {
    let sortCriteria = null;
    let result = Contact.find();
  
    if(sortBy) {
      sortCriteria = {[sortBy]: 1}
    }
  
    if(sortByDesc) {
      sortCriteria = {[sortBy]: -1}
    }
  
    if(filter) {
      result = result.select(filter.split('|').join(' '));
    }
  
    if(skip) {
      result = result.skip(skip);
    }
  
    if(limit) {
      result = result.limit(limit);
    }
    return result.sort(sortCriteria);
}

export default contactsFilter;