let cart = [] ;
window.onload = function () {
    loadItems();
    RetriveCart();
    var cartBox = document.getElementById("cart");
    cartBox.addEventListener('click', ()=>{ window.location.href = "Cart.html"});
}

let AddtoCart =  (ev) =>{
    const i = cart.findIndex(obj => obj.id === ev.target.id);
    console.log(i);
    if(i>=0)
    {

        cart = [
        ...cart.slice(0,i),
         {...cart[i],quantity:cart[i].quantity+1},
        ...cart.slice(i+1)
        ]
    }
    else
    cart.push({id:ev.target.id,quantity:1});
    SaveCart();
    console.log(cart)
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
    for(let i =0;i<18;i++)
    {
        let j = "" + i;
        let k = document.getElementById(j);
        let t = "btn--" +i;
        let z = document.getElementById(t);
        k.addEventListener('click', AddtoCart);
        k.addEventListener('mouseover', (ev)=>{

            let p = "btn--" + ev.target.id ;
            console.log(p);
            let o = document.getElementById(p)
            console.log(o);
            o.style.opacity =.6;
        });
        k.addEventListener('mouseleave', (ev)=>{

            let p = "btn--" + ev.target.id ;
            console.log(p);
            let o = document.getElementById(p)
            console.log(o);
            o.style.opacity = 0;
        });
    }
}
let loadItems = () =>{
    $.getJSON('data.json',(data) =>{
        for(let i=0;i<data.length;i+=3) {
            $("#catalog").append(`
        <div class="catalog--row">
            <div class="item">
                <img src=${data[i].url} class="item--image" id=${data[i].id}>
                <div class="item--add--btn" id="btn--${data[i].id}">
                <img src="img/shopping-cart-white.svg" class="icon">        
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
                <img src=${data[i + 1].url} class="item--image" id=${data[i + 1].id}>
                <div class="item--add--btn" id="btn--${data[i + 1].id}">  
                <img src="img/shopping-cart-white.svg" class="icon">            
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
                <img src=${data[i + 2].url} class="item--image" id=${data[i + 2].id}>
                <div class="item--add--btn" id="btn--${data[i + 2].id}">        
                <img src="img/shopping-cart-white.svg" class="icon">      
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

}