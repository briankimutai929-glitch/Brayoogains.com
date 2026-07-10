const Service = require("../models/Service");

exports.getAll = (req, res) => {
    Service.getAll((err, results) => {
        if (err)
            return res.status(500).json({
                success: false,
                message: err.message
            });

        res.json({
            success: true,
            services: results
        });
    });
};

exports.create = (req, res) => {
    Service.create(req.body, (err) => {
        if (err)
            return res.status(500).json({
                success: false,
                message: err.message
            });

        res.json({
            success: true,
            message: "Service created successfully."
        });
    });
};