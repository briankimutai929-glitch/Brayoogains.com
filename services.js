const db = require("../config/database");

class Service {
    static getAll(callback) {
        const sql = "SELECT * FROM services ORDER BY id DESC";
        db.query(sql, callback);
    }

    static create(service, callback) {
        const sql = `
            INSERT INTO services
            (name, category, price, min_quantity, max_quantity)
            VALUES (?, ?, ?, ?, ?)
        `;

        db.query(
            sql,
            [
                service.name,
                service.category,
                service.price,
                service.min_quantity,
                service.max_quantity
            ],
            callback
        );
    }
}

module.exports = Service;