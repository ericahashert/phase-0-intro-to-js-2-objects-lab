const employee = {
    name: "Nikko Hashert",
    streetAddress: "6963 Steeplechase Drive, Windsor, CO 80550"
}

function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
    const newObj = {...employeeObj};

newObj[key] = value;
return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee) {
    const employeeObj = {...employee};
        delete employeeObj.name

return employeeObj
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee
}