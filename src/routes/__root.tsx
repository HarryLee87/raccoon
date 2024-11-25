import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { NotFound } from '../errors/NotFound'
import { NavBar } from '../components/navigations/NavBar'

export const Route = createRootRoute({
    component: RootComponent,
    notFoundComponent: NotFound,
    // pendingComponent: DelayedLoading
})

function RootComponent() {
    return (
        <>
            <NavBar />
            <Outlet />
            <TanStackRouterDevtools />
            <ReactQueryDevtools />
        </>
    )
}