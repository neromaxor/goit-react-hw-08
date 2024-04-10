import LoginForm from "../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import css from "./Login.module.css";

export default function Login() {
  return (
    <div className={css.loginContainer}>
      <h2 className={css.loginTitle}>Please log in</h2>
      <LoginForm />
      <p className={css.registerLink}>
        or <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
