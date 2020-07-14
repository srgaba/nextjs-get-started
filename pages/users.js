import React from 'react';
import axios from 'axios';

const User = ({ users }) => (
    <div>
        <ul>
            {users.map(user => (
                <li key={user.id} >{user.login}</li>
            ))}
        </ul>
    </div>
);

User.getInitialProps = async () => {
    const answear = await axios.get(
        'https://api.github.com/orgs/google/members',
    );

    return { users: answear.data };
};

export default User;