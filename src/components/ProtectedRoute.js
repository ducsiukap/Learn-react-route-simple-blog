import { Navigate } from "react-router-dom";

function ProtectedRoute({loggedIn, children}) {
    if (loggedIn) return children;
    return <Navigate to="/login" replace/>
}

export default ProtectedRoute;