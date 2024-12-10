import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './routes/Login.tsx'
import SingUp from './routes/SingUp.tsx'
import PortectedRoute from './routes/protected.tsx'
import Home from './routes/Home.tsx'
import { AuthProvider } from './auth/AuthProvider.tsx'
import ForgotPassword from './routes/ForgotPassword.tsx'
import ResetPassword from './routes/ResetPassword.tsx'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/singup',
    element: <SingUp />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
  {
    path: '/',
    element: <PortectedRoute />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
