
const firebaseURL = import.meta.env.VITE_FIREBASE_DB_URL;


// Get menu start
export const getMenuData = async () => {
    const res = await fetch(firebaseURL + '.json');
    const data = await res.json();

    const data2 = Object.entries(data?.menu?.items).map(([key, value]) => ({
        fbId: key,
        ...value
    }))

    return data2;
}
// Get menu end


// add to cart start
export const addCart = (value) => {

    const data = { item: value }

    fetch(firebaseURL + 'cart/.json', {
        method: 'POST',
        headers: { "Content-Type": 'application/json' },
        body: JSON.stringify(data)
    }).then(() => {
        console.log('Added To Cart');
    });

}
// add to cart end


// Book table start
export const book_table = (value) => {
    const data = { item: value }

    fetch(firebaseURL + 'tableBook/.json', {
        method: 'POST',
        headersL: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(() => {
        console.log('table add')
    });
}
// Book table end


// Get menu start
export const getCartData = async () => {

    const res = await fetch(firebaseURL + "cart" + '.json');
    const data = await res.json();

    const data2 = Object.values(data);
    return data2;

}
// Get menu end


// Get cart items start
export const getCartItmes = async () => {
    const cartData = await getCartData();
    const menuData = await getMenuData();

    const cartItems = menuData.filter((menuItem) => cartData.some((cartItem) => menuItem.fbId === cartItem.item));

    const price = cartItems.map((itme) => itme.price);

    let total = 0;

    for (let a = 0; a < price.length; a++) {
        total += price[a];
    }

    cartItems.total = total

    return cartItems;
}
// Get cart items end



// Get menu start
export const getCartCount = async () => {

    const res = await fetch(firebaseURL + "cart" + '.json');
    const data = await res.json();

    const data2 = Object.values(data);
    
    const data3 = data2.length;
    
    return data3;

}
// Get menu end