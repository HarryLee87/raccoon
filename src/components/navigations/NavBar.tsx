import { Link } from "@tanstack/react-router"

const NavBar = () => {
    return (
        <>
            <div className="p-2 flex gap-2">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>{' '}
            </div>
            <hr />
        </>
    )

}

export { NavBar }