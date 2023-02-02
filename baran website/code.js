let id, val1, val2

function entry(id) {
    val1 = document.getElementById("num1").value;
    val2 = document.getElementById("num2").value;
    if (id === 'sum') {
        let sum = parseInt(val1) + parseInt(val2)
        alert("The result is: " + sum)
    } else if (id === 'sub') {
        let sub = val1 - val2
        alert("The result is: " + sub)
    } else if (id === 'mul') {
        let mul = val1 * val2
        alert("The result is: " + mul)
    } else {
        let divide = val1 / val2
        alert("The result is: " + divide)
    }
}


const btn = document.getElementById('submit')
const myArray = []
btn.addEventListener("click", clickButton)

function clickButton() {
    let id = Math.floor(Math.random() * 100)
    let name = document.getElementById("name").value
    let lastName = document.getElementById("lname").value
    let age = document.getElementById("age").value
    let x = {id: id, name: name, lastName: lastName, age: age}

    myArray.push(x)
    setData();
}

function setData() {
    let emran = document.getElementById("emran")
    emran.innerHTML = "";
    myArray.forEach(handleForEach)
}


function handleForEach(item, index) {
    let table = document.getElementById("emran")
    let taRow = document.createElement('tr')

    taCell = document.createElement('td')
    taCell.innerHTML = index + 1
    taRow.appendChild(taCell)


    taCell = document.createElement('td')
    taCell.innerHTML = item.name
    taRow.appendChild(taCell)


    taCell = document.createElement('td')
    taCell.innerHTML = item.lastName
    taRow.appendChild(taCell)


    taCell = document.createElement('td')
    taCell.innerHTML = item.age
    taRow.appendChild(taCell)

let id = item.id;
    taCell = document.createElement('td')
    taCell.innerHTML = "<img src='img/delete.png' alt='bin' width='20px' height='20px' " + "style='padding-top:2px ; padding-bottom: 2px' onclick='removeItemOnce(\""+id+"\")'>"
    taRow.appendChild(taCell)


    table.appendChild(taRow)
}



function removeItemOnce(id) {
    let find = myArray.findIndex(function (item){
        console.log(item);
        return item.id == id;
    });
    myArray.splice(find, 1)
    setData()
}


async function start() {
    const response = await fetch("https://covid19.richdataservices.com/rds/api/catalog/int/jhu_country/variables")
    const data = await response.json()
    let idValue = data[1].id
    // console.log(idValue)
    getIso()
}

// start()


async function getIso() {
    const getResponse = await fetch("https://covid19.richdataservices.com/rds/api/catalog/int/jhu_country/variable/iso3166_1")
    const getData = await getResponse.json()
    let showDec = getData.description
    document.getElementById("print").innerHTML = showDec
    // console.log(showDec);
}

let popup = document.getElementById("popup")

function openPopup() {
    popup.classList.add("open-popup")
    start()
}

function closePopup() {
    popup.classList.remove("open-popup")
}