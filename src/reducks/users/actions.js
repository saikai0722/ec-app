export const SIGN_IN = "SIGN_IN";
export const signInAction = (useState) => {
    return {
        type: "SIGN_IN",
        payload: {
            isSignedIn: true,
            role: useState.role,
            uid: useState.uid,
            username: useState.username
        }
    }
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
    return {
        type: "SIGN_OUT",
        payload: {
            isSignedId: false,
            role: "",
            uid: "",
            username: ""
        }
    }
};