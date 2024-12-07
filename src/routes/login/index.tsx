import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from '../../components/login/LoginForm'
import { LoadingPage } from '../../components/skeletons/LoadingPage'

export const Route = createFileRoute('/login/')({
  component: LoginForm,
  pendingComponent: LoadingPage,
})
