document.getElementById('sessionBtn').addEventListener('click', function(){
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
})

document.getElementById('readSesssion').addEventListener('click', function(){
    const info = sessionStorage.getItem('info')
    alert(`a informação salva é:  ${info}`)
})

document.getElementById('localBtn').addEventListener('click', function(){
    const input = document.getElementById('local')
    localStorage.setItem('text', input.value)
    input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function(){
    const text = localStorage.getItem('text')
    alert(`a informação salva é:  ${text}`)
})


document.getElementById('cookieBtn').addEventListener('click', function(){
    const input = document.getElementById('cookie')
    const cookie = 'info=' + input.value + ';'
    const expiration = 'experis=' + new Date(2022, 11, 24) + ';'
    const path = 'path/;'
    document.cookie = cookie + expiration + path
    input.value = ''
})
document.getElementById('cookie2Btn').addEventListener('click', function(){
    const input = document.getElementById('cookie2')
    const cookie = 'text=' + input.value + ';'
    const expiration = 'experis=' + new Date(2022, 8, 9) + ';'
    const path = 'path/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})
