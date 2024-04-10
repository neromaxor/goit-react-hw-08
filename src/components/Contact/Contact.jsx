import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "..//../redux/contacts/operations";
import { toast } from "react-hot-toast";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelate = () => {
    dispatch(deleteContact(id))
      .then(() => {
        toast.success("Contact deleted successfully!");
      })
      .catch(() => {
        toast.error("Failed to delete contact. Please try again.");
      });
  };

  return (
    <>
      <div className={css.contactInfo}>
        <p className={css.text}>
          <IoPersonSharp className={css.icon} />
          {name}
        </p>
        <p className={css.text}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.deleteButton} onClick={handleDelate}>
        Delete
      </button>
    </>
  );
}
