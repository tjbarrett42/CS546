const bluebird = require("bluebird");
const Promise = bluebird.Promise;
// We use bluebird to make a copy of fs that has all its normal methods, and
// {methodName}Async method versions that return promises as well; ie, you will have a copy
// of fs with fs.stat(path, callback) and fs.statAsync(path), which returns a promise
// thus allowing us to await it.
const fs = bluebird.promisifyAll(require("fs"));

async function getFileAsString(path){
    //console.log("getFileAsSring(Path: " + path);
    let data;
    if(!path){
        throw("Error: Argument does not exist, null, or undefined");
    }
    if(typeof path != "string"){
        throw("Error: Type");
    }
    try {
        data = await fs.readFileAsync(path, "utf-8");
        return data;
    } catch (err) {
        throw("Error:");
    }
    
}

async function getFileAsJSON(path){
    //console.log("getFileAsJSON(Path: " + path);
    let data, jsondata;
    if(!path){
        throw("getFileasJSON Error: Argument does not exist, null, or undefined");
    }
    if(typeof path != "string"){
        throw("Error: Type");
    }
   
    try {
        data = await fs.readFileAsync(path, "utf-8");
        jsondata = JSON.parse(data);
        return jsondata;
    } catch (err) {
        throw("Error:");
    }
}

async function saveStringToFile(path, text){
    //console.log("saveStringToFile(Path: " + path + ", Text: " + text);
    let data;

    if(!path){
        throw("Savestring path Error:  Argument does not exist, null, or undefined");
    }
    if(typeof path != "string"){
        throw("Error: Type");
    }
    if(!text){
        throw("Savestring text Error: Argument does not exist, null, or undefined");
    }
    if(typeof text != "string"){
        throw("Error: Type");
    }
    
    try {
        await fs.writeFileAsync(path, text);
        return true;
    } catch (err) {
        throw("Error:");
    }
}

async function saveJSONToFile(path, obj){
    //console.log("filedata.js saveJSONToFile(Path: " + path + ", Obj: " + obj);
    
    if(!path){
        throw("SaveJSON path Error: Argument does not exist, null, or undefined");
    }
    if(typeof path != "string"){
        throw("Error: Type");
    }
    if(!obj){
        throw("SaveJSON Obj Error: Argument does not exist, null, or undefined");
    }
    
    //console.log("I am about to try fs.writefileasync");
    try {
        //data = JSON.stringify(obj);
        //console.log("saveJSONToFile obj, right before it writefileasync: " + obj);
        await fs.writeFileAsync(path, obj);
    } catch (err) {
        throw("Error:");
    }
}

module.exports = {
    getFileAsString,
    getFileAsJSON,
    saveStringToFile,
    saveJSONToFile,

}