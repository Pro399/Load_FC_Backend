const generateSchema = require('generate-schema')
const convertCsvToJson = require('convert-csv-to-json')
const mongoose = require('mongoose')
// const express = require('express')
const colors = require('colors');
const dotenv = require('dotenv').config()
// const {errorHandler} = require('./middleware/errorMiddleware');
const { connectDB } = require('./config/db')

connectDB()

let dataPV21 = convertCsvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv('LoadForecastData_57_118 - Bus 21.csv')
let dataPV57 = convertCsvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv('LoadForecastData_57_118 - Bus 57.csv')
let dataPV97 = convertCsvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv('LoadForecastData_57_118 - Bus 97.csv')
let dataPV117 = convertCsvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv('LoadForecastData_57_118 - Bus 117.csv')
let dataPQ53 = convertCsvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv('LoadForecastData_57_118 - Bus 53.csv')
let dataPQ106 = convertCsvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv('LoadForecastData_57_118 - Bus 106.csv')

let MongooseSchemaPV = generateSchema.mongoose(dataPV21[0]);
console.log(MongooseSchemaPV)
let MongooseSchemaPQ = generateSchema.mongoose(dataPQ53[0]);
console.log(MongooseSchemaPQ)


let NewData21 = mongoose.model('data21', MongooseSchemaPV)
let NewData57 = mongoose.model('data57', MongooseSchemaPV)
let NewData97 = mongoose.model('data97', MongooseSchemaPV)
let NewData117 = mongoose.model('data117', MongooseSchemaPV)
let NewData53 = mongoose.model('data53', MongooseSchemaPQ)
let NewData106 = mongoose.model('data106', MongooseSchemaPQ)

// NewData.deleteMany({})
//     .then(() => console.log(`All data dropped`.blue))
//     .catch(err => console.log(`Error: ${err}`));

async function addData21(parameter) {
    let newData = new NewData21(parameter)

    newData.save()
        .then(() => console.log(`Data added! ${parameter.Slno}`.white.bold))
        .catch(err => console.log(`Error: ${err}`));
}
async function addData57(parameter) {
    let newData = new NewData57(parameter)

    newData.save()
        .then(() => console.log(`Data added! ${parameter.Slno}`.red.bold))
        .catch(err => console.log(`Error: ${err}`));
}
async function addData97(parameter) {
    let newData = new NewData97(parameter)

    newData.save()
        .then(() => console.log(`Data added! ${parameter.Slno}`.yellow.bold))
        .catch(err => console.log(`Error: ${err}`));
}
async function addData117(parameter) {
    let newData = new NewData117(parameter)

    newData.save()
        .then(() => console.log(`Data added! ${parameter.Slno}`.green.bold))
        .catch(err => console.log(`Error: ${err}`));
}
async function addData53(parameter) {
    let newData = new NewData53(parameter)

    newData.save()
        .then(() => console.log(`Data added! ${parameter.Slno}`.blue.bold))
        .catch(err => console.log(`Error: ${err}`));
}
async function addData106(parameter) {
    let newData = new NewData106(parameter)

    newData.save()
        .then(() => console.log(`Data added! ${parameter.Slno}`.magenta.bold))
        .catch(err => console.log(`Error: ${err}`));
}


function addLoop21(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        let jsonData = data[i];
        addData21(jsonData);
    }
}
function addLoop57(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        let jsonData = data[i];
        addData57(jsonData);
    }
}
function addLoop97(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        let jsonData = data[i];
        addData97(jsonData);
    }
}
function addLoop117(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        let jsonData = data[i];
        addData117(jsonData);
    }
}
function addLoop53(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        let jsonData = data[i];
        addData53(jsonData);
    }
}
function addLoop106(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        let jsonData = data[i];
        addData106(jsonData);
    }
}



NewData21.deleteMany({})
    .then(() => {addLoop21(dataPV21);
        // console.log(`All data dropped!`.blue);
    })
    .catch(err => console.log(`Error: ${err}`));

NewData57.deleteMany({})
    .then(() => {addLoop57(dataPV57);
        // console.log(`All data dropped!`.blue);
    })
    .catch(err => console.log(`Error: ${err}`));

NewData97.deleteMany({})
    .then(() => {addLoop97(dataPV97);
        // console.log(`All data dropped!`.blue);
    })
    .catch(err => console.log(`Error: ${err}`));

NewData117.deleteMany({})
    .then(() => {addLoop117(dataPV117);
        // console.log(`All data dropped!`.blue);
    })
    .catch(err => console.log(`Error: ${err}`));

NewData53.deleteMany({})
    .then(() => {addLoop53(dataPQ53);
        // console.log(`All data dropped!`.blue);
    })
    .catch(err => console.log(`Error: ${err}`));

NewData106.deleteMany({})
    .then(() => {addLoop106(dataPQ106);
        // console.log(`All data dropped!`.blue);
    })
    .catch(err => console.log(`Error: ${err}`));




module.exports= {
    NewData21,
    NewData57,
    NewData97,
    NewData117,
    NewData53,
    NewData106,
 }