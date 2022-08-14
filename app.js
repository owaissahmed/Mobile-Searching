var phones = {
    Samsung: {
        samsungs6: {
            brand: "Samsung",
            name: "samsungs6",
            price: 10000,
            image: "img/s6.png",
        },
        samsungs7: {
            brand: "Samsung",
            name: "samsungs7",
            price: 15000,
            image: "img/s7.png",
        },
        samsunga12: {
            brand: "Samsung",
            name: "samsunga12",
            price: 25000,
            image: "img/a12.png",
        },
        samsunga13: {
            brand: "Samsung",
            name: "samsunga13",
            price: 35000,
            image: "img/a13.png",
        },
        samsungzflip: {
            brand: "Samsung",
            name: "samsungzflip",
            price: 175000,
            image: "img/z-flip.webp",
        },
    },
    Iphone: {
        iphone7plus: {
            brand: "Iphone",
            name: "iphone7plus",
            price: 35000,
            image: "img/7plus.webp",
        },
        iphone6: {
            brand: "Iphone",
            name: "iphone6",
            price: 20000,
            image: "img/6.png"
        },
        iphonex: {
            brand: "Iphone",
            name: "iphonex",
            price: 75000,
            image: "img/x.png"
        },
        iphone12: {
            brand: "iphone",
            name: "iphone12",
            price: 175000,
            image: "img/12.webp"
        },
        iphone13: {
            brand: "Iphone",
            name: "iphone13",
            price: 255000,
            image: "img/13.png"
        },
    },
    Oppo: {
        oppoa16: {
            brand: "Oppo",
            name: "oppoa16",
            price: 34000,
            image: "img/a16.png",
        },
        oppoa54: {
            brand: "Oppo",
            name: "oppoa54",
            price: 35000,
            image: "img/a54.png"
        },
        oppoa76: {
            brand: "Oppo",
            name: "oppoa76",
            price: 42500,
            image: "img/a76.png"
        },
        oppoa16e: {
            brand: "Oppo",
            name: "oppoa16e",
            price: 27000,
            image: "img/a16e.png"
        },
        oppof21: {
            brand: "Oppo",
            name: "oppof21",
            price: 65000,
            image: "img/f21.png"
        },
    },
    Vivo: {
        vivoy21: {
            brand: "Vivo",
            name: "vivoy21",
            price: 34000,
            image: "img/y21.png",
        },
        vivoy33: {
            brand: "Vivo",
            name: "vivoy33",
            price: 35000,
            image: "img/y33.png"
        },
        vivoy55: {
            brand: "Vivo",
            name: "vivoy55",
            price: 42500,
            image: "img/y55.png"
        },
        vivov23: {
            brand: "Vivo",
            name: "vivov23",
            price: 27000,
            image: "img/v23.png"
        },
        vivov21: {
            brand: "Vivo",
            name: "vivov21",
            price: 65000,
            image: "img/v21.png"
        },
    },
    Realme: {
        realmec11: {
            brand: "Realme",
            name: "realmec11",
            price: 20000,
            image: "img/c11.png",
        },
        realmec21: {
            brand: "Realme",
            name: "realmec21",
            price: 22000,
            image: "img/c21.png"
        },
        realmec25: {
            brand: "Realme",
            name: "realmec25",
            price: 33000,
            image: "img/c25.png"
        },
        realme9i: {
            brand: "Realme",
            name: "realme9i",
            price: 40000,
            image: "img/9.png"
        },
        realmegt: {
            brand: "Realme",
            name: "realmegt",
            price: 72000,
            image: "img/gt.png"
        },
    },
}

var mob = Object.keys(phones)
console.log(mob)
for (var i = 0; i < mob.length; i++) {
    var dropdown = document.getElementById("dropdown")
    var option = document.createElement("option")
    var optionText = document.createTextNode(mob[i])
    option.appendChild(optionText)
    dropdown.appendChild(option)
}
function search() {
    var model = document.getElementById('search').value
    var brand = dropdown.value
    var full = (phones[brand][model].image)
    console.log(model)
    console.log(full)
    console.log(brand)

    var image = document.getElementById("productImg")
    var card = document.getElementById("card")
    image.style.display = 'block'
    card.style.display = 'block'
    image.src = full
    var company = document.getElementById("brand")
    company.innerText = ("Brand : " + (phones[brand][model]).brand)
    console.log(company)
    var name = document.getElementById("name")
    name.innerText = ("Name : " + (phones[brand][model]).name)
    console.log(name)
    var price = document.getElementById("price")
    price.innerText = ("Price : " + (phones[brand][model]).price)
    console.log(price)
}

