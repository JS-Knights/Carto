let cart = [] ;
window.onload = function () {
    loadItems();
    var cartBox = document.getElementById("cart")
    cartBox.addEventListener('click', ()=>{ window.location.href = "http://localhost:63342/Workshop/Cart.html"});
}

let AddtoCart =  (ev) =>{
    cart.push(ev.target.id);
    var c = document.getElementById('count');
    c.innerHTML = cart.length;
    // console.log(cart)
}
let AddListeners = ()=>{
    for(let i =0;i<18;i++)
    {
        let j = "" + i;
        let k = document.getElementById(j);
        k.addEventListener('click', AddtoCart);
    }
}
let loadItems = () =>{
    $.getJSON('data.json',(data) =>{
        for(let i=0;i<data.length;i+=3) {
            console.log(i);
            $("#catalog").append(`
        <div class="catalog--row">
            <div class="item">
                <img src=${data[i].url} class="item--image" id=${data[i].id}>
                <div class="item--detail">
                    <div class="item--name">
                        ${data[i].name}
                    </div>
                    <div class="item--price">
                        ${data[i].price}
                    </div>
                </div>
            </div>
            <div class="item">
                <img src=${data[i + 1].url} class="item--image" id=${data[i + 1].id}>
                <div class="item--detail">
                    <div class="item--name">
                        ${data[i + 1].name}
                    </div>
                    <div class="item--price">
                        ${data[i + 1].price}
                    </div>
                </div>
            </div>
            <div class="item">
                <img src=${data[i + 2].url} class="item--image" id=${data[i + 2].id}>
                <div class="item--detail">
                    <div class="item--name">
                        ${data[i + 2].name}
                    </div>
                    <div class="item--price">
                        ${data[i + 2].price}
                    </div>
                </div>
            </div>
        </div>`)
        }
        AddListeners();
    });

}