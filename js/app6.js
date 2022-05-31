

function padezRubl(inc) {
    let prelastDigit = getPreLastFun(inc)
    if (prelastDigit === 1) {
        return "рублей"
    }
    else if (prelastDigit == Infinity){
        return "Жмотяра"
    }
    inc = String(inc);
    let lastNum = Number(inc.charAt(inc.length - 1))
    switch (lastNum) {
        case 1:
            return "рубль";
        case 2:
        case 3:
        case 4:
            return "рубля";
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        return "рублей";
        
    }
}


function getPreLastFun(inc) {
    inc = String(inc);
    let prelast = inc.charAt(inc.length - 2);
    if (inc.length < 2) {
        return Infinity;
    }
    else if (prelast !== "") {
        return Number(prelast)
    }
    return "ШМОТЯРА";
}


let incame = parseInt(prompt('Введиите сумму вклада'));
alert('Cумма ' + incame +   padezRubl(incame) + ' зачислена!')

// не смог придумать свое решение, поетому хорошо усвоил Ваше. Спасибо.
// И чуток поиграл с програмой