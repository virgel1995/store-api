const mongoose = require('mongoose');


const databaseConnction = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.MONGO_URI,{
	})
    .then(() => {
      console.log('Mongodb Connection');
    })
    .catch(err => {
      console.log(err);
    });
};
module.exports = databaseConnction;