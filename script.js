var word = ["css","html","jquery","javascript","bootstrap","react"];
var words = word[Math.floor(Math.random()*word.length)];
var blank = []

for (var i = 0; i < words.length; i++){
    blank[i] =  "_";
}
var remaining = words.length;
while(remaining > 0){
    alert(blank.join(" "));
    var guess = prompt("Enter a letter");
    if (guess == null){
        break;
    }
    else if (guess.length != 1){
        alert("Please enter a single letter at a time")
    }
    else {
        for (var j = 0; j < word.length; j++){
            if (word[j] == guess){
                blank[j] = guess;
                word.length--;
            }
        }
    }
    // document.getElementById("print").innerHTML = blank;
}
alert(blank.join(" "));
alert("Hurray You Won!!")

console.log(words)