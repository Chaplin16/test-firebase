import { firebase } from './firebase.js';
import { collection, getDocs, addDoc, updateDoc, query, where } from 'https://cdnjs.cloudflare.com/ajax/libs/firebase/9.16.0/firebase-firestore-lite.min.js';

const userCollection = collection(firebase, 'user');

const getAllUser = async() => {
    const product = await getDocs(userCollection);
    return product.docs.map(doc => { return { id: doc.id, ...doc.data() } });
}

const getOneUser = async(idauth) => {
    const product = await getDocs(userCollection);
    return product.docs.map(doc => doc.data()).find(doc => doc.idauth == idauth);
}

const createUser = async(user) => {
    await addDoc(userCollection, user);
}

const updateUser = async(idauth, displayName) => {
    let q = await query(userCollection, where("idauth", "==", idauth));
    let docs = await getDocs(q);
    let user = docs._docs[0].ref;
    await updateDoc(user, {
        displayName: displayName
    });
    let newName = await getOneUser(idauth);
        return newName


};







export { getAllUser, getOneUser, createUser, updateUser };