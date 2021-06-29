const son = Math.floor(Math.random() * 10);
const son1 = Math.floor(Math.random() * 10);
const raqam = document.getElementById("son").value;
const limit = document.getElementById("imkoniyat");
const bosh = document.getElementById("bosh");
const random1 = document.getElementById("random1");
const random2 = document.getElementById("random2");
const topganson = document.getElementById("topganson");


let a = 10;

const topdim = (() => {
    const son = Math.floor(Math.random() * 10);
    const son1 = Math.floor(Math.random() * 10);
    random1.innerHTML = son
    random2.innerHTML = son1

    limit.innerHTML = a

    if (a > 0) {
        a--
        if (raqam == son + son1) {
            alert("to`g`ri topdingiz")
            topganson.innerHTML = "yutdingiz"
        } else {
            alert("xato")
            topganson.innerHTML = son + son1
        }
    }
    else {
        bosh.innerHTML = "sizda imkoniyat qolmadi"
        alert("qaytadan boshlang")
    }

});
topdim()


