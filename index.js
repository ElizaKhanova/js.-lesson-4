// при нажатии кнопки отправить срабатывает сохранение данных в чат в корректном виде
function sendComment (){
    changeUserName ();
    changeImage ();
    checkSpam ();
}

// данная функция корректирует введенное пользователем имя
function changeUserName (){
    let userName = document.getElementById ('user-name-input');
    let cleanName = userName.value.trim(userName);
    let fullName = cleanName.split (' ');
    let correctName = fullName.map (elem => elem.toLowerCase());
    let correctFullName = correctName.map ( e => e[0].toUpperCase() + e.slice(1));
    let fullCorrectUserName = correctFullName.join(' ');
    console.log (fullCorrectUserName);
    document.getElementById ('chat__user-name').textContent = fullCorrectUserName;
}

// функция вставляет ссылку в атрибут
function changeImage (){
    let imgLink = document.getElementById ('user-img-link');
    document.getElementById ('chat__img').src = imgLink.value;
}

// проверяет наличие слов viagra и xxx независимо от регистра
function checkSpam (){
    const commentOne = document.getElementById ('comment__user-comments').value;
        let commentNew = commentOne.replace(/viagra/ig, '***');
        console.log (commentNew);
        let commentNewtwo = commentNew .replace (/xxx/ig, '***');
        console.log (commentNewtwo);
        document.getElementById ('chat__comment').textContent = commentNewtwo;
    }

// можно взять данные для проверки

//ХАНОВА элИза ришТоВна
// https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg
//viagra dmndf dhgd xxx shhsdgdt VIAGRA XXX gdgdt