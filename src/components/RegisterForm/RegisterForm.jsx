import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./RegisterForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";

export default function RegisterForm() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const dispatch = useDispatch();

  const handleSabmit = (values, action) => {
    dispatch(register(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSabmit}
      validationSchema={validationSchema}
    >
      {({ isValid }) => (
        <Form className={css.registration_form} autoComplete="off">
          <label htmlFor="name" className={css.label}>
            Username
          </label>
          <Field type="text" name="name" className={css.input} />
          <ErrorMessage name="name" component="div" className={css.formError} />

          <label htmlFor="email" className={css.label}>
            Email
          </label>
          <Field type="email" name="email" className={css.input} />
          <ErrorMessage
            name="email"
            component="div"
            className={css.formError}
          />

          <label htmlFor="password" className={css.label}>
            Password
          </label>
          <Field type="password" name="password" className={css.input} />
          <ErrorMessage
            name="password"
            component="div"
            className={css.formError}
          />

          <button
            type="submit"
            disabled={!isValid}
            className={css.submitButton}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
