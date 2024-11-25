import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createRouter, RouterProvider } from "@tanstack/react-router"
// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { NotFound } from "./errors/NotFound";
import { LoadingPage } from "./components/skeletons/LoadingPage";

const queryClient = new QueryClient();

// Create a new router instance
const router = createRouter({ routeTree, defaultNotFoundComponent: NotFound, defaultPendingComponent: LoadingPage, context: { queryClient } })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
