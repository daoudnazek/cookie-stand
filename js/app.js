'use strict';

var workingHours = ['6:00am', '7:00am', '8:00am ', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Daily Location Total'];

function city(name, minimumCustomers, maxCustomers, avgCookiesPerCust) {
    this.name = name;
    this.hoursOfOperation = workingHours;
    this.minimumCustomers = minimumCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesPerCust = avgCookiesPerCust;
    this.cookiesPerHour = [];

};


city.prototype.avgCookiesPerHour = function () {
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


city.prototype.seattleRender = function () {

    var tr = document.createElement('tr');
    table.appendChild(tr);

    var td = document.createElement('td');
    td.textContent = 'Seattle';
    tr.appendChild(td);

    for (var i = 0; i < workingHours.length + 1; i++) {
        var td = document.createElement('td');
        td.textContent = seattle.cookiesPerHour[i];
        tr.appendChild(td);
    }

};

city.prototype.tokyoRender = function () {

    var tr = document.createElement('tr');
    table.appendChild(tr);

    var td = document.createElement('td');
    td.textContent = 'Tokyo';
    tr.appendChild(td);

    for (var i = 0; i < workingHours.length + 1; i++) {
        var td = document.createElement('td');
        td.textContent = tokyo.cookiesPerHour[i];
        tr.appendChild(td);
    }

};

city.prototype.dubaiRender = function () {

    var tr = document.createElement('tr');
    table.appendChild(tr);

    var td = document.createElement('td');
    td.textContent = 'Dubai';
    tr.appendChild(td);

    for (var i = 0; i < workingHours.length + 1; i++) {
        var td = document.createElement('td');
        td.textContent = dubai.cookiesPerHour[i];
        tr.appendChild(td);
    }

};

city.prototype.parisRender = function () {

    var tr = document.createElement('tr');
    table.appendChild(tr);

    var td = document.createElement('td');
    td.textContent = 'Paris';
    tr.appendChild(td);

    for (var i = 0; i < workingHours.length + 1; i++) {
        var td = document.createElement('td');
        td.textContent = paris.cookiesPerHour[i];
        tr.appendChild(td);
    }

};

city.prototype.limaRender = function () {

    var tr = document.createElement('tr');
    table.appendChild(tr);

    var td = document.createElement('td');
    td.textContent = 'Lima';
    tr.appendChild(td);

    for (var i = 0; i < workingHours.length + 1; i++) {
        var td = document.createElement('td');
        td.textContent = lima.cookiesPerHour[i];
        tr.appendChild(td);
    }

};


var seattle = new city('Seattle', 23, 65, 6.2);
seattle.avgCookiesPerHour();
seattle.seattleRender();
var tokyo = new city('Tokyo', 3, 24, 1.2);
tokyo.avgCookiesPerHour();
tokyo.tokyoRender();
var dubai = new city('Dubai', 11, 38, 3.7);
dubai.avgCookiesPerHour();
dubai.dubaiRender();
var paris = new city('Paris', 20, 38, 2.3);
paris.avgCookiesPerHour();
paris.parisRender();
var lima = new city('Lima', 2, 16, 4.6);
lima.avgCookiesPerHour();
lima.limaRender();

function tablefooter() {

    var tr = document.createElement('tr');
    table.appendChild(tr);

    var td = document.createElement('td');
    td.textContent = 'Total';
    tr.appendChild(td);

    for (var i = 0; i < workingHours.length; i++) {
        var td = document.createElement('td');
        td.textContent = seattle.cookiesPerHour[i]+tokyo.cookiesPerHour[i]+dubai.cookiesPerHour[i]+paris.cookiesPerHour[i]+lima.cookiesPerHour[i];
        tr.appendChild(td);
    }
}
tablefooter();


function generateRandCookiesNum(minCust, maxCust, avgCookie) {
    var randomCookiesNumArray = [];
    var totalSum = 0
    for (var i = 0; i < workingHours.length-1; i++) {
        var randomvalue = Math.random();
        var randCustNum = Math.floor(randomvalue * (maxCust - minCust + 1) + minCust);
        var randomCookiesNum = Math.floor(randCustNum * avgCookie);
        totalSum = totalSum + randomCookiesNum;
        randomCookiesNumArray.push(randomCookiesNum);
    }
    randomCookiesNumArray.push(totalSum);
    return randomCookiesNumArray;

};






