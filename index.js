let valid={
    upper_case:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    lower_case:[ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    num:["1","2","3","4","5","6","7","8","9","0"],
    special_char:["!","@","#","$","%","^","&","*"],
    pw : document.getElementById("key"),
}

let pw = document.getElementById("key");

$("#key").on("keyup",function(){
    if(valid.pw.value)
    console.log(valid.pw.value);
})
