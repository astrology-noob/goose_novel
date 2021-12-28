let cotainer = document.querySelector("#cotainer");
let nextbtn_tmp = document.getElementById("nextbtn_tmp").innerHTML;
let options_tmp = document.getElementById("options_tmp").innerHTML;

function changeCotainerContent(temp) {
    if (temp == "btn") {
        cotainer.innerHTML = nextbtn_tmp
    }

    else {
        cotainer.innerHTML = options_tmp
    }
}

function changeImg(index) {
    if (characters[index]) {
        let img_bubble = document.querySelector("#img_bubble");
        img_bubble.style.background = `url("photos/${characters[index].photo}")`;
        img_bubble.style.backgroundSize = "cover";
    }
}

function changeOptText(index) {
    let options_div = document.getElementById("options").children;
    options_div[0].setAttribute("value", goose_lines[index][0][0]);
    options_div[1].setAttribute("value", goose_lines[index][1][0]);
}

function changeBubbleText(text) {
    document.getElementById("dialog_bubble").firstChild.innerHTML = text;
}

function changeCharName(index) {
    if (characters[index]) {
        document.getElementById("char_name").firstChild.innerHTML = characters[index].name;
    }
}


function main_btn_action() {
    
    changeBubbleText(goose_lines[index]);
    changeImg(index);
    changeCharName(index);
    changeCotainerContent("btn");
    
    if (goose_lines[index+1]) {

        if (typeof(goose_lines[index+1]) == "object") {
            changeCotainerContent("opt");
            changeOptText(index+1);
        }
        
        index += 1;
    }
    
    else {
        document.querySelector("#nextbtn").setAttribute("disabled", "disabled");
    }
}

function show_option_answer(name) {
    let option_index;
    
    if (name == "option0") {
        option_index = 0;
    }
    
    else {
        option_index = 1;
    }
    
    changeBubbleText(goose_lines[index][option_index][1]);
    
    index += 1;
    
    changeCotainerContent("btn")
}


let goose_lines = [
    // 0
    "Наша история начинается с солнца",
    // 1
    "Тёплое солнце греет некую особу (это вы, дорогой игрок!)",
    // 2
    "Особа хорошо проводит время, как будто напрашиваясь, чтобы кто-то это исправил..",
    // 3
    "Привет!!",
    // 4
    "Слава Богу я тебя встретил!",
    // 5
    [["Ты что ГУСЬ??", "Это было обидно..."], ["Я Вас знаю?", "Нет, мы ещё не знакомы"]],
    // 6
    "Я Женя, люблю голубику!",
    // 7
    "Можешь мне помочь?",
    // 8
    [["Гуси не умеют разговаривать...", "Хм, я просто расскажу, что мне от тебя нужно."], ["А зачем нужна моя помощь?", "Да ты не поверишь!"]],
    // 9
    "Мой знакомый друг великан придумал викторину",
    // 10
    "Приз - таинственная шкатулка, и ключ от неё",
    // 11
    "Гениальные мысли преследуют меня, но я быстрее, поэтому я сам не справлюсь..",
    // 12
    "Хочешь поучаствовать со мной?",
    // 13
    [["Звучит интересно!", "Ещё как!"], ["Похоже на развод, но окей", "Да ну? О_0"]],
    // 14
    "Тогда идём скорее к нему!",
    // 15
    "И так они шли долго. Слишком долго. Настолько долго, что особа подумала, что Женя не знает дороги",
    // 16
    "Они наконец подошли к большооому дереву",
    // 17
    "А вот и дверь. Я постучу.",
    // 18
    "*Беззвучно бьёт перьями по двери*",
    // 19
    "'КТО ЗДЕСЬ!?' крикнул Великан из-за двери",
    // 20
    "Особа нехило так испугалась",
    // 21
    "Но Женя уверено сказал",
    // 22
    "Сахарная клюква!",
    // 23
    "Великан открыл дверь",
    // 24
    "Я ЛЮБЛЮ САХАРНУЮ КЛЮКВУ!",
    // 25
    "ЖЕНЯ! ТЫ!",
    // 26
    "Да, привет Лёх",
    // 27
    "Мы с особой пришли поучаствовать в викторине",
    // 28
    "УРА! ВЫ БУДЕТЕ ИГРАТЬ СО МНОЙ В ВИКТОРИНУ!",
    // 29
    "ПЕРВЫЙ ВОПРОС",
    // 30
    "ЧТО Я ЛЮБЛЮ?",
    // 31
    [["Клюкву", "НЕПРАВИЛЬНО"], ["Сахарную клюкву", "ВЕРНО!"]],
    // 32
    "ЛЮБЛЮ САХАРНУЮ КЛЮКВУ!",
    // 33
    "ВТОРОЙ ВОПРОС",
    // 34
    "КАК МЕНЯ ЗОВУТ?",
    // 35
    [["Арнольд", "ЭЙ НЕВЕРНО"], ["Лёха", "ПРАВИЛЬНО"]],
    // 36
    "ПОСЛЕДНИЙ ВОПРОС",
    // 37
    "ГДЕ Я ЖИВУ?",
    // 38
    [["За дверью", "ПРАВИЛЬНО, НАВЕРНОЕ"], ["В дереве", "ДА! ЛЮБЛЮ МОЁ ДЕРЕВО"]],
    // 39
    "МНЕ ПОНРАВИЛОСЬ ИГРАТЬ!",
    // 40
    "ВЫ ВЫИГРАЛИ",
    // 41
    "*шёпотом* он видимо не совсем понимает как работают викторины",
    // 42
    "А шкатулку отдашь?",
    // 43
    "СЕЙЧАС ПРИНЕСУ!",
    // 44
    "Лёха закрыл дверь. Послышались его тяжёлые шаги",
    // 45
    "Затем какой-то скрежет",
    // 46
    "А потом тишина",
    // 47
    "Женя понял, что что-то не так спустя 10 минут, как стихло",
    // 48
    "Он наверное забыл вернуться. Сейчас",
    // 49
    "САХАРНАЯ КЛЮКВА",
    // 50
    "Великан затопал к двери",
    // 51
    "Дверь открылась и показался Лёха с шкатулкой и ключом",
    // 52
    "САХАРНАЯ КЛЮКВА!",
    "А РЕБЯТ ЭТО ВЫ. ДЕРЖИТЕ",
    // 53
    "Особа взяла в руки шкатулку, а Женя схватил клювом ключ",
    // 54
    "Они тут же попытались открыть шкатулку",
    // 55
    "Да фто ве такое? Посему ключ не потхотит?",
    // 56
    "ЕСЛИ БЫ КЛЮЧ ПОДХОДИЛ, ШКАТУЛКА НЕ БЫЛА БЫ ЗАГАДОЧНОЙ",
    // 57
    "А ведь и правда",
    // 58
    "Особа поблагодарила Лёху, и вместе с Женей они отправились на поиски нужного ключа для шкатулки",
    // 59
    "Конец"
]

class Character {
    constructor(name, photo) {
        this.name = name;
        this.photo = photo
    }
}

let storyteller = new Character("Рассказчик", "");
let goose = new Character("Гусь", "goose.jpg");
let big_boy = new Character("Великан", "big_boy.jpeg")

let characters = {
    0: storyteller,
    3: goose,
    15: storyteller,
    17: goose,
    19: storyteller,
    22: goose,
    23: storyteller,
    24: big_boy,
    26: goose,
    28: big_boy,
    41: goose,
    43: big_boy,
    44: storyteller,
    48: goose,
    50: storyteller,
    52: big_boy,
    54: storyteller,
    56: goose,
    57: big_boy,
    58: storyteller,
}

let index = 0;

changeCotainerContent("btn")