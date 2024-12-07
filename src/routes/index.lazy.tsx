import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
    component: Home
})

function Home() {
    return (
        <div className="p-2">
            <h3 className='text-red-500'>Welcome Home!</h3>
        </div>
    )
}