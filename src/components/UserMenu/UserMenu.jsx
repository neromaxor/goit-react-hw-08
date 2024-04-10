import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div className={css.userMenu}>
      <p className={css.greeting}>Welcome {user.name}</p>
      <button className={css.logoutButton} type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
}
