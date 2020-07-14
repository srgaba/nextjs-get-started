import React from 'react';
import axios from 'axios';

import Link from 'next/link';

const User = ({ users }) => (
    <div>
        <ul>
            {users.map(user => (
                <li key={user.id} >{user.login}</li>
            ))}
        </ul>

        <Link href="/">
            <a>Voltar</a>
        </Link>
    </div>
);

User.getInitialProps = async () => {
    const answear = await axios.get(
        'https://api.github.com/orgs/google/members',
    );

    return { users: answear.data };
};

export default User;