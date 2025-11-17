

const firebaseURL = import.meta.env.VITE_FIREBASE_DB_URL;

export const getMenuData = async () => {
    const res = await fetch(firebaseURL);
    const data = await res.json();

    const data2 = Object.entries(data?.menu?.items).map(([key,value])=>({
        fbId:key,
        ...value
    }))

    return data2;
}

export const addData = () => {
    const data = { nameBox: 'Tanuj is Walter' }

    fetch(firebaseURL, {
        method: 'POST',
        headers: { "Content-Type": 'application/json' },
        body: JSON.stringify(data)
    }).then(() => {
        console.log('added boss');
    });
}