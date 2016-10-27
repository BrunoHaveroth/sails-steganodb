/*---------------------------------------------------------------
  :: sails-steganodb
  -> adapter
---------------------------------------------------------------*/
var SteganoDB = require('steganodb');
var steganoDB;


module.exports = (function() {
  var connections = {};

  var adapter = {
    registerConnection: function(connection, collections, cb) {
      steganoDB = new SteganoDB(
        connection.key,
        connection.database,
        connection.path
      );

      cb();
    },

    /**
     * Drop
     *
     * Drop a Collection
     *
     * @param {String} connectionName
     * @param {String} collectionName
     * @param {Array} relations
     * @param {Function} callback
     */

    drop: function(connectionName, collectionName, relations, cb) {
      //
      // if(typeof relations === 'function') {
      //   cb = relations;
      //   relations = [];
      // }
      //
      // var connectionObject = connections[connectionName];
      // var collection = connectionObject.collections[collectionName];
      //
      // // Drop the collection and indexes
      // connectionObject.connection.dropCollection(collectionName, function(err) {
      //
      //   // Don't error if droping a collection which doesn't exist
      //   if(err && err.errmsg === 'ns not found') return cb();
      //   if(err) return cb(err);
      //   cb();
      // });
    },

    /**
     * Create
     *
     * Insert a single document into a collection.
     *
     * @param {String} connectionName
     * @param {String} collectionName
     * @param {Object} data
     * @param {Function} callback
     */

    create: function(connectionName, collectionName, data, cb) {
      steganoDB
        .create(collectionName, data)
        .then(function(response) {
          return cb(null, response);
        }).catch(cb);
    },

    /**
     * Find
     *
     * Find all matching documents in a collection.
     *
     * @param {String} connectionName
     * @param {String} collectionName
     * @param {Object} options
     * @param {Function} callback
     */

    find: function(connectionName, collectionName, options, cb) {
      options = options || {};
      steganoDB
        .find(collectionName, options)
        .then(function(response) {
          return cb(null, response);
        }).catch(cb);
    },

    /**
     * Update
     *
     * Update all documents matching a criteria object in a collection.
     *
     * @param {String} connectionName
     * @param {String} collectionName
     * @param {Object} options
     * @param {Object} values
     * @param {Function} callback
     */

    update: function(connectionName, collectionName, options, values, cb) {
      options = options || {};
      steganoDB
        .update(collectionName, options, values)
        .then(function(response) {
          return cb(null, response);
        }).catch(cb);
    },

    /**
     * Destroy
     *
     * Destroy all documents matching a criteria object in a collection.
     *
     * @param {String} connectionName
     * @param {String} collectionName
     * @param {Object} options
     * @param {Function} callback
     */

    destroy: function(connectionName, collectionName, options, cb) {
      options = options || {};
      steganoDB
        .destroy(collectionName, options)
        .then(function(response) {
          return cb(null, response);
        }).catch(cb);
    },

    /**
     * Count
     *
     * Return a count of the number of records matching a criteria.
     *
     * @param {String} connectionName
     * @param {String} collectionName
     * @param {Object} options
     * @param {Function} callback
     */

    count: function(connectionName, collectionName, options, cb) {
      // options = options || {};
      // var connectionObject = connections[connectionName];
      // var collection = connectionObject.collections[collectionName];
      //
      // // Find matching documents and return the count
      // collection.count(options, function(err, results) {
      //   if(err) return cb(err);
      //   cb(null, results);
      // });
    },

    identity: 'sails-steganodb'
  };

  return adapter;
})();
