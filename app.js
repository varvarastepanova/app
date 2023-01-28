function first() {
    // Про 10+50 кнопка
    alert(`Будет ${10 + 50}`)
}

function second() {
    // С помощью prompt
    let age = prompt('Введи свой возраст')
    if (age < 18 ){
     alert('Ты ещё очень маленький(ая)!')    
    } else{
      alert('Вход разрешён!')
    }
}

function third() {
    // Вставить в элемент HTML с id 'zp' вставить тысячу
    document.getElementById('zp').innerHTML = '1000$';
}