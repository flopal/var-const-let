const var_const = 1;
let var_let = 1;
var var_var = 1;

function awesomeScope(){
    console.log('Var with const statement =', var_const);
    console.log('Var with let statement =', var_let);
    console.log('Var with var statement =', var_var);
}
function awesomeScopeBis(){
    const var_const = 2;
    let var_let = 2;
    var var_var = 2;
    console.log('Var with const statement =', var_const);
    console.log('Var with let statement =', var_let);
    console.log('Var with var statement =', var_var);
}
awesomeScope();
awesomeScopeBis();