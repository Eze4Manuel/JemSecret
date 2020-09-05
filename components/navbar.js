import Link from 'next/link';
const Navbar = () => (
    <div>
        <ul>
            <li><Link href='/'><a>Home</a></Link></li>
            <li><Link href='/about'><a>About</a></Link></li>
        </ul>
        <style jsx>{`
            ul{
                background: red;
            }

        `}    
        </style>
    </div>
);


export default Navbar;