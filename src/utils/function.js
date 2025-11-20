

const firebaseURL = import.meta.env.VITE_FIREBASE_DB_URL;

export const getMenuData = async () => {
    const res = await fetch(firebaseURL+'.json');
    const data = await res.json();

    const data2 = Object.entries(data?.menu?.items).map(([key, value]) => ({
        fbId: key,
        ...value
    }))

    return data2;
}

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