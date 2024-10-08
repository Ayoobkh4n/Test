var i=5;
function beer(){
    while (i>=2){
        console.log(i+" bottles of beer on the wall, "+i+" bottles of beer. Take one down and pass it around, "+(i-1)+" bottles of beer on the wall.")
        i--;
    }
    if(i==1){
        console.log(i+" bottle of beer on the wall, "+i+" bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.")
        i--;
    }
    if(i==0){
        console.log("No more bottles on the wall, no more bottles of beer")
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
        }
}