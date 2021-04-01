import { firebase } from './FirebaseConfig';

export const logInUser = async () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    return await firebase.auth().signInWithPopup(provider)
    .then(() => ({
            message: "Success",
            open: true,
        })
    ).catch((error) => ({
            message: error.message,
            open: true,
        })
    );
};

        // this.setState({
        //     snack:{
        //         message: "Success",
        //         open: true,
        //     }
        // })