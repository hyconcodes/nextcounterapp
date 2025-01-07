import Link from "next/link";

export default function Navbar() {
    return (
        <div className='py-3 bg-primary-subtle text-center mb-5'>
            <h1 className='fw-bold text-success mb-3'>NextPostgresSql</h1>
            <div className="d-flex justify-content-center">
                <Link href='/' className="me-5" >Next Counter</Link>
                <Link href='/about' className="me-5">Next Todo</Link>
                <Link href='/user'>Profile</Link>
            </div>
        </div>
    )
}
