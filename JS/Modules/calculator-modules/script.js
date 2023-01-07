import calculate  from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { clearButton, handleButtonPress, hendleType } from "./keyHandlers.js"
import themeSwitch from "./themeSwitch.js"

document.querySelectorAll('.charKey').forEach(function (charkeyBtn){
 charkeyBtn.addEventListener('click', handleButtonPress) 
})

document.getElementById('clear').addEventListener('click', clearButton)

document.getElementById('equal').addEventListener('click', calculate)

document.getElementById('input').addEventListener('keydown', hendleType)

document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)

document.getElementById('themeSwitcher').addEventListener('click', themeSwitch )