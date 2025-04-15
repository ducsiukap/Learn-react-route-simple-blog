const user1 = {
    name: 'vduczz',
    usrn: 'vduczz',
    pwrd: 'PVDuc@13304',
}

const user2 = {
    name: 'Admin',
    usrn: 'admin',
    pwrd: 'admin#123',
}

const user3 = {
    name: '123',
    usrn: '123',
    pwrd: '123',
}


const users = [user1, user2, user3];

function findUser({usrn, pwrd}) {
    for (let u of users) {
        if (u.usrn === usrn && u.pwrd === pwrd) {
            return u;
        }
    }
    return null;
}

// export findUser;
export {findUser};
