alert("Matematikadan testga Xush kelibsiz! Davom etish uchun enter tugmasini bosing")
var firstName = prompt("Iltimos ismingizni yozing: ")
console.log("Sizning ismingiz " +firstName)
var age = +prompt(firstName+" yoshingizni ham yozing:")
console.log(firstName+" sizning yoshingiz " +age+" da")
var problemOne = +prompt(firstName+" iltimos shu misolni yeching => 9 + 4 = ?")
console.log(firstName+" 1-misolning javobi => 9 + 4 = "+(9+4)+" Sizning javobingiz "+problemOne)
var problemTwo = +prompt(firstName+" iltimos ikkinchi misolni ham yeching => 9 - 4 = ?")
console.log(firstName+" 2-misolning javobi => 9 - 4 = "+(9-4)+" sizning javobingiz "+problemTwo)
var problemThree = +prompt(firstName+" iltimos uchinchi misolni ham yeching => 9 * 4 = ?")
console.log(firstName+" 3-misolning javobi => 9 * 4 = "+(9*4)+" sizning javobingiz "+problemThree)
var problemFour = +prompt(firstName+" iltimos to'rtinchi misolni ham yeching => 9 / 4 = ?")
console.log(firstName+" 4-misolning javobi => 9 / 4 = "+(9/4)+" sizning javobingiz "+problemFour)
var problemFive = +prompt(firstName+" iltimos beshinchi misolni ham yeching => 9 % 4 = ?")
console.log(firstName+" 5-misolning javobi => 9 % 4 = "+(9%4)+" sizning javobingiz "+problemFive)
var problemSix = +prompt(firstName+" iltimos oltinchi misolni ham yeching => (9+4)+(9-4)+(9*4)+(9/4)+(9%4) = ?")
console.log(firstName+" 6-misolning javobi => (9+4)+(9-4)+(9*4)+(9/4)+(9%4) = "+((9+4)+(9-4)+(9*4)+(9/4)+(9%4))+" sizning javobingiz "+problemSix)
if (problemOne == 13 && problemTwo == 5 && problemThree == 36 && problemFour == 2.25 && problemFive == 1 && problemSix == ((9+4)+(9-4)+(9*4)+(9/4)+(9%4))){
alert("Barcha savollarga to'g'ri javob topdingiz, Tabriklaymiz! "+firstName)
}
if (problemOne > (9+4) || problemOne < (9+4)){
               alert("1-misolni noto'g'ri yechdingiz, to'g'ri javob: "+(9+4))
}
if (problemTwo > (9-4) || problemTwo < (9-4)){
               alert("2-misolni noto'g'ri yechdingiz, to'g'ri javob: "+(9-4))
}
if (problemThree > (9*4) || problemThree < (9*4)){
               alert("3-misolni noto'g'ri yechdingiz, to'g'ri javob: "+(9*4))
}
if (problemFour > (9/4) || problemFour < (9/4)){
               alert("4-misolni noto'g'ri yechdingiz, to'g'ri javob: "+(9/4))
}
if (problemFive > (9%4) || problemFive < (9%4)){
               alert("5-misolni noto'g'ri yechdingiz, to'g'ri javob: "+(9 % 4))
}
if (problemSix > (problemOne+problemTwo+problemThree+problemFour+problemFive) || problemSix < (problemOne+problemTwo+problemThree+problemFour+problemFive) ){
               alert("6-misolni noto'g'ri yechdingiz, to'g'ri javob: "+((9+4)+(9-4)+(9*4)+(9/4)+(9%4)))
}


alert("Rahmat, siz oltita misolni ham yechib bo'ldingiz")