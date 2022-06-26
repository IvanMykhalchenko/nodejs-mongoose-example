
import mongoosePackage from 'mongoose';
const {connect, connection} = mongoosePackage; 

const uri = process.env.URI_DB;
const db = new connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB')
});

connection.on('err', err => {
  console.log(`Error connection: ${err.message}`);
  process.exit(1);
});

connection.on('disconnected', () => {
  console.log('Mongoose disconnected from MongoDB')
})

process.on('SIGINT', async () => {
  connection.close();
  console.log('Connection DB closed'); 
})

export default db;
