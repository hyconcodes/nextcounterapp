import Link from "next/link";

export default function Navbar() {
    return (
        <div className='py-3 bg-primary-subtle text-center mb-5'>
            <h1 className='fw-bold text-success mb-3'>NextPostgresSql</h1>
            <div className="d-flex justify-content-center">
                <Link href='/' className="me-5" >Home</Link>
                <Link href='/about' className="me-5">About</Link>
                <Link href='/todo'>Todo</Link>
            </div>
        </div>
    )
}
