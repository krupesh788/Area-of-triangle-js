function calculateArea()
{
    let baseValue = parseInt(document.getElementById("baseValue").value);
    let heightValue = parseInt(document.getElementById("heightValue").value);


    let areaValue = ( baseValue * heightValue) / 2;

    document.getElementById("p1").innerHTML =(`The area of the triangle is:${areaValue}`);

}

