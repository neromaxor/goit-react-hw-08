import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { RestrictedRoute } from "./RestrictedRoute";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("../pages/Home"));
const RegisterPage = lazy(() => import("../pages/Registration"));
const LoginPage = lazy(() => import("../pages/Login"));
const ContactsPage = lazy(() => import("../pages/Contacts"));

function App() {
  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <Layout>
        {isRefreshing ? (
          <b>Refreshing user, please wait...</b>
        ) : (
          <Suspense fallback={<p>Loading Page...</p>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={RegisterPage}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={LoginPage}
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    redirectTo="/register"
                    component={ContactsPage}
                  />
                }
              />
              <Route
                path="*"
                element={
                  <div>
                    <h1>Not Found Page</h1>
                    <Link to="/">Back to Homepage</Link>
                  </div>
                }
              />
            </Routes>
          </Suspense>
        )}
      </Layout>
    </>
  );
}
export default App;
