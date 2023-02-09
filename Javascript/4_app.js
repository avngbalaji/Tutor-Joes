console.log('connected...');

//4.var, let, const in javascript


//----scope
var a=10;
var b=20;
console.log(a+b);

if(true){
    var msg_var='var scope test';
    console.log(msg_var);
}
console.log(msg_var);

if(true){
    let msg_let='let scope test';
    console.log(msg_let);
}
// console.log(msg_let);  //error

if(true){
    const msg_const='const scope test';
    console.log(msg_const);
}
// console.log(msg_const);  //error


//----variable redeclaration
var i=25;
console.log(i);
var i=26;
console.log(i);

let j=30;
console.log(j);
/* let j=30;
console.log(j);  shows error*/

const k=40;
console.log(k);
/*const k=40;
console.log(k);  shows error*/


//----value assignment
var ii=11;
console.log(ii);
ii=12;
console.log(ii);

let jj=90;
console.log(jj);
jj=91;
console.log(jj);

const kk=48;
console.log(kk);
/*kk=49;
console.log(kk);  shows error*/

const student4={name: 'balaji', age: 30, city: 'madurai'};
console.log(student4);
student4.name='kumar';
console.log(student4.name);  //this is const although we can redeclare in object types


