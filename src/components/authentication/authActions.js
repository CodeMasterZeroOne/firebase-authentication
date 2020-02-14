import firebase from '../config/fbConfig'

// signup new user
// firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(cred => {
//     console.log(cred.email);
// })

const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}


export default signUp