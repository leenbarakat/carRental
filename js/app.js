'use strict';
/*eslint-disable*/

let formID = document.getElementById('formID')
let tableContainer = document.getElementById('tableContainer')

let Array = []

let table = document.createElement('table')
tableContainer.appendChild(table)
table.id = 'table'

let theadEl = document.createElement('thead')
table.appendChild(theadEl)

let trEl = document.createElement('tr')
theadEl.appendChild(trEl)

let thEl = document.createElement('th')
trEl.appendChild(thEl)
thEl.textContent = 'Order Image'

let thEl1 = document.createElement('th')
trEl.appendChild(thEl1)
thEl1.textContent = 'Order Details'

let thEl2 = document.createElement('th')
trEl.appendChild(thEl2)

let tbodyEl = document.createElement('tbody')
table.appendChild(tbodyEl)



function Cars(customerName, carModel, price) {
    this.customerName = customerName
    this.carModel = carModel
    this.price = price
    Array.push(this)
}

Cars.prototype.render = function () {
    let trEl = document.createElement('tr')
    tbodyEl.appendChild(trEl)

    let tdEl = document.createElement('td')
    trEl.appendChild(tdEl)
    let img = document.createElement('img')
    img.src = `img/${this.carModel}.jpg`
    tdEl.appendChild(img)

    let tdEl1 = document.createElement('td')
    trEl.appendChild(tdEl1)
    tdEl1.textContent = `Customer Name : ${this.customerName} \n Car Model : ${this.carModel} \n Car Price : ${this.price}`

    let tdEl12 = document.createElement('td')
    trEl.appendChild(tdEl12)
    let img1 = document.createElement('img')
    img1.src = `img/images.png`
    tdEl12.appendChild(img1)

}
loadFromLocalStorage()


formID.addEventListener('submit', submitHandler)
function submitHandler(event) {
    event.preventDefault()
    let customerName = event.target.customerName.value
    let carModel = event.target.carModel.value
    let price = randomPrice()

    let newOrder = new Cars(customerName, carModel, price)
    newOrder.render()

    saveToLocalStorage()

}


function saveToLocalStorage() {
    let data = JSON.stringify(Array)
    localStorage.setItem('data', data)
}

function loadFromLocalStorage() {
    let stringData = localStorage.getItem('data')
    if (stringData) {
        let data = JSON.parse(stringData)
        for (let i = 0; i < data.length; i++) {
            let newOrder = new Cars(data[i].customerName, data[i].carModel, data[i].price)
            newOrder.render()

        }

    }
}