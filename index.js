// Your code here
function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arrOfArr) {
    const arrayOfObjects = [];
    for (const record of arrOfArr) {
        const newRecord = createEmployeeRecord(record);

        arrayOfObjects.push(newRecord);
    }
    return arrayOfObjects
}

function createTimeInEvent(dateStamp) { //yyyy-mm-dd hhmm
    let obj = {
        type : "TimeIn",
        hour : parseInt(dateStamp.slice(-4)),
        date : dateStamp.slice(0, 10)
    }
    this.timeInEvents.push(obj)
    return this
}

function createTimeOutEvent(dateStamp) {
    let obj = {
        type : "TimeOut",
        hour : parseInt(dateStamp.slice(-4)),
        date : dateStamp.slice(0, 10)
    }
    
    this.timeOutEvents.push(obj)
    return this
}

function hoursWorkedOnDate(targetDate) {
    const timeIn = this.timeInEvents.find(inEvent => inEvent.date === targetDate)
    const timeOut = this.timeOutEvents.find(inEvents => inEvents.date === targetDate)
    return (timeOut.hour - timeIn.hour) / 100
}


function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date)
    return this.payPerHour * hours
}


function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, rec) => {
    return total + allWagesFor.call(rec)  
    }, 0)
}


function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(name => name.firstName === firstName)
}
/*
We're giving you this function. Take a look at it, you might see some usage
that's new and different. That's because we're avoiding a well-known, but
sneaky bug that we'll cover in the next few lessons!

As a result, the lessons for this function will pass *and* it will be available
for you to use if you need it!
*/

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

