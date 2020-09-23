try {
    console.log('Var with const statement =', var_const);
} catch (error) {
    console.log('Var with const statement not yet initialized');
}
try {
    console.log('Var with let statement =', var_let);
} catch (error) {
    console.log('Var with let statement not yet initialized');
}
try {
    console.log('Var with var statement =', var_var);
} catch (error) {
    console.log('Var with var statement not yet initialized');
}
const var_const = 1;
let var_let = 1;
var var_var = 1;

console.log('')
console.log('As you see, Var with var statement is initialized with undefined value.');