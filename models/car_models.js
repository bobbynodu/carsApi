const db = require('../database');

const car = {
    getAllcars: function(callback) {
        return db.query('select * from car order by idcar desc', callback);
    },
    getById: function(id, callback) {
        return db.query('select * from car where idcar=?', [id], callback);
    },
    add: function(car, callback) {
        return db.query(
            'insert into car (brand,model,yearmodel) values(?,?,?)', [car.name, car.author, car.isbn],
            callback
        );
    },
    delete: function(id, callback) {
        return db.query('delete from car where idcar=?', [id], callback);
    },
    update: function(id, car, callback) {
        return db.query(
            'update car set brand=?,model=?, yearmodel=? where id_car=?', [car.name, car.author, car.isbn, id],
            callback
        );
    }
};
module.exports = car;