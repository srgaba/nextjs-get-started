import Link from 'next/link';
import Head from 'next/head';

const Home = () => (
    <div>
        <Head>
            <title>Hello World</title>
        </Head>

        <img src="static/panda.jpg" width="200"/>
        
        <h1>Hello World!</h1>
        <Link href="/users">
            <a>Usuários</a>
        </Link>
    </div>
);

export default Home;