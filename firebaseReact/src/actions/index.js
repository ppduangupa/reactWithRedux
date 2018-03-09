import db from '../firebase';

export const FETCH_USERS = 'fetch_users';
export const CREATE_USER = 'create_user';

export function fetchUsers() {
    const users = db.collection("users");

    return (dispatch) => {
        users.get().then((snapshot) => {
            var data = {};
            _.forEach(snapshot.docs, (value) => {
                data = { ...data, [value.id]: value.data()};
            });

            dispatch({
                type: FETCH_USERS,
                payload: data
            })
        });
    }
}

export function createUsers(name = '', email = '') {
    const data = {
        user_name: 'Oat4',
        user_email: 'Mail4'
    }
    const users = db.collection("users").add(data);

    return (dispatch) => {
        users.then((doc) => dispatch({
            type: CREATE_USER,
            payload: doc.id
        }));
    }
}
