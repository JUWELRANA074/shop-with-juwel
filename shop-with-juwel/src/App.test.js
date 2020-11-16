import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('lk02RZvB5HAoUbNeERtR').collection('cartItems').doc('ga0JjFHEuLW9rxE9m5v7')
firestore.doc('/users/lk02RZvB5HAoUbNeERtR/cartItems/ga0JjFHEuLW9rxE9m5v7');
firestore.collection('/users/lk02RZvB5HAoUbNeERtR/cartItems');
