
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
export const addCart = (userId, value) => {

    const data = { item: value }

    fetch(firebaseURL + 'cart/' + userId + '.json', {
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
    const data = value;
    fetch(firebaseURL + 'tableBook/.json', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(() => {
        console.log('table add')
    });
}
// Book table end


// Get menu start
export const getCartData = async (userId) => {

    const res = await fetch(firebaseURL + "cart/" + userId + '.json');
    const data = await res.json();

    if (!data) {
        return [];
    }

    const data2 = Object.entries(data).map(([key, value]) => ({
        cartId: key,
        ...value
    }))

    return data2;

}
// Get menu end


// Get cart items start
export const getCartItmes = async (userBoxId) => {

    const cartData = await getCartData(userBoxId);

    const menuData = await getMenuData();

    const cartItems = [];

    for (const menuItem of menuData) {
        const data = cartData.find(item => item.item === menuItem.fbId);

        if (data) {
            cartItems.push({
                ...menuItem,
                cartId: data.cartId
            })
        }
    }

    const price = cartItems.map((itme) => itme.price);

    let total = 0;

    for (let a = 0; a < price.length; a++) {
        total += parseInt(price[a])
    }

    cartItems.total = total

    return cartItems;
}
// Get cart items end


// Get menu start
export const getCartCount = async (userId) => {

    const res = await fetch(firebaseURL + "cart/" + userId + '.json');
    const data = await res.json();

    if (!data) {
        return [];
    }

    const data2 = Object?.values(data);
    const data3 = data2.length;

    return data3;

}
// Get menu end


// place order start 
export const placeOrder = (orderId, userId, order) => {

    fetch(firebaseURL + "order/" + userId + '/' + orderId + '.json', {
        method: "POST",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(order)
    }).then(() => {
        console.log("added");
    });

    fetch(firebaseURL + "cart" + '.json', {
        method: 'DELETE'
    }).then(() => {
        console.log('deleted');
    });

}
// place order end 



// delete cart item start
export const deleteCartItem = async (id, val) => {

    try {

        const res = await fetch(firebaseURL + 'cart/' + id + '/' + val + '.json', {
            method: "DELETE"
        });

        if (!res.ok) {
            throw new Error('unable to delete');
        }

        return true;

    } catch (error) {
        console.error(error);
        return false;
    }

}
// delete cart item end


// Timestamp + Random Number (Recommended)
export const createDataId = (val) => {
    return `${val}-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 4)}`;
};


// Profile add start
export const profileAddDetail = async (value, id) => {

    const data = value;

    try {

        const res = await fetch(firebaseURL + 'users/' + id + '.json', {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw new Error('unable to add details');
        }

    } catch (error) {
        console.error(error);
    }

}
// Profile add end


// Profile add start
export const SignUpDetail = (value, id) => {

    const data = value;
    fetch(firebaseURL + 'users/' + id + '.json', {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(() => {
        console.log('profile add detail')
    });

}
// Profile add end


// get profile data start
export const getProfileData = async (id) => {

    try {

        const res = await fetch(firebaseURL + 'users/' + id + '.json');

        if (!res.ok) {
            throw new Error('unable to get data')
        }

        const dataBox = res.json();

        return dataBox;

    } catch (error) {
        console.error(error);

        return [];
    }

}
// get profile data end




// get orders start

export const getOrder = async (userId) => {

    try {

        const res = await fetch(firebaseURL + 'order/' + userId + '.json');

        if (!res?.ok) {
            throw new Error('unable to get order data');
        }

        const data = await res.json();

        const data2 = Object.values(data);

        const filterData = [];

        for (const item of data2) {
            const arrVal = Object.values(item)[0];
            filterData.push(arrVal)
        }

        return filterData

    } catch (error) {
        console.error(error);
        return [];
    }

}

// get orders end


