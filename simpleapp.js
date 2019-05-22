// function add(x, y) {
//     return x + y;
// }

// function sub(x, y) {
//     return x - y;
// }

// console.log('add = ' + add(3, 4));
// console.log('sub = ' + sub(7, 5));

var Employees = [{ EmpNo: 1, EmpName: 'A' }, { EmpNo: 2, EmpName: 'B' }];

function printData() {
    console.log(JSON.stringify(Employees));
}

printData();