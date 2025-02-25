// ProtectedRoute.jsx
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'

const ProtectedRoute = ({ children }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}

export default ProtectedRoute

// Usage in your router
{/* <Route 
  path="/dashboard" 
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  } 
/> */}