let cart = [] ;
window.onload = function () {
    loadItems();
    RetriveCart();
    var cartBox = document.getElementById("cart");
    cartBox.addEventListener('click', ()=>{ window.location.href = "Cart.html"});
}

let AddtoCart =  (ev) =>{
    let d = ev.target.id;
    // console.log(d);
    if(ev.target.id[0]==='b'||ev.target.id[0]==='i')
    {
        d=d.slice(d.length-1,d.length);
    }
    const i = cart.findIndex(obj => obj.id === d);
    console.log(i);
    console.log(cart)
    if(i>=0)
    {

        cart = [
            ...cart.slice(0,i),
            {...cart[i],quantity:cart[i].quantity+1},
            ...cart.slice(i+1)
        ]
    }
    else
        cart.push({id:d,quantity:1});
    SaveCart();

    let length = 0;
    for(let i =0;i< cart.length;i++)
        length = length + cart[i].quantity;

    let c = document.getElementById('count');
    c.innerHTML = length;
}
let SaveCart = ()=> {
    localStorage.setItem("Cart",JSON.stringify(cart));

}
let RetriveCart = ()=> {
    let getcart = localStorage.getItem("Cart");
    if(getcart)
    {
        cart = JSON.parse(getcart);
    }
    let length = 0;
    for(let i =0;i< cart.length;i++)
        length = length + cart[i].quantity;

    let c = document.getElementById('count');
    c.innerHTML = length;
}
let AddListeners = ()=>{
    for(let i =0;i<9;i++)
    {
        let j = "" + i;
        let k = document.getElementById(j);
        // console.log(k)
        k.addEventListener('click', AddtoCart);
    }
}
let loadItems = () =>{
    $.getJSON('data.json',(data) =>{
        // console.log(data);
        for(let i=0;i<data.length;i+=3) {
             // console.log("hello i am in");
            $("#catalog").append(`
        <div class="catalog--row">
            <div class="item">
            <img src=${data[i].url} class="item--image" >
            <div class="item--add" id=${data[i].id}>
                <div class="item--add--btn" id="btn--${data[i].id}">
                <img src="img/shopping-cart-white.svg" class="icon" id="img--${data[i].id}">
                </div>
                </div>
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
           <img src=${data[i + 1].url} class="item--image" >
               <div class="item--add" id=${data[i + 1].id}>

                <div class="item--add--btn" id="btn--${data[i + 1].id}">
                <img src="img/shopping-cart-white.svg" class="icon" id="img--${data[i+2].id}">
                </div>
                </div>
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
            <img src=${data[i + 2].url} class="item--image">
            <div class="item--add" id=${data[i + 2].id}>

                <div class="item--add--btn" id="btn--${data[i + 2].id}">
                <img src="img/shopping-cart-white.svg" class="icon" id="img--${data[i+2].id}">
                </div>
            </div>
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
    // console.log("hello i am out ")

}
