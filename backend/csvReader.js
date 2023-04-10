const generateSchema = require('generate-schema')
const convertCsvToJson = require('convert-csv-to-json')
const mongoose = require('mongoose')
// const express = require('express')
const colors = require('colors');
const dotenv = require('dotenv').config()
// const {errorHandler} = require('./middleware/errorMiddleware');
const { connectDB } = require('./config/db')

connectDB()

let dataPV_14_9 = convertCsvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv('LoadForecastData_14 - Bus 9.csv')
let dataPQ_14_12 = convertCsvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv('LoadForecastData_14 - Bus 12.csv')

let dataPV_30_21 = convertCsvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv('LoadForecastData_30 - Bus 21.csv')
let dataPQ_30_30 = convertCsvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv('LoadForecastData_30 - Bus 30.csv')


let dataPV_57_21 = convertCsvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv('LoadForecastData_57 - Bus 21.csv')
let dataPV_57_57 = convertCsvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv('LoadForecastData_57 - Bus 57.csv')
let dataPQ_57_53 = convertCsvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv('LoadForecastData_57 - Bus 53.csv')

let dataPV_118_97 = convertCsvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv('LoadForecastData_118 - Bus 97.csv')
let dataPV_118_117 = convertCsvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv('LoadForecastData_118 - Bus 117.csv')
let dataPQ_118_106 = convertCsvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv('LoadForecastData_118 - Bus 106.csv')

let MongooseSchemaPV = generateSchema.mongoose(dataPV_57_21[0]);
console.log(MongooseSchemaPV)
let MongooseSchemaPQ = generateSchema.mongoose(dataPQ_57_53[0]);
console.log(MongooseSchemaPQ)

let NewData14_9 = mongoose.model('data_14_9', MongooseSchemaPV)
let NewData14_12 = mongoose.model('data_14_12', MongooseSchemaPQ)

let NewData30_21 = mongoose.model('data_30_21', MongooseSchemaPV)
let NewData30_30 = mongoose.model('data_30_30', MongooseSchemaPQ)

let NewData57_21 = mongoose.model('data_57_21', MongooseSchemaPV)
let NewData57_57 = mongoose.model('data_57_57', MongooseSchemaPV)
let NewData57_53 = mongoose.model('data_57_53', MongooseSchemaPQ)

let NewData118_97 = mongoose.model('data_118_97', MongooseSchemaPV)
let NewData118_117 = mongoose.model('data_118_117', MongooseSchemaPV)
let NewData118_106 = mongoose.model('data_118_106', MongooseSchemaPQ)

// NewData.deleteMany({})
//     .then(() => console.log(`All data dropped`.blue))
//     .catch(err => console.log(`Error: ${err}`));
async function addData14_9(parameter) {
    let newData = new NewData14_9(parameter)

    newData.save()
        .then(() => console.log(`Data added! ${parameter.Slno}`.magenta.bold))
        .catch(err => console.log(`Error: ${err}`));
}
async function addData14_12(parameter) {
    let newData = new NewData14_12(parameter)

    newData.save()
        .then(() => console.log(`Data added! ${parameter.Slno}`.magenta.bold))
        .catch(err => console.log(`Error: ${err}`));
}

async function addData30_21(parameter) {
    let newData = new NewData30_21(parameter)

    newData.save()
        .then(() => console.log(`Data added! ${parameter.Slno}`.yellow.bold))
        .catch(err => console.log(`Error: ${err}`));
}
async function addData30_30(parameter) {
    let newData = new NewData30_30(parameter)

    newData.save()
        .then(() => console.log(`Data added! ${parameter.Slno}`.yellow.bold))
        .catch(err => console.log(`Error: ${err}`));
}

async function addData57_21(parameter) {
    let newData = new NewData57_21(parameter)

    newData.save()
        .then(() => console.log(`Data added! ${parameter.Slno}`.white.bold))
        .catch(err => console.log(`Error: ${err}`));
}
async function addData57_57(parameter) {
    let newData = new NewData57_57(parameter)

    newData.save()
        .then(() => console.log(`Data added! ${parameter.Slno}`.white.bold))
        .catch(err => console.log(`Error: ${err}`));
}
async function addData57_53(parameter) {
    let newData = new NewData57_53(parameter)

    newData.save()
        .then(() => console.log(`Data added! ${parameter.Slno}`.white.bold))
        .catch(err => console.log(`Error: ${err}`));
}

async function addData118_97(parameter) {
    let newData = new NewData118_97(parameter)

    newData.save()
        .then(() => console.log(`Data added! ${parameter.Slno}`.green.bold))
        .catch(err => console.log(`Error: ${err}`));
}
async function addData118_117(parameter) {
    let newData = new NewData118_117(parameter)

    newData.save()
        .then(() => console.log(`Data added! ${parameter.Slno}`.green.bold))
        .catch(err => console.log(`Error: ${err}`));
}
async function addData118_106(parameter) {
    let newData = new NewData118_106(parameter)

    newData.save()
        .then(() => console.log(`Data added! ${parameter.Slno}`.green.bold))
        .catch(err => console.log(`Error: ${err}`));
}

function addLoop14_9(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        let jsonData = data[i];
        addData14_9(jsonData);
    }
}
function addLoop14_12(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        let jsonData = data[i];
        addData14_12(jsonData);
    }
}

function addLoop30_21(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        let jsonData = data[i];
        addData30_21(jsonData);
    }
}
function addLoop30_30(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        let jsonData = data[i];
        addData30_30(jsonData);
    }
}

function addLoop57_21(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        let jsonData = data[i];
        addData57_21(jsonData);
    }
}
function addLoop57_57(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        let jsonData = data[i];
        addData57_57(jsonData);
    }
}
function addLoop57_53(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        let jsonData = data[i];
        addData57_53(jsonData);
    }
}

function addLoop118_97(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        let jsonData = data[i];
        addData118_97(jsonData);
    }
}
function addLoop118_117(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        let jsonData = data[i];
        addData118_117(jsonData);
    }
}
function addLoop118_106(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        let jsonData = data[i];
        addData118_106(jsonData);
    }
}


NewData14_9.deleteMany({})
    .then(() => {
        addLoop14_9(dataPV_14_9);
        // console.log(`All data dropped!`.blue);
    })
    .catch(err => console.log(`Error: ${err}`));

NewData14_12.deleteMany({})
    .then(() => {
        addLoop14_12(dataPQ_14_12);
        // console.log(`All data dropped!`.blue);
    })
    .catch(err => console.log(`Error: ${err}`));



NewData30_21.deleteMany({})
    .then(() => {
        addLoop30_21(dataPV_30_21);
        // console.log(`All data dropped!`.blue);
    })
    .catch(err => console.log(`Error: ${err}`));

NewData30_30.deleteMany({})
    .then(() => {
        addLoop30_30(dataPQ_30_30);
        // console.log(`All data dropped!`.blue);
    })
    .catch(err => console.log(`Error: ${err}`));




NewData57_21.deleteMany({})
    .then(() => {
        addLoop57_21(dataPV_57_21);
        // console.log(`All data dropped!`.blue);
    })
    .catch(err => console.log(`Error: ${err}`));

NewData57_57.deleteMany({})
    .then(() => {
        addLoop57_57(dataPV_57_57);
        // console.log(`All data dropped!`.blue);
    })
    .catch(err => console.log(`Error: ${err}`));

NewData57_53.deleteMany({})
    .then(() => {
        addLoop57_53(dataPQ_57_53);
        // console.log(`All data dropped!`.blue);
    })
    .catch(err => console.log(`Error: ${err}`));





NewData118_97.deleteMany({})
    .then(() => {
        addLoop118_97(dataPV_118_97);
        // console.log(`All data dropped!`.blue);
    })
    .catch(err => console.log(`Error: ${err}`));

NewData118_117.deleteMany({})
    .then(() => {
        addLoop118_117(dataPV_118_117);
        // console.log(`All data dropped!`.blue);
    })
    .catch(err => console.log(`Error: ${err}`));

NewData118_106.deleteMany({})
    .then(() => {
        addLoop118_106(dataPQ_118_106);
        // console.log(`All data dropped!`.blue);
    })
    .catch(err => console.log(`Error: ${err}`));




module.exports = {
    NewData14_9,
    NewData14_12,
    NewData30_21,
    NewData30_30,
    NewData57_21,
    NewData57_57,
    NewData57_53,
    NewData118_97,
    NewData118_117,
    NewData118_106,
}