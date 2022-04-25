
console.log("cart.........")


// const arr = [
//     {num:1, name:'AAA'},
//     {num:2, name:'BBB'},
//     {num:3, name:'CCC'},
// ]

const cart = [];

let index = 0;


// const idx = arr.findIndex(ele => ele.num === 2)

// if(idx >= 0){
//     arr.splice(idx,1)
// }

// console.log(arr)

function addCart({pname, price}){
    console.log('idx', index);
    console.log(pname, price);

    const idx = index++;
    const qty = 1;
    
    cart.push({idx, pname, price, qty});
    
    console.log(cart);
    return cart;
}

function removeItem(idx){

    const targetIndex = cart.findIndex(item => item.idx === idx);

    return cart.splice(targetIndex,1);

}