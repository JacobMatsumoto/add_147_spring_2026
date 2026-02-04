function initialize() {
    let today = new Date();
    document.getElementById("today") .innerHTML = today;
}

function estimate() {
    let name = document.getElementById("name").value;
    let num_spaghetti = parseFloat(document.getElementById("spaghetti").value);
    let num_burger = parseFloat(document.getElementById("burger").value);
    let num_blt = parseFloat(document.getElementById("blt").value);
    let num_hotdog = parseFloat(document.getElementById("hotdog").value);
    let num_corndog = parseFloat(document.getElementById("corndog").value);

    let spaghetti_price = num_spaghetti * 5;
    let burger_price = num_burger * 7;
    let blt_price = num_blt * 4;
    let hotdog_price = num_hotdog * 3;
    let corndog_price = num_corndog * 2;

    let main_cost = spaghetti_price + burger_price + blt_price + hotdog_price + corndog_price;
    document.getElementById("main_total").value = main_cost;

    let num_fries = parseFloat(document.getElementById("fries").value);
    let num_curds = parseFloat(document.getElementById("curds").value);
    let num_tots = parseFloat(document.getElementById("tots").value);
    let num_mac = parseFloat(document.getElementById("mac").value);
    let num_chips = parseFloat(document.getElementById("chips").value);

    let fries_price = num_fries * 3;
    let curd_price = num_curds * 5;
    let tots_price = num_tots * 4;
    let mac_price = num_mac * 6;
    let chips_price = num_chips * 2;

    let side_cost = fries_price + curd_price + tots_price + mac_price + chips_price;
    document.getElementById("side_total").value = side_cost;

    let num_coke = parseFloat(document.getElementById("coke").value);
    let num_sprite = parseFloat(document.getElementById("sprite").value);
    let num_tea = parseFloat(document.getElementById("tea").value);
    let num_lemonade = parseFloat(document.getElementById("lemonade").value);
    let num_water = parseFloat(document.getElementById("water").value);

    let coke_price = num_coke * 5;
    let sprite_price = num_sprite * 7;
    let tea_price = num_tea * 4;
    let lemonade_price = num_lemonade * 3;
    let water_price = num_water * 1;

    let drinks_cost = coke_price + sprite_price + tea_price + lemonade_price + water_price;
    document.getElementById("drinks_total").value = drinks_cost;

    let total_bill = drinks_cost + side_cost + main_cost;
    document.getElementById("estimate").innerHTML = "Hello " + name + ", your total will be $" + total_bill;

}