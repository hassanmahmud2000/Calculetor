function triangleArea () {
    // Get Base Value !!!!!!!!!!!
    const triangleBaseArea = document.getElementById ('triangle-base');
    const triangleBaseString = triangleBaseArea.value;
    const triangleBase = parseFloat (triangleBaseString);
    console.log (triangleBase);
    
    // Now Get Hight Value !!!!!!
    const triangleHightArea = document.getElementById ('triangle-hight');
    const triangleHightString = triangleHightArea.value;
    const triangleHight = parseFloat (triangleHightString);
    console.log (triangleHight);

    const area = 0.5 * triangleBase * triangleHight;
    console.log (area);

    // Calculet Area Of Triangle  !!!!!!!!
    const AreaField = document.getElementById ('areaField');
    AreaField.innerText = area;

}
//rectangle  Area  !!!!!!

function rectangleArea  () {
    // Get Width Value !!!!!!!
    const rectangleWidthField = document.getElementById ('rectangle-width');
    const rectangleWidthFieldString = rectangleWidthField.value;
    const rectangleWidth = parseFloat (rectangleWidthFieldString);

    // Get Length Value  !!!!!!
    const rectangleLengthField = document.getElementById ('rectangle-length');
    const rectangleLengthFieldString = rectangleLengthField.value;
    const rectangleLength = parseFloat (rectangleLengthFieldString);
    // Area Calculetor  !!!!!!

    const areaRectangler = rectangleWidth * rectangleLength;

    const areaCalculetField = document.getElementById ('rectangleAreaField');
    areaCalculetField.innerText = areaRectangler;
    
}

// parallelogram Area Calculet  !!!!!!
function parallelogramArea () {
    const parallelogramBase = areCalculet ('Parallelogram-Base')
    console.log (parallelogramBase)
    const parallelogramHight = areCalculet ('Parallelogram-Hight');
    console.log (parallelogramHight);

    // Area Calculet
    const Area = parallelogramBase * parallelogramHight;
    setElementInnerText ('parallelogramSet',Area);

}
function areCalculet (id) {
    const inputIdField = document.getElementById (id);
    const inputIdFieldString = inputIdField.value;
    const inputValue = parseFloat (inputIdFieldString);
    return inputValue;
}
// Set Value In String Type Value  !!!!!!!!!!!
function setElementInnerText (elementId,area) {
    const element = document.getElementById (elementId);
    element.innerText = area;
}