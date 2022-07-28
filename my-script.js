let characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                    "~","`","!","@","#","$","%","^","&","*","(",")",
                    "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let randomNum
let password1 = document.getElementById("pswd1")
let password2 = document.getElementById("pswd2")
let randomChar
let passwordLen

function generate() {
    password1.textContent = ""
    password2.textContent = ""
    passwordLen = document.getElementById("password-length").value

    if(passwordLen > 7 && passwordLen < 19) {
        for(let i=1; i<=passwordLen; i++) {
            randomNum = Math.floor(Math.random() * characters.length)
            randomChar = characters[randomNum]
            password1.textContent += randomChar

            randomNum = Math.floor(Math.random() * characters.length)
            randomChar = characters[randomNum]
            password2.textContent += randomChar
        } 
    } else {
        alert("Please enter number from 8 to 18 only")
    }
}


