const Joi = require("joi");
const express = require("express");
const db = require("./database");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);

function validateHelicopter(helicopter) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        num_of_passangers: Joi.number().integer().required(),
        max_speed: Joi.number().integer().required(),
    });

    return schema.validate(helicopter);
}

// GET
app.get("/", (req, resp) => {
    resp.send("Hello, World!!!");
});

app.get("/api/helicopters", async(req, resp) => {
    let result = [];
    if (req.query.searchKey) {
        result = await db
            .promise()
            .query(
                `select * from helicopter where name like '%${req.query.searchKey}%';`
            );
    } else {
        result = await db.promise().query(`select * from helicopter`);
    }
    const helicopters = result[0];
    resp.status(200).send(helicopters);
});

app.get("/api/helicopters/:id", async(req, resp) => {
    // get helicopter by id
    const result = await db
        .promise()
        .query(`select * from helicopter where id='${req.params.id}'`);
    const helicopter = result[0][0];
    if (!helicopter) {
        return resp
            .status(404)
            .send("The helicopter with the given ID was not found.");
    }

    resp.send(helicopter);
});

// POST
app.post("/api/helicopters", (req, resp) => {
    // validate helicopter
    const { error } = validateHelicopter(req.body); // destructuring --> result.error
    if (error) {
        resp.status(400).send(error.details[0].message);
        return;
    }

    // store helicopter in db
    try {
        db.query(
            `insert into helicopter(name, num_of_passangers, max_speed) value ('${req.body.name}', '${req.body.num_of_passangers}', '${req.body.max_speed}')`
        );
        resp.status(200).send({ msg: "helicopter created" });
    } catch (err) {
        console.log(err);
    }
});

// PUT
app.put("/api/helicopters/:id", async(req, resp) => {
    // get helicopter by id
    const result = await db
        .promise()
        .query(`select * from helicopter where id='${req.params.id}'`);
    const helicopter = result[0][0];
    if (!helicopter) {
        return resp
            .status(404)
            .send("The helicopter with the given ID was not found.");
    }

    // validate helicopter
    const { error } = validateHelicopter(req.body); // destructuring --> result.error
    if (error) {
        resp.status(400).send(error.details[0].message);
        return;
    }

    // update helicopter
    try {
        db.query(
            `update helicopter set name='${req.body.name}', num_of_passangers='${req.body.num_of_passangers}', max_speed='${req.body.max_speed}' where id='${req.params.id}'`
        );
    } catch (err) {
        console.log(err);
    }

    resp.send(helicopter);
});

// DELETE
app.delete("/api/helicopters/:id", async(req, resp) => {
    // get helicopter by id
    const result = await db
        .promise()
        .query(`select * from helicopter where id='${req.params.id}'`);
    const helicopter = result[0][0];

    // delete helicopter
    if (helicopter) {
        db.query(`delete from helicopter where id='${req.params.id}'`);
    } else {
        return resp.status(404).send("The helicopter with the given ID was not found.");
    }

    resp.send(helicopter);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});