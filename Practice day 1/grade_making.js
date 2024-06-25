// 0-39 C
// 40 - 59 B
// 60 -69 A-
// 70 - 79 A
// 80 - 100 A+



let result = 80;
if(result<0){
    console.log("Failed");
}
else if(result>=0 && result<=39){
    console.log("C");
}
else if(result>=40 && result<=59){
    console.log("B");
}
else if(result>=60 && result<=69){
    console.log("A-");
}
else if(result>=70 && result<=79){
    console.log("A");
}
else{
    console.log("A+")
}