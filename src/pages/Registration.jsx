import { useSelector } from "react-redux";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import { selectError } from "../redux/auth/selectors";
import css from "./Registration.module.css";

export default function Registration() {
  const error = useSelector(selectError);

  return (
    <div className={css.registrationContainer}>
      <h2 className={css.registrationTitle}>Register your account</h2>
      <RegisterForm />
      {error && (
        <h2 className={css.error}>Error validation, please try again</h2>
      )}
    </div>
  );
}
