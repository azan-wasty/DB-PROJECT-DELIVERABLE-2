const {sql, config} = require("./db");
const express = require("express");
const router = express.Router();

router.get("/missions", async (req, res) => {
    const pool = await sql.connect(config);
    const result = await pool.request()
        .query("SELECT * FROM Missions");
    res.json(result.recordset);
});

router.get("/beyonders", async (req, res) => {
    const pool = await sql.connect(config);
    const result = await pool.request()
        .query("SELECT * FROM Beyonders");
    res.json(result.recordset);
});

router.get("/hunters", async (req, res) => {
    const pool = await sql.connect(config);
    const result = await pool.request()
        .query("SELECT * FROM Hunters");
    res.json(result.recordset);
});

router.get("/artifacts", async (req, res) => {
    const pool = await sql.connect(config);
    const result = await pool.request()
        .query("SELECT * FROM Artifacts");
    res.json(result.recordset);
});

module.exports = router;