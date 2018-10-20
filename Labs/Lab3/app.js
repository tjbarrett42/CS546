const fileData = require("./fileData");
const textMetrics = require("./textMetrics");
const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));


async function main(path){
    let text, metrics;
    let file = path.split("/").pop().split(".");
    let resultFile = file[0]+ ".result.json";
    if((path) && (typeof path == "string")){
        try {
            
            text = await fileData.getFileAsJSON("./" + resultFile);
            //console.log("GetfileasJson");
        } catch (err) {
            try {
                
                text = await fileData.getFileAsString(path);
                //console.log("getfileasstring");
                try {
                    fileData.saveStringToFile(path, text);
                    //console.log("saveStringToFile");
                    try {
                        metrics = await JSON.stringify(textMetrics.createMetrics(text));
                        //console.log("createmetrics");

                        try {
                            //console.log("I will saveJsontofile");
                            //console.log(metrics);
                            await fileData.saveJSONToFile("./" + resultFile, metrics);
                        
                        } catch (err) {
                            throw ("Error: saveJSONToFile");
                        }
                    } catch (err) {
                        throw ("Error: createMetrics");
                    }
                } catch (err) {
                    throw ("Error: saveStringToFile");
                }   
            } catch (err) {
                throw ("Error: GetFileAsString");
            }
        }
    }else{
        throw("Error: Path doesn't exist");
    }
}

main("./chapter1.txt").catch(err => console.log(err));
main("./chapter2.txt").catch(err => console.log(err));
main("./chapter3.txt").catch(err => console.log(err));