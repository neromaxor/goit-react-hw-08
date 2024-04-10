import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsRefreshing } from "../redux/auth/selectors";

export const PrivateRoute = ({
  component: Component,
  redirectTo = "/login",
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
