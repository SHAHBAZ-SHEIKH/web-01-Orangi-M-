// var mosam = "Sunny"
// var hasAssignment = false
// var isHoliday = false
//   // Rain == Rain
// if(mosam == "Rain" && hasAssignment == true){
//     console.log("Barish mai bhi university jana hai assignmnet submit krwayane")

// }
// else if(mosam == "Sunny" && hasAssignment == false){
//     console.log("Plan your enjou trip")
// }

// document.write("<p>Hello World</p>")

// console.log(document)
function abc(){
    //code of block
    //code  of execution
    // console.log("test")
    var weight = document.getElementById("weight").value
    var height = document.getElementById("height").value
    var para = document.getElementById("para")

    console.log("weight=====>",weight)

    console.log("height======>",height)

    var bmi = (weight / (height * height))
    var result = bmi.toFixed(1)

    console.log("result=====>",result)

    // console.log("bmi======>",bmi.toFixed(1))
    if(result<18.4){
        console.log("UnderWeight")
        para.innerHTML = "UnderWeight " + result
        para.style.color = "green"
        para.style.display = "block"
    }

    else if(result>=18.5 && result<24.9){
        console.log("NOrmal")
        para.innerHTML = "NOrmal " + result
         para.style.color = "green"
         para.style.display = "block"
    }
    else if(result>25.0 && result<39.9){
        console.log("Over weight")
         para.innerHTML = "Over weight " + result
          para.style.color = "green"
          para.style.display = "block"
    }
    else{
        console.log("Gym Join Kro or Km Khao")
         para.innerHTML = "Gym Join Kro or Km Khao " + result
          para.style.color = "green"
          para.style.display = "block"
    }
}


