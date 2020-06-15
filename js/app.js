'use strict';

var workingHours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '] ; 

var Seattle = {
    name : 'Seattle',
    hoursOfOperation : workingHours, 
    minimumCustomers : 23,
    maxCustomers : 65,
    avgCookiesPerCust : 6.2,
    cookiesPerHour : [],
    avgCookiesPerHour : function(minCust,maxCust,avgCookie) {
        this.cookiesPerHour = generateRandCookiesNum(minCust,maxCust,avgCookie);
    }
};

 Seattle.avgCookiesPerHour(23,65,6.2);
 console.log(Seattle);


 var Tokyo = {
    name : 'Tokyo',
    hoursOfOperation : workingHours, 
    minimumCustomers : 3,
    maxCustomers : 24,
    avgCookiesPerCust : 1.2,
    cookiesPerHour : [],
    avgCookiesPerHour : function(minCust,maxCust,avgCookie) {
        this.cookiesPerHour = generateRandCookiesNum(minCust,maxCust,avgCookie);
    }
};

 Tokyo.avgCookiesPerHour(3,24,1.2);
 console.log(Tokyo);


 var Dubai = {
    name : 'Dubai',
    hoursOfOperation : workingHours, 
    minimumCustomers : 11,
    maxCustomers : 38,
    avgCookiesPerCust : 3.7,
    cookiesPerHour : [],
    avgCookiesPerHour : function(minCust,maxCust,avgCookie) {
        this.cookiesPerHour = generateRandCookiesNum(minCust,maxCust,avgCookie);
    }
};

 Dubai.avgCookiesPerHour(11,38,3.7);
 console.log(Dubai);


 var Paris = {
    name : 'Paris',
    hoursOfOperation : workingHours, 
    minimumCustomers : 20,
    maxCustomers : 38,
    avgCookiesPerCust : 2.3,
    cookiesPerHour : [],
    avgCookiesPerHour : function(minCust,maxCust,avgCookie) {
        this.cookiesPerHour = generateRandCookiesNum(minCust,maxCust,avgCookie);
    }
};

 Paris.avgCookiesPerHour(20,38,2.3);
 console.log(Paris);


 var Lima = {
    name : 'Lima',
    hoursOfOperation : workingHours, 
    minimumCustomers : 2,
    maxCustomers : 16,
    avgCookiesPerCust : 4.6,
    cookiesPerHour : [],
    avgCookiesPerHour : function(minCust,maxCust,avgCookie) {
        this.cookiesPerHour = generateRandCookiesNum(minCust,maxCust,avgCookie);
    }
};

 Lima.avgCookiesPerHour(2,16,4.6);
 console.log(Lima);




function generateRandCookiesNum(minCust,maxCust,avgCookie){
    var randomCookiesNumArray = [];
    var totalSum = 0
    for (var i = 0; i < workingHours.length; i++){
    var randomvalue = Math.random();
    var randCustNum = Math.floor(randomvalue * ( maxCust-minCust +1) + minCust);
    var randomCookiesNum = Math.floor(randCustNum * avgCookie);
    totalSum = totalSum + randomCookiesNum;  
    randomCookiesNumArray.push (workingHours[i] + randomCookiesNum.toString());
    }
    randomCookiesNumArray.push ('Total: ' + totalSum.toString());
    return randomCookiesNumArray;
}
