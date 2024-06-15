let counter = 0;

function recursionfunc(){

    counter++;

    recursionfunc();


}

try{
    recursionfunc();
}
catch(e){
    console.log("Error: " +e.message);
    console.log("Counter value: " + counter);
}