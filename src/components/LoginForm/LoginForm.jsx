import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import * as Yup from "yup";

export default function LoginForm() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const dispatch = useDispatch();

  const handleSabmit = (values, action) => {
    dispatch(login(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSabmit}
      validationSchema={validationSchema}
    >
      {({ isValid }) => (
        <Form className={css.formContainer}>
          <div className={css.formField}>
            <label htmlFor="email" className={css.formLabel}>
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className={css.formInput}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={css.formError}
            />
          </div>
          <div className={css.formField}>
            <label htmlFor="password" className={css.formLabel}>
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className={css.formInput}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={css.formError}
            />
          </div>
          <button type="submit" disabled={!isValid} className={css.formButton}>
            Log in
          </button>
        </Form>
      )}
    </Formik>
  );
}
