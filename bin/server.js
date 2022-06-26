import app from '../app.js';
import db from '../lib/db';

const PORT = process?.evv?.PORT || 3001;

db.then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT} port`);
  });  
}).catch(err => {
  console.log(`Server not running. Error: ${err.message}`)
})
