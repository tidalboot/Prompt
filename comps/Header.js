import Link from 'next/link'


const Header = () => (
    <div>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/write">
            <a>Write</a>
        </Link>
        <style jsx>{`
            a {
                color: #CC838F;
                margin: 15px;
            }
            `}
        </style>
    </div>
)

export default Header