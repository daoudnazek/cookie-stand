'use strict';
var citiesArr = [];

var workingHours = ['6:00am', '7:00am', '8:00am ', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Daily Location Total'];

function City(name, minimumCustomers, maxCustomers, avgCookiesPerCust) {
    this.name = name;
    this.hoursOfOperation = workingHours;
    this.minimumCustomers = minimumCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesPerCust = avgCookiesPerCust;
    this.cookiesPerHour = [];
    citiesArr.push(this);

};


City.prototype.avgCookiesPerHour = function () {
    this.cookiesPerHour = generateRandCookiesNum(this.minimumCustomers, this.maxCustomers, this.avgCookiesPerCust);
};

var parentElement = document.getElementById('city profile');
var div = document.createElement('div');
parentElement.appendChild(div);
var table = document.createElement('table');
div.appendChild(table);


function tableHeading() {
    var th = document.createElement('th');
    table.appendChild(th);

    for (var i = 0; i < workingHours.length; i++) {
        var th = document.createElement('th');
        th.textContent = workingHours[i];
        table.appendChild(th);
    }
}
tableHeading();


City.prototype.render = function () {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var td = document.createElement('td');
    td.textContent = this.name;
    tr.appendChild(td);
    for (var i = 0; i < workingHours.length + 1; i++) {
        var td = document.createElement('td');
        td.textContent = this.cookiesPerHour[i];
        tr.appendChild(td);
    }

};

var seattle = new City('Seattle', 23, 65, 6.2);
var Tokyo = new City('Tokyo', 3, 24, 1.2);
var Dubai = new City('Dubai', 11, 38, 3.7);
var Paris = new City('Paris', 20, 38, 2.3);
var Lima = new City('Lima', 2, 16, 4.6);


for (var i = 0; i < citiesArr.length; i++) {
    citiesArr[i].avgCookiesPerHour();
    citiesArr[i].render();
};


function tablefooter() {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var td = document.createElement('td');
    td.textContent = 'Total';
    tr.appendChild(td);
    for (var i = 0; i < workingHours.length; i++) {
        var td = document.createElement('td');
        var hourTotal = 0 ;
        for (var j=0; j < citiesArr.length; j++){
            var hourTotal = hourTotal + citiesArr[j].cookiesPerHour[i];
        }
        td.textContent = hourTotal;
        tr.appendChild(td);
    }
}
tablefooter();


function generateRandCookiesNum(minCust, maxCust, avgCookie) {
    var randomCookiesNumArray = [];
    var totalSum = 0
    for (var i = 0; i < workingHours.length - 1; i++) {
        var randomvalue = Math.random();
        var randCustNum = Math.floor(randomvalue * (maxCust - minCust + 1) + minCust);
        var randomCookiesNum = Math.floor(randCustNum * avgCookie);
        totalSum = totalSum + randomCookiesNum;
        randomCookiesNumArray.push(randomCookiesNum);
    }
    randomCookiesNumArray.push(totalSum);
    return randomCookiesNumArray;

};






