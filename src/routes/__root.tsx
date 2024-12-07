import { createRootRoute, Outlet, useRouterState } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { NotFound } from '../errors/NotFound'
import { NavBar } from '../components/navigations/NavBar'
import { shouldShowNavBar } from '../utils/navigation-config'

export const Route = createRootRoute({
    component: RootComponent,
    notFoundComponent: NotFound,
})

function RootComponent() {
    const { location } = useRouterState()
    const showNavBar = shouldShowNavBar(location.pathname)
    return (
        <>
            {showNavBar && <NavBar />}
            <div className="max-w-screen-2xl mx-auto">
                <Outlet />
            </div>
            <TanStackRouterDevtools />
            <ReactQueryDevtools />
        </>
    )
}