const mongodb = require('mongodb');
const getDb = require('../util/database').geteDb;

const ObjectId = mongodb.ObjectID;

class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
  }

  save() {
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  static findById(userId) {
    const dv = getDb();
    return db
    .collection('users')
    .findOne({_id: new ObjectId(userId)});
  }
}


module.exports = User;