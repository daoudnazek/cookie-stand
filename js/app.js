'use strict';

var workingHours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

var Seattle = {
    name: 'Seattle',
    hoursOfOperation: workingHours,
    minimumCustomers: 23,
    maxCustomers: 65,
    avgCookiesPerCust: 6.2,
    cookiesPerHour: [],
    avgCookiesPerHour: function (minCust, maxCust, avgCookie) {
        this.cookiesPerHour = generateRandCookiesNum(minCust, maxCust, avgCookie);
    },

    render: function() {

        var parentElement = document.getElementById('city profile');

        var div = document.createElement('div');
        parentElement.appendChild(div);

        var h2 = document.createElement('h2');
        h2.textContent = this.name;
        div.appendChild(h2);

        var ul = document.createElement('ul');
        div.appendChild(ul);

        for (var i = 0; i < this.cookiesPerHour.length; i++){
            var li = document.createElement('li');
            li.textContent = this.cookiesPerHour[i];
            ul.appendChild(li);
        }
            
    },
};

Seattle.avgCookiesPerHour(23, 65, 6.2);
Seattle.render();


var Tokyo = {
    name: 'Tokyo',
    hoursOfOperation: workingHours,
    minimumCustomers: 3,
    maxCustomers: 24,
    avgCookiesPerCust: 1.2,
    cookiesPerHour: [],
    avgCookiesPerHour: function (minCust, maxCust, avgCookie) {
        this.cookiesPerHour = generateRandCookiesNum(minCust, maxCust, avgCookie);
    },

    render: function() {

        var parentElement = document.getElementById('city profile');

        var div = document.createElement('div');
        parentElement.appendChild(div);

        var h2 = document.createElement('h2');
        h2.textContent = this.name;
        div.appendChild(h2);

        var ul = document.createElement('ul');
        div.appendChild(ul);

        for (var i = 0; i < this.cookiesPerHour.length; i++){
            var li = document.createElement('li');
            li.textContent = this.cookiesPerHour[i];
            ul.appendChild(li);
        }
            
    },
};

Tokyo.avgCookiesPerHour(3, 24, 1.2);
Tokyo.render();


var Dubai = {
    name: 'Dubai',
    hoursOfOperation: workingHours,
    minimumCustomers: 11,
    maxCustomers: 38,
    avgCookiesPerCust: 3.7,
    cookiesPerHour: [],
    avgCookiesPerHour: function (minCust, maxCust, avgCookie) {
        this.cookiesPerHour = generateRandCookiesNum(minCust, maxCust, avgCookie);
    },

    render: function() {

        var parentElement = document.getElementById('city profile');

        var div = document.createElement('div');
        parentElement.appendChild(div);

        var h2 = document.createElement('h2');
        h2.textContent = this.name;
        div.appendChild(h2);

        var ul = document.createElement('ul');
        div.appendChild(ul);

        for (var i = 0; i < this.cookiesPerHour.length; i++){
            var li = document.createElement('li');
            li.textContent = this.cookiesPerHour[i];
            ul.appendChild(li);
        }
            
    },
};

Dubai.avgCookiesPerHour(11, 38, 3.7);
Dubai.render();



var Paris = {
    name: 'Paris',
    hoursOfOperation: workingHours,
    minimumCustomers: 20,
    maxCustomers: 38,
    avgCookiesPerCust: 2.3,
    cookiesPerHour: [],
    avgCookiesPerHour: function (minCust, maxCust, avgCookie) {
        this.cookiesPerHour = generateRandCookiesNum(minCust, maxCust, avgCookie);
    },

    render: function() {

        var parentElement = document.getElementById('city profile');

        var div = document.createElement('div');
        parentElement.appendChild(div);

        var h2 = document.createElement('h2');
        h2.textContent = this.name;
        div.appendChild(h2);

        var ul = document.createElement('ul');
        div.appendChild(ul);

        for (var i = 0; i < this.cookiesPerHour.length; i++){
            var li = document.createElement('li');
            li.textContent = this.cookiesPerHour[i];
            ul.appendChild(li);
        }
            
    },
};

Paris.avgCookiesPerHour(20, 38, 2.3);
Paris.render();


var Lima = {
    name: 'Lima',
    hoursOfOperation: workingHours,
    minimumCustomers: 2,
    maxCustomers: 16,
    avgCookiesPerCust: 4.6,
    cookiesPerHour: [],
    avgCookiesPerHour: function (minCust, maxCust, avgCookie) {
        this.cookiesPerHour = generateRandCookiesNum(minCust, maxCust, avgCookie);
    },

    render: function() {

        var parentElement = document.getElementById('city profile');

        var div = document.createElement('div');
        parentElement.appendChild(div);

        var h2 = document.createElement('h2');
        h2.textContent = this.name;
        div.appendChild(h2);

        var ul = document.createElement('ul');
        div.appendChild(ul);

        for (var i = 0; i < this.cookiesPerHour.length; i++){
            var li = document.createElement('li');
            li.textContent = this.cookiesPerHour[i];
            ul.appendChild(li);
        }
            
    },
};

Lima.avgCookiesPerHour(2, 16, 4.6);
Lima.render();



function generateRandCookiesNum(minCust, maxCust, avgCookie) {
    var randomCookiesNumArray = [];
    var totalSum = 0
    for (var i = 0; i < workingHours.length; i++) {
        var randomvalue = Math.random();
        var randCustNum = Math.floor(randomvalue * (maxCust - minCust + 1) + minCust);
        var randomCookiesNum = Math.floor(randCustNum * avgCookie);
        totalSum = totalSum + randomCookiesNum;
        randomCookiesNumArray.push(workingHours[i] + randomCookiesNum.toString()+ ' Cookies');
    }
    randomCookiesNumArray.push('Total: ' + totalSum.toString() + ' Cookies');
    return randomCookiesNumArray;
}
