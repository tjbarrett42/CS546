const volumeOfRectangularPrism = function volumeOfRectangularPrism(length, width, height){
    // Calculate volume of rectangular prism
    if(!length || !width || !height){
        throw "Error: Argument does not exist, null, or undefined";
    }
    if(isNaN(length) || isNaN(width) || isNaN(height)){
        throw "Error: Type";
    }
    if((length <= 0) || (width <= 0) || (height <= 0)){
        throw "Error: Out of bounds";
    }
    return (length * width * height);
}

const surfaceAreaOfRectangularPrism = function surfaceAreaOfRectangularPrism(length, width, height){
    // Calculate surface area of rectangular prism
    if(!length || !width || !height){
        throw "Error: Argument does not exist, null, or undefined";
    }
    if(isNaN(length) || isNaN(width) || isNaN(height)){
        throw "Error: Type";
    }
    if((length <= 0) || (width <= 0) || (height <= 0)){
        throw "Error: Out of bounds";
    }
    return 2 * ((width * length) + (height * length) + (height * width));
}

const volumeOfSphere = function volumeOfSphere(radius){
    // Calculate the volume of sphere - must use Math.PI as pi value
    if(!radius){
        throw "Error: Argument does not exist, null, or undefined";
    }
    if(isNaN(radius)){
        throw "Error: Type";
    }
    if ((radius <= 0)){
        throw "Error: Out of bounds";
    }
    return ((4/3) * Math.PI * Math.pow(radius, 3));
}

const surfaceAreaOfSphere = function surfaceAreaOfSphere(radius){
    // Calculate surface area of sphere - Math.PI
    if(!radius){
        throw "Error: Argument does not exist, null, or undefined";
    }
    if(isNaN(radius)){
        throw "Error: Type";
    }
    if ((radius <= 0)){
        throw "Error: Out of bounds";
    }
    return (4 * Math.PI * Math.pow(radius, 2));
}

module.exports = {
    volumeOfRectangularPrism,
    surfaceAreaOfRectangularPrism,
    volumeOfSphere,
    surfaceAreaOfSphere
};