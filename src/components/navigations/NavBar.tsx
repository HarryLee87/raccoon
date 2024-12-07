import { Link } from "@tanstack/react-router"

const NavBar = () => {
    return (
        <>
            <div className="navbar p-2 flex gap-2 justify-between">
                <div className="flex-1">
                    <Link to="/" className="[&.active]:font-bold">
                        Home
                    </Link>
                </div>
                <div>
                    <Link to='/login'>Login</Link>
                    <span className="mx-1">/</span>
                    <Link to='/signup'>Signup</Link>
                </div>
            </div>

            <hr />
        </>
    )

}

export { NavBar }