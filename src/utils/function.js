

const firebaseURL = import.meta.env.VITE_FIREBASE_DB_URL;

export const dataBox = async () => {
    const res = await fetch(firebaseURL);
    const data = await res.json();
    console.log(data);
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