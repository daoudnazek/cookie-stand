'use strict';

var workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'] ; 

var Seattle = {
    name : 'Seattle',
    hoursOfOperation : workingHours, 
    minimumCustomers : 23,
    maxCustomers : 65,
    avgCookiesPerCust : 6.2,
    cookiesPerHour : 0,
    avgCookiesPerHour : function(minCust,maxCust,avgCookie) {
        this.cookiesPerHour = generateRandCookiesNum(minCust,maxCust,avgCookie);
    }
};

 Seattle.avgCookiesPerHour(23,65,6.2);
 console.log(Seattle);


function generateRandCookiesNum(minCust,maxCust,avgCookie){
    for (var i = 0; i < 11; i++){
    var randomvalue = Math.random();
    var randCustNum = Math.floor(randomvalue * ( maxCust-minCust +1) + minCust);
    var randomCookiesNum = Math.floor(randCustNum * avgCookie);
    return [randCustNum,randCustNum];

    }
    
}

console.log(generateRandCookiesNum(23,65,6.2));